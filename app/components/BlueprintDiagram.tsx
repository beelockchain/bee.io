// src/BlueprintDiagram.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Blueprint, BlueprintInput, BlueprintPhase } from "./types";

interface Point {
  x: number;
  y: number;
}

interface PathData {
  d: string;
  dots: Point[];
}

interface PhaseColor {
  chip: string;
  wire: string;
  dot: string;
  grid: string;
}

interface BlueprintDiagramProps {
  blueprint: Blueprint;
  title?: string;
}

function clampSteps(steps: string[] = [], max: number = 6): string[] {
  return (steps || []).slice(0, max);
}

const PHASE_COLORS: PhaseColor[] = [
  {
    chip: "from-indigo-500 to-indigo-600",
    wire: "rgba(99,102,241,0.55)",
    dot: "#6366F1",
    grid: "rgba(99,102,241,0.08)",
  },
  {
    chip: "from-emerald-500 to-emerald-600",
    wire: "rgba(16,185,129,0.55)",
    dot: "#10B981",
    grid: "rgba(16,185,129,0.08)",
  },
  {
    chip: "from-amber-500 to-amber-600",
    wire: "rgba(245,158,11,0.55)",
    dot: "#F59E0B",
    grid: "rgba(245,158,11,0.08)",
  },
  {
    chip: "from-rose-500 to-rose-600",
    wire: "rgba(244,63,94,0.55)",
    dot: "#F43F5E",
    grid: "rgba(244,63,94,0.08)",
  },
  {
    chip: "from-purple-500 to-purple-600",
    wire: "rgba(168,85,247,0.55)",
    dot: "#A855F7",
    grid: "rgba(168,85,247,0.08)",
  },
  {
    chip: "from-blue-500 to-blue-600",
    wire: "rgba(59,130,246,0.55)",
    dot: "#3B82F6",
    grid: "rgba(59,130,246,0.08)",
  },
];

