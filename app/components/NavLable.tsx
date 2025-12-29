type NavLabelProps = {
  label: string;
  className?: string;
  iconSrc?: string; // optional icon
};

const NavLabel = ({
  label,
  className = "",
  iconSrc = "/assets/images/lable-icon.svg", // default icon
}: NavLabelProps) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div
        className="
          relative inline-flex items-center gap-1 rounded-xl
          bg-linear-to-r from-[#0B0F1C] via-[#111827] to-[#0B0F1C]
          shadow-[0_0_40px_rgba(0,255,255,0.15)]
        "
      >
        {/* Glow overlay */}
        <span
          className="
            absolute inset-0 rounded-xl
            bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.15),transparent_40%)]
            pointer-events-none
          "
        />

        {/* LEFT ICON */}
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full">
          <img src={iconSrc} alt="" className="w-5 h-5" />
        </div>

        {/* LABEL BODY */}
        <div
          className="
            relative flex items-center w-[150px]
            pl-2 pr-[11px] py-2 rounded-lg
            border border-[#0B2A44]
            overflow-hidden
          "
        >
          <h2 className="text-white whitespace-nowrap font-manrope">
            {label}
          </h2>

          {/* RIGHT FADE */}
          <div
            className="
              absolute right-0 top-0 h-full w-[160px]
              rounded-tr-lg rounded-br-lg
              bg-gradient-to-l from-white/[0.12] to-transparent
              pointer-events-none
            "
          />
        </div>
      </div>
    </div>
  );
};

export default NavLabel;
