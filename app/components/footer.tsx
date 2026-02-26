import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const FacebookIcon = () => (
    <svg width="22" height="22" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.5 7.75C15.5 11.625 12.6562 14.8438 8.9375 15.4062V10H10.75L11.0938 7.75H8.9375V6.3125C8.9375 5.6875 9.25 5.09375 10.2188 5.09375H11.1875V3.1875C11.1875 3.1875 10.3125 3.03125 9.4375 3.03125C7.6875 3.03125 6.53125 4.125 6.53125 6.0625V7.75H4.5625V10H6.53125V15.4062C2.8125 14.8438 0 11.625 0 7.75C0 3.46875 3.46875 0 7.75 0C12.0312 0 15.5 3.46875 15.5 7.75Z"
        fill="white"
      />
    </svg>
  );

  const TwitterIcon = () => (
   <svg width="22" height="22" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.46973 0.0390625C14.6996 0.0390625 18.9395 4.29263 18.9395 9.53906C18.9394 14.7855 14.6996 19.0391 9.46973 19.0391C4.24002 19.0389 8.74258e-05 14.7854 0 9.53906C0 4.29272 4.23997 0.0392127 9.46973 0.0390625ZM8.27441 10.1592L4.02344 15.1162H4.98438L8.70117 10.7813L11.6709 15.1162H14.9131L10.5039 8.67968L14.5586 3.95215H13.5977L10.0771 8.05664L7.26562 3.95215H4.02344L8.27441 10.1592ZM13.5977 14.4239H12.1221L5.33008 4.67773H6.80566L13.5977 14.4239Z" fill="white"/>
</svg>

  );

  const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 0C13.5312 0 14 0.46875 14 1.03125V13C14 13.5625 13.5312 14 13 14H0.96875C0.4375 14 0 13.5625 0 13V1.03125C0 0.46875 0.4375 0 0.96875 0H13ZM4.21875 12V5.34375H2.15625V12H4.21875ZM3.1875 4.40625C3.84375 4.40625 4.375 3.875 4.375 3.21875C4.375 2.5625 3.84375 2 3.1875 2C2.5 2 1.96875 2.5625 1.96875 3.21875C1.96875 3.875 2.5 4.40625 3.1875 4.40625ZM12 12V8.34375C12 6.5625 11.5938 5.15625 9.5 5.15625C8.5 5.15625 7.8125 5.71875 7.53125 6.25H7.5V5.34375H5.53125V12H7.59375V8.71875C7.59375 7.84375 7.75 7 8.84375 7C9.90625 7 9.90625 8 9.90625 8.75V12H12Z"
        fill="white"
      />
    </svg>
  );
    const InstagramIcon = () => (
   <svg width="20" height="20" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 6.25152C0 3.31852 -9.27183e-08 1.85163 0.911556 0.940852C1.82311 0.0300746 3.28922 0.0292969 6.22222 0.0292969H7.77778C10.7108 0.0292969 12.1777 0.0292968 13.0884 0.940852C13.9992 1.85241 14 3.31852 14 6.25152V7.80707C14 10.7401 14 12.207 13.0884 13.1177C12.1769 14.0285 10.7108 14.0293 7.77778 14.0293H6.22222C3.28922 14.0293 1.82233 14.0293 0.911556 13.1177C0.000777721 12.2062 0 10.7401 0 7.80707V6.25152ZM11.6667 3.5293C11.6667 3.83872 11.5437 4.13546 11.325 4.35426C11.1062 4.57305 10.8094 4.69596 10.5 4.69596C10.1906 4.69596 9.89383 4.57305 9.67504 4.35426C9.45625 4.13546 9.33333 3.83872 9.33333 3.5293C9.33333 3.21988 9.45625 2.92313 9.67504 2.70434C9.89383 2.48555 10.1906 2.36263 10.5 2.36263C10.8094 2.36263 11.1062 2.48555 11.325 2.70434C11.5437 2.92313 11.6667 3.21988 11.6667 3.5293ZM8.55556 7.80707C8.55556 8.21963 8.39167 8.6153 8.09994 8.90702C7.80822 9.19874 7.41256 9.36263 7 9.36263C6.58744 9.36263 6.19178 9.19874 5.90006 8.90702C5.60833 8.6153 5.44444 8.21963 5.44444 7.80707C5.44444 7.39452 5.60833 6.99885 5.90006 6.70713C6.19178 6.41541 6.58744 6.25152 7 6.25152C7.41256 6.25152 7.80822 6.41541 8.09994 6.70713C8.39167 6.99885 8.55556 7.39452 8.55556 7.80707ZM10.1111 7.80707C10.1111 8.63219 9.78333 9.42352 9.19989 10.007C8.61644 10.5904 7.82512 10.9182 7 10.9182C6.17488 10.9182 5.38356 10.5904 4.80011 10.007C4.21667 9.42352 3.88889 8.63219 3.88889 7.80707C3.88889 6.98196 4.21667 6.19063 4.80011 5.60719C5.38356 5.02374 6.17488 4.69596 7 4.69596C7.82512 4.69596 8.61644 5.02374 9.19989 5.60719C9.78333 6.19063 10.1111 6.98196 10.1111 7.80707Z" fill="white"/>
</svg>

  );
      const PinterestIcon = () => (
 <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 1.5V12.5C14 13.3281 13.3281 14 12.5 14H4.825C5.13125 13.4875 5.525 12.75 5.68125 12.1469C5.775 11.7875 6.15938 10.3219 6.15938 10.3219C6.40938 10.8 7.14062 11.2031 7.91875 11.2031C10.2344 11.2031 11.9 9.075 11.9 6.43125C11.9 3.89688 9.83125 2 7.16875 2C3.85625 2 2.1 4.22188 2.1 6.64375C2.1 7.76875 2.7 9.16875 3.65625 9.61563C3.80312 9.68438 3.87812 9.65312 3.9125 9.5125C3.9375 9.40625 4.06875 8.88438 4.125 8.64375C4.14375 8.56563 4.13438 8.5 4.07188 8.425C3.75625 8.04063 3.5 7.33438 3.5 6.675C3.5 4.98125 4.78125 3.34375 6.96562 3.34375C8.85 3.34375 10.1719 4.62812 10.1719 6.46562C10.1719 8.54062 9.125 9.97812 7.75938 9.97812C7.00625 9.97812 6.44375 9.35625 6.62187 8.59062C6.8375 7.67812 7.25625 6.69375 7.25625 6.03438C7.25625 4.37813 4.89687 4.60625 4.89687 6.81563C4.89687 7.49375 5.125 7.95625 5.125 7.95625C4.14375 12.1063 3.99687 12.1594 4.2 13.975L4.26875 14H1.5C0.671875 14 0 13.3281 0 12.5V1.5C0 0.671875 0.671875 0 1.5 0H12.5C13.3281 0 14 0.671875 14 1.5Z" fill="white"/>
</svg>


  );
  const LocationIcon = () => (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_517_6869)">
        <g clipPath="url(#clip1_517_6869)">
          <path
            d="M21.4791 8.80144C20.3854 3.98894 16.1875 1.82227 12.5 1.82227C12.5 1.82227 12.5 1.82227 12.4896 1.82227C8.81248 1.82227 4.60414 3.97852 3.51039 8.79102C2.29164 14.166 5.58331 18.7181 8.56248 21.5827C9.66664 22.6452 11.0833 23.1764 12.5 23.1764C13.9166 23.1764 15.3333 22.6452 16.4271 21.5827C19.4062 18.7181 22.6979 14.1764 21.4791 8.80144ZM12.5 14.0202C10.6875 14.0202 9.21873 12.5514 9.21873 10.7389C9.21873 8.92644 10.6875 7.45769 12.5 7.45769C14.3125 7.45769 15.7812 8.92644 15.7812 10.7389C15.7812 12.5514 14.3125 14.0202 12.5 14.0202Z"
            fill="#00FF97"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_517_6869">
          <rect width="25" height="25" fill="white" />
        </clipPath>
        <clipPath id="clip1_517_6869">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_517_6880)">
        <g clipPath="url(#clip1_517_6880)">
          <path
            d="M18.3568 11.1986C17.9089 11.1986 17.5547 10.834 17.5547 10.3965C17.5547 10.0111 17.1693 9.20898 16.5235 8.51106C15.888 7.83398 15.1901 7.43814 14.6068 7.43814C14.1589 7.43814 13.8047 7.07356 13.8047 6.63606C13.8047 6.19856 14.1693 5.83398 14.6068 5.83398C15.6485 5.83398 16.7422 6.39648 17.7005 7.4069C18.5964 8.35481 19.1693 9.5319 19.1693 10.3861C19.1693 10.834 18.8047 11.1986 18.3568 11.1986Z"
            fill="#00FF97"
          />
          <path
            d="M22.1146 11.1986C21.6667 11.1986 21.3125 10.834 21.3125 10.3965C21.3125 6.69856 18.3021 3.69856 14.6146 3.69856C14.1667 3.69856 13.8125 3.33398 13.8125 2.89648C13.8125 2.45898 14.1667 2.08398 14.6042 2.08398C19.1875 2.08398 22.9167 5.81314 22.9167 10.3965C22.9167 10.834 22.5521 11.1986 22.1146 11.1986Z"
            fill="#00FF97"
          />
          <path
            d="M12.2839 14.8027L8.87761 18.209C8.50261 17.8757 8.13802 17.5319 7.78386 17.1777C6.71094 16.0944 5.74219 14.959 4.87761 13.7715C4.02344 12.584 3.33594 11.3965 2.83594 10.2194C2.33594 9.03189 2.08594 7.89648 2.08594 6.81314C2.08594 6.10481 2.21094 5.42773 2.46094 4.80273C2.71094 4.16731 3.10678 3.58398 3.65886 3.06314C4.32553 2.40689 5.05469 2.08398 5.82553 2.08398C6.11719 2.08398 6.40886 2.14648 6.66928 2.27148C6.94011 2.39648 7.17969 2.58398 7.36719 2.85481L9.78386 6.26106C9.97136 6.52148 10.1068 6.76106 10.2005 6.99023C10.2943 7.20898 10.3464 7.42773 10.3464 7.62564C10.3464 7.87564 10.2735 8.12564 10.1276 8.36523C9.99219 8.60481 9.79427 8.85481 9.54427 9.10481L8.75261 9.92773C8.63802 10.0423 8.58594 10.1777 8.58594 10.3444C8.58594 10.4277 8.59636 10.5007 8.61719 10.584C8.64844 10.6673 8.67969 10.7298 8.70053 10.7923C8.88803 11.1361 9.21094 11.584 9.66927 12.1257C10.138 12.6673 10.638 13.2194 11.1797 13.7715C11.5547 14.1361 11.9193 14.4902 12.2839 14.8027Z"
            fill="#00FF97"
          />
          <path
            d="M22.8854 19.0937C22.8854 19.3854 22.8333 19.6875 22.7292 19.9792C22.6979 20.0625 22.6667 20.1458 22.625 20.2292C22.4479 20.6042 22.2188 20.9583 21.9167 21.2917C21.4063 21.8542 20.8438 22.2604 20.2083 22.5208C20.1979 22.5208 20.1875 22.5312 20.1771 22.5312C19.5625 22.7812 18.8958 22.9167 18.1771 22.9167C17.1146 22.9167 15.9792 22.6667 14.7812 22.1563C13.5833 21.6458 12.3854 20.9583 11.1979 20.0938C10.7917 19.7917 10.3854 19.4896 10 19.1667L13.4062 15.7604C13.6979 15.9792 13.9583 16.1458 14.1771 16.2604C14.2292 16.2812 14.2917 16.3125 14.3646 16.3437C14.4479 16.375 14.5312 16.3854 14.625 16.3854C14.8021 16.3854 14.9375 16.3229 15.0521 16.2083L15.8438 15.4271C16.1042 15.1667 16.3542 14.9688 16.5938 14.8438C16.8333 14.6979 17.0729 14.625 17.3333 14.625C17.5312 14.625 17.7396 14.6667 17.9688 14.7604C18.1979 14.8542 18.4375 14.9896 18.6979 15.1667L22.1458 17.6146C22.4167 17.8021 22.6042 18.0208 22.7188 18.2812C22.8229 18.5417 22.8854 18.8021 22.8854 19.0937Z"
            fill="#00FF97"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_517_6880">
          <rect width="25" height="25" fill="white" />
        </clipPath>
        <clipPath id="clip1_517_6880">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  const ArrowIcon = ({ className = "" }: { className?: string }) => (
    <svg width="28" className={className} height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.7562 5.97763L5.0625 19.2773L6.75135 21.2702L22.445 7.97048L20.7562 5.97763Z" fill="white" />
      <path d="M9.96159 4.85607L7.96875 6.54492L9.6576 8.53777L11.6504 6.84892L9.96159 4.85607Z" fill="white" />
      <path d="M13.6491 5.15881L11.6562 6.84766L13.3451 8.8405L15.3379 7.15165L13.6491 5.15881Z" fill="white" />
      <path d="M17.3288 5.4635L15.3359 7.15234L17.0248 9.14519L19.0176 7.45634L17.3288 5.4635Z" fill="white" />
      <path d="M20.7038 9.44787L18.7109 11.1367L20.3998 13.1296L22.3926 11.4407L20.7038 9.44787Z" fill="white" />
      <path d="M20.3991 13.1315L18.4062 14.8203L20.0951 16.8132L22.0879 15.1243L20.3991 13.1315Z" fill="white" />
      <path d="M20.0944 16.8131L18.1016 18.502L19.7904 20.4948L21.7833 18.806L20.0944 16.8131Z" fill="white" />
    </svg>
  );
const MailIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1060_3451)">
      <path d="M11.9691 9.28516L10.7509 10.5075C10.2568 11.0033 9.38763 11.014 8.88294 10.5075L7.66461 9.28516L3.28906 13.6749C3.45194 13.7503 3.63151 13.7952 3.82241 13.7952H15.8113C16.0023 13.7952 16.1818 13.7503 16.3446 13.675L11.9691 9.28516Z" fill="black"/>
      <path d="M15.8113 3.56836H3.82237C3.63146 3.56836 3.45188 3.6133 3.28906 3.68862L7.96466 8.37972L7.96564 8.3804L7.96602 8.38116L9.48633 9.90648C9.64779 10.0679 9.98593 10.0679 10.1474 9.90648L11.6674 8.38142L11.6681 8.3804L11.6691 8.37972L16.3446 3.68859C16.1817 3.61325 16.0022 3.56836 15.8113 3.56836Z" fill="black"/>
      <path d="M2.68285 4.2832C2.59858 4.45361 2.54688 4.64278 2.54688 4.84538V12.516C2.54688 12.7186 2.59853 12.9078 2.68282 13.0782L7.06598 8.68086L2.68285 4.2832Z" fill="black"/>
      <path d="M16.9534 4.2832L12.5703 8.68089L16.9534 13.0783C17.0377 12.9079 17.0894 12.7187 17.0894 12.5161V4.84545C17.0894 4.64278 17.0377 4.45361 16.9534 4.2832Z" fill="black"/>
    </g>
  </svg>
);
const socials = [
  {
    href: "https://www.facebook.com/61585163291942",
    icon: FacebookIcon,
    label: "Facebook",
  },
  {
    href: "https://x.com/Beelockchain_io",
    icon: TwitterIcon,
    label: "Twitter",
  },
  {
    href: "https://www.linkedin.com/company/beelockchain-io",
    icon: LinkedInIcon,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/beelockchain_io",
    icon: InstagramIcon,
    label: "Instagram",
  },
  {
    href: "https://in.pinterest.com/beelockchain_io",
    icon: PinterestIcon,
    label: "Pinterest",
  },
];

  return (
<footer className="relative w-full bg-[#00020f] overflow-hidden flex flex-col items-center">

  {/* ================= DESKTOP / TABLET ================= */}
  <div className="hidden sm:block relative w-full bg-[#00020f] overflow-hidden min-h-[1000px] sm:min-h-[700px]  md:min-h-[800px]  lg:min-h-[800px]">

    {/* BACKGROUND TEXT */}
    <img
      src="/assets/images/footer-bg-text.png"
      alt="Beelock"
      className="
        absolute top-8 sm:top-10
        left-1/2 -translate-x-1/2
        w-[95%] sm:w-[90%] lg:w-[80%]
        h-72 sm:h-80 lg:h-96
        object-contain opacity-60
      "
    />

    {/* EMAIL CTA */}
    <div className="absolute left-1/2 -translate-x-1/2 top-[110px] sm:top-[130px] md:top-[160px] lg:top-[200px] w-[90%] sm:w-[520px] h-[70px] lg:h-[78px] rounded-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#3adcff] to-[#1bffe1]" />
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <MailIcon className="w-8 h-8 lg:w-10 lg:h-10" />
      </div>
      <p className="absolute left-[80px] sm:left-[90px] top-1/2 -translate-y-1/2 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-manrope text-black">
        contact@beelockchain.com
      </p>
    </div>

    {/* DESCRIPTION */}
    <div className="absolute left-1/2 -translate-x-1/2 top-[260px] sm:top-[300px] lg:top-[350px] w-[95%] sm:w-[90%] lg:w-[80%] px-6 text-start">
      <p className="text-[15px] sm:text-[16px] md:text-[18px] font-poppins font-semibold leading-relaxed">
        <span className="text-[#1BFFE1]">
          Beelockchain –World’s First AI-Centric Blockchain Development Company
        </span>
        <br />
        <span className="text-white/80">
          Future-ready blockchain development, smart contract solutions,
          Web3 ecosystems, and AI-powered <br /> automation under one roof.
        </span>
      </p>
    </div>

    {/* NAVIGATION */}
<div className="
  absolute left-0 w-full
  top-[420px] sm:top-[460px] md:top-[470px]  lg:top-[500px]
  flex justify-center flex-wrap
  gap-6
  sm:gap-10
  md:gap-8
  lg:gap-20
  xl:gap-28
">
      {[
        ["What we do?", "Services"],
        ["Who we are?", "About us"],
        ["How we deliver", "Pitch Deck"],
        ["What we're good at?", "Our project"],
        // ["News?", "News"],
      ].map(([label, value], i) => (
        <div key={i} className="text-center">
          <p className="text-xs sm:text-sm md:text-base font-poppins uppercase text-[#b2b3b7]">
            {label}
          </p>
          <p className="text-[22px] sm:text-[26px] md:text-[16px] lg:text-[28px] font-manrope text-white mt-2">
            {value}
          </p>
        </div>
      ))}
    </div>

    {/* SOCIAL DIVIDER */}
    <div className="absolute top-[650px]   sm:top-[550px] lg:top-[620px] w-full border-t border-[#262833]" />

{/* SOCIAL LINKS */}
<div className="absolute z-20 left-1/2 -translate-x-1/2  top-[650px] sm:top-[550px] lg:top-[620px] w-full flex text-white">

{socials.map((item, i) => (
  <Link
    key={item.label}
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex-1 h-[60px] flex items-center justify-between px-6 sm:px-4
    ${i !== socials.length - 1 ? "border-r border-[#262833]" : ""}
    hover:bg-white/5 transition-colors`}
  >
    <div className="flex items-center gap-3">
      <item.icon />
      <span className="uppercase font-poppins text-[14px] sm:text-[10px] md:text-[10px] lg:text-[18px]">
        {item.label}
      </span>
    </div>
    <ArrowIcon className="pointer-events-none" />
  </Link>
))}


</div>




{/* BOTTOM BAR */}
<div className="absolute text-white sm:top-[610px] top-[710px] lg:top-[680px] w-full border-t border-[#262833]">
  <div className="flex h-[70px]">

    {/* LEFT */}
    <div className="flex-1 md:flex-1 flex items-center justify-center border-r border-[#262833] hover:bg-white/5 transition-colors cursor-pointer">
      <p className="text-[14px] sm:text-[12px]  md:text-[10px] lg:text-[14px] xl:text-[16px] font-poppins">
        Privacy Policy | Terms & Conditions
      </p>
    </div>

    {/* CENTER */}
    <div className="flex-1 flex md:flex-[2] items-center justify-center border-r border-[#262833] hover:bg-white/5 transition-colors">
      <p className="text-[14px] sm:text-[12px]  md:text-[10px] lg:text-[14px] xl:text-[16px] font-poppins text-center">
       Copyright © 2025 beelockchain, All rights reserved.
      </p>
    </div>

    {/* RIGHT */}
    <div className="flex-1 md:flex-1 flex items-center justify-center hover:bg-white/5 transition-colors">
      <div className="flex items-center gap-3">
        <PhoneIcon />
        <p className="text-[14px] sm:text-[12px]  md:text-[10px] lg:text-[14px] xl:text-[16px] font-poppins">
          +(1) 1230 452 8597
        </p>
      </div>
    </div>

  </div>
</div>


    {/* HEIGHT SPACER — THIS IS THE FIX */}
    <div className="absolute bottom-0 h-[200px] w-full" />

  </div>



{/* ================= MOBILE FOOTER ================= */}
<div className="sm:hidden relative w-full bg-[#00020f] px-6 py-16 text-white overflow-hidden">
{/* BACKGROUND TEXT – MOBILE ONLY */}
<div className="absolute inset-0 flex justify-center items-start pointer-events-none md:hidden">
  <Image
    src="/assets/images/mobile-footer-textbg.png"
    alt="Beelock background"
    width={600}
    height={300}
    priority
    className="
      mt-6
      w-[90%]
      max-w-none
      object-contain
    "
  />
</div>


  {/* EMAIL PILL */}
  <div className="relative z-10 flex justify-center mt-14">
    <div className="flex items-center gap-3 px-6 py-1  font-manrope rounded-full bg-[#1BFFE1] text-black text-sm font-medium">
     <MailIcon className="w-10 h-10" />
      contact@beelockchain.com
    </div>
  </div>

  {/* DESCRIPTION */}
  <div className="relative z-10 mt-6 text-start text-[12px] leading-relaxed">
    <p className="text-[#1BFFE1]  font-poppins font-medium">
      Beelockchain – World’s First AI-Centric Blockchain Development Company
    </p>
    <p className="text-white/70  font-poppins mt-2">
      Future-ready blockchain development, smart contract solutions, Web3 ecosystems, and AI-powered automation all under one roof.
    </p>
  </div>

  {/* NAV GRID */}
  <div className="relative z-10 mt-10 grid grid-cols-2 gap-y-8 gap-x-6 text-center">
    {[
      { label: "What we do?", value: "Services" },
      { label: "Who we are?", value: "About Us" },
      { label: "How we deliver", value: "Pitch Deck" },
      { label: "What we're good at?", value: "Our Project" },
    ].map((item, i) => (
      <div key={i}>
        <p className="text-[12px]  font-poppins text-white/40 uppercase mb-1 text-nowrap">{item.label}</p>
        <p className="text-lg  font-poppins">{item.value}</p>
      </div>
    ))}
    {/* <div className="col-span-2">
      <p className="text-[12px] text-white/50 uppercase mb-1">News?</p>
      <p className="text-lg">News</p>
    </div> */}
  </div>

{/* SOCIAL ICONS – MOBILE */}
<div className="relative z-10 mt-10 grid grid-cols-2 gap-y-6 gap-x-4 md:hidden">
  {socials.map((item, index) => {
    const isLast = index === socials.length - 1;
    const isOdd = socials.length % 2 !== 0;

    return (
      <Link
        key={item.label}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2 text-[12px] uppercase font-poppins hover:opacity-80 transition text-center
          ${isLast && isOdd ? "col-span-2 justify-center" : ""}
        `}
      >
        <item.icon />
        <span>{item.label}</span>
      </Link>
    );
  })}
</div>





  {/* CONTACT INFO */}
  <div className="relative z-10 mt-8 flex flex-col items-center  font-poppins gap-4 text-sm text-white/80">
    <div className="flex items-center gap-3">
      <PhoneIcon />
      <span>+(1)1230 452 8597</span>
    </div>
    <div className="flex items-center gap-3">
      {/* <LocationIcon /> */}
      <span className="text-transparent bg-clip-text 
        bg-[linear-gradient(90deg,#00A993_0%,#57ADCD_15%,#FFFFFF_20%)] ">Privacy Policy | Terms & Conditions</span>
    </div>
  
  </div>

  {/* COPYRIGHT */}
  <div className="relative z-10 mt-8 text-center  font-poppins text-[11px] text-white text-nowrap">
    Copyright © 2025 beelockchain, All rights reserved.
  </div>

</div>


    </footer>
  );
};
export default Footer;

