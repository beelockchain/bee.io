const Teams = () => {
  return (
    <section className="w-full h-full bg-[#00020F] flex flex-col items-center justify-center overflow-hidden" style={{
            backgroundImage: "url('/assets/images/Frame 1561446121 (1).svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>

      <h2 className="text-white font-bold text-4xl tracking-widest md:mb-10">
        TEAMS
      </h2>

      <div
        className="relative flex items-center justify-center rounded-2xl m-6"
        style={{
          width: "433px",
          height: "420px",
          backgroundImage: "url('/assets/images/Group 1707480401.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
   
      

        {/* Gradient Card */}
        <div
          className="
            relative z-20
            w-[420px]
            rounded-2xl
            px-8 py-8
            text-center
         
            
          "
        >
          <p className="text-white xl:text-xl lg:text-xl md:text-xl sm:text-xl text-[15px] xl:p-0 lg:p-0 md:p-0 sm:p-2 p-5 leading-relaxed font-medium mt-28">
            Our multidisciplinary team consists of blockchain engineers, AI
            researchers, smart contract auditors, Web3 developers, game designers,
            and enterprise consultants delivering world-class digital
            transformation solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Teams;