const BlueprintDiagram: React.FC<BlueprintDiagramProps> = ({ blueprint, title }) => {
  /* -------------------- HOOKS FIRST (ALWAYS) -------------------- */

  const containerRef = useRef<HTMLDivElement>(null);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[][]>([]);
  const [paths, setPaths] = useState<PathData[]>([]);

  // FIXED: Accept ALL phases from API, don't filter by name
  const phases = useMemo(() => {
    if (!blueprint?.phases?.length) {
      console.warn("⚠️ No phases in blueprint:", blueprint);
      return [];
    }

    console.log("📊 Processing phases:", blueprint.phases);

    // Take up to 6 phases, clamp steps to 6 each
    return blueprint.phases
      .slice(0, 6)
      .map((p) => ({
        ...p,
        steps: clampSteps(p.steps, 6),
      }));
  }, [blueprint]);

  const heading = title || blueprint?.title || "Blueprint";

  // Initialize stepRefs structure (SIDE EFFECT → useEffect)
  useEffect(() => {
    stepRefs.current = phases.map(
      (p) => new Array((p.steps || []).length).fill(null)
    );
  }, [phases]);

  const buildRightAnglePath = (x1: number, y1: number, x2: number, y2: number): string => {
    const midX = (x1 + x2) / 2;
    return `M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2} ${y2}`;
  };

  const recomputeWires = (): void => {
    const root = containerRef.current;
    if (!root) return;

    const rootRect = root.getBoundingClientRect();
    const newPaths: PathData[] = [];

    const centerOf = (el: HTMLElement): Point => {
      const r = el.getBoundingClientRect();
      return {
        x: r.left - rootRect.left + r.width / 2,
        y: r.top - rootRect.top + r.height / 2,
      };
    };

    // Phase → Phase
    for (let i = 0; i < phases.length - 1; i++) {
      const a = phaseRefs.current[i];
      const b = phaseRefs.current[i + 1];
      if (!a || !b) continue;

      const ar = a.getBoundingClientRect();
      const br = b.getBoundingClientRect();

      const start: Point = {
        x: ar.right - rootRect.left,
        y: ar.top - rootRect.top + ar.height / 2,
      };
      const end: Point = {
        x: br.left - rootRect.left,
        y: br.top - rootRect.top + br.height / 2,
      };

      newPaths.push({
        d: buildRightAnglePath(start.x, start.y, end.x, end.y),
        dots: [start, end],
      });
    }

    // Phase → Steps
    phases.forEach((_, pi) => {
      const chip = phaseRefs.current[pi];
      if (!chip) return;

      const chipRect = chip.getBoundingClientRect();
      const chipRight = chipRect.right - rootRect.left;
      const chipY = chipRect.top - rootRect.top + chipRect.height / 2;

      (stepRefs.current[pi] || []).forEach((stepEl) => {
        if (!stepEl) return;

        const S = centerOf(stepEl);
        const start: Point = { x: chipRight, y: chipY };
        const end: Point = { x: S.x - 24, y: S.y };

        newPaths.push({
          d: buildRightAnglePath(start.x, start.y, end.x, end.y) +
            ` L ${S.x} ${S.y}`,
          dots: [start, { x: S.x, y: S.y }],
        });
      });
    });

    setPaths(newPaths);
  };

  useEffect(() => {
    recomputeWires();
    window.addEventListener("resize", recomputeWires);
    return () => window.removeEventListener("resize", recomputeWires);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phases]);

  /* -------------------- SAFE EARLY RETURN -------------------- */

  if (!phases.length) {
    console.error("❌ No phases to display!");
    return (
      <div className="w-full bg-white rounded-xl p-4 sm:p-6">
        <div className="text-center py-8">
          <p className="text-red-600 font-bold">Error: No phases found in blueprint</p>
          <p className="text-sm text-gray-600 mt-2">Check console for details</p>
        </div>
      </div>
    );
  }

  console.log("✅ Rendering", phases.length, "phases");

  /* -------------------- JSX -------------------- */

  return (
    <div className="w-full bg-white rounded-xl p-2 sm:p-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="text-xl sm:text-2xl font-extrabold text-gray-900">{heading}</div>
          <div className="text-sm text-gray-600 mt-1">
            {blueprint.service ? `Service: ${blueprint.service}` : "Blueprint"}
          </div>
        </div>
        <div className="text-[11px] px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
          EVO AI
        </div>
      </div>

      {/* Inputs (show exactly what user picked) */}
      {Array.isArray(blueprint.inputs) && blueprint.inputs.length > 0 && (
        <div className="mb-5">
          <div className="text-[12px] font-semibold text-gray-700 mb-2">Selected inputs</div>
          <div className="flex flex-wrap gap-2">
            {blueprint.inputs.map((it: BlueprintInput, idx: number) => (
              <div
                key={`${it.id}-${idx}`}
                className="rounded-full border border-gray-200 bg-white px-3 py-1.5"
              >
                <span className="text-[10px] font-semibold text-gray-500 uppercase">
                  {it.id.replace(/_/g, " ")}:
                </span>{" "}
                <span className="text-[11px] text-gray-900">{it.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CIRCUIT BOARD */}
      <div
        ref={containerRef}
        className="relative rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        {/* subtle grid like PCB */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:28px_28px]"
          />
        </div>

        {/* Wires layer */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {paths.map((p, i) => (
            <g key={i}>
              <path
                d={p.d}
                fill="none"
                stroke={PHASE_COLORS[i % PHASE_COLORS.length].wire}
                style={{ filter: "drop-shadow(0 0 6px rgba(0,0,0,0.15))" }}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* connection dots */}
              {p.dots.map((pt: Point, j: number) => (
                <circle
                  key={j}
                  cx={pt.x}
                  cy={pt.y}
                  r="4"
                  fill={PHASE_COLORS[i % PHASE_COLORS.length].dot}
                  stroke="white"
                  strokeWidth="2"
                />
              ))}
            </g>
          ))}
        </svg>

        {/* Nodes */}
        <div className="relative p-4 sm:p-6">
          <div className={`grid gap-4 ${
            phases.length <= 2 ? 'grid-cols-1 md:grid-cols-2' :
            phases.length === 3 ? 'grid-cols-1 lg:grid-cols-3' :
            'grid-cols-1 lg:grid-cols-4'
          }`}>
            {phases.map((phase: BlueprintPhase, pi: number) => (
              <div key={`${phase.title}-${pi}`} className="relative">
                {/* PHASE CHIP */}
                <div
                  ref={(el) => {phaseRefs.current[pi] = el}}
                  className={`rounded-2xl bg-gradient-to-br ${
                    PHASE_COLORS[pi % PHASE_COLORS.length].chip
                  } text-white shadow-lg px-4 py-3`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-sm">
                      {pi + 1}. {phase.title}
                    </div>
                  </div>
                  <div className="text-[11px] opacity-90 mt-1">
                    {phase.steps?.length || 0} steps
                  </div>
                </div>

                {/* STEP NODES */}
                <div className="mt-3 space-y-3">
                  {(phase.steps || []).map((step: string, si: number) => (
                    <div
                      key={`${pi}-${si}`}
                      ref={(el) => {
                        if (!stepRefs.current[pi]) stepRefs.current[pi] = [];
                        stepRefs.current[pi][si] = el;
                      }}
                      className="rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm"
                    >
                      <div className="flex items-start gap-2">
                        {/* node dot */}
                        <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-gray-300 flex-shrink-0" />
                        <div>
                          <div className="text-[10px] font-semibold text-gray-500">
                            STEP {si + 1}
                          </div>
                          <div className="text-sm text-gray-800 leading-snug">{step}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 text-[11px] text-gray-400">
        Evo AI Blueprint Generator
      </div>
    </div>
  );
};

export default BlueprintDiagram;