// app/api/submit-user/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import * as XLSX from 'xlsx';

const JSON_PATH  = path.join(process.cwd(), 'data', 'submissions.json');
const EXCEL_PATH = path.join(process.cwd(), 'data', 'submissions.xlsx');

const HEADERS = [
  'ID', 'Timestamp', 'Full Name', 'Email',
  'Phone', 'Company', 'Service', 'Quiz Answers',
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userInfo, service, answers } = body;

    // ── Ensure data/ folder exists ─────────────────────────────────────────
    const dir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const id        = Date.now();
    const timestamp = new Date().toISOString();
    const answersText = Object.entries(answers || {})
      .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`)
      .join(' | ');

    // ── 1. Save to JSON ────────────────────────────────────────────────────
    const submission = {
      id,
      timestamp,
      name:    userInfo.name,
      email:   userInfo.email,
      phone:   userInfo.phone,
      company: userInfo.company || '',
      service,
      answers,
    };

    let submissions: typeof submission[] = [];
    if (fs.existsSync(JSON_PATH)) {
      try { submissions = JSON.parse(fs.readFileSync(JSON_PATH, 'utf-8')); }
      catch { submissions = []; }
    }
    submissions.push(submission);
    fs.writeFileSync(JSON_PATH, JSON.stringify(submissions, null, 2), 'utf-8');

    // ── 2. Save to Excel ───────────────────────────────────────────────────
    let wb: XLSX.WorkBook;
    let ws: XLSX.WorkSheet;

    if (fs.existsSync(EXCEL_PATH)) {
      const buffer = fs.readFileSync(EXCEL_PATH);
      wb = XLSX.read(buffer, { type: 'buffer' });
      ws = wb.Sheets['Submissions'];
    } else {
      wb = XLSX.utils.book_new();
      ws = XLSX.utils.aoa_to_sheet([HEADERS]);
      ws['!cols'] = [
        { wch: 14 }, { wch: 22 }, { wch: 20 }, { wch: 28 },
        { wch: 16 }, { wch: 22 }, { wch: 32 }, { wch: 80 },
      ];
      XLSX.utils.book_append_sheet(wb, ws, 'Submissions');
    }

    XLSX.utils.sheet_add_aoa(ws, [[
      id, timestamp,
      userInfo.name, userInfo.email, userInfo.phone,
      userInfo.company || '—',
      service, answersText,
    ]], { origin: -1 });

    const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
    fs.writeFileSync(EXCEL_PATH, buf);

    console.log(`✅ Saved to JSON + Excel [${id}] — ${userInfo.name} <${userInfo.email}>`);
    return NextResponse.json({ success: true, id });
  } catch (err) {
    console.error('❌ Failed to save submission:', err);
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
  }
}