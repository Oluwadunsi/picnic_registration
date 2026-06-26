import hero from "../assets/hero.jpg";
import logo from "../assets/rccgLogo.png";

export default function Hero() {
  return (
    <section className="relative h-[520px] w-full overflow-hidden sm:sticky sm:top-0 sm:h-screen sm:w-[60%] sm:overflow-visible">      
    {/* Background image */}
      <img
        src={hero}
        alt="Casual Sunday Picnic"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Organic white edge mobile */}
      <div className="pointer-events-none absolute bottom-[-80px] left-0 z-30 block h-56 w-full sm:hidden">
        <svg
          viewBox="0 0 430 220"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="
              M0 140

              C60 180 120 20 190 110
              C250 190 320 10 380 100
              C410 140 430 60 430 60

              L430 270
              L0 250
              Z
            "
            fill="white"
          />
        </svg>
      </div>


{/* Organic white edge desktop */}
<div className="pointer-events-none absolute right-[-260px] top-0 z-30 hidden h-full w-[42rem] sm:block">
  <svg
    viewBox="0 0 810 900"
    preserveAspectRatio="none"
    className="h-full w-full"
  >
    <path
      d="
        M700 0
        L700 900
        L260 900

        C500 820 180 720 360 590
        C620 470 200 390 430 260
        C660 150 220 70 350 0

        Z
      "
      fill="white"
    />
  </svg>
</div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        {/* Logo */}
        <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white p-2 shadow-md">
          <img
            src={logo}
            alt="Church Logo"
            className="h-16 w-16 rounded-full object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase leading-tight tracking-wide">
          Casual Sunday
        </h1>

        <p className="-my-1 font-serif text-2xl italic leading-none">and</p>

        <h2 className="text-5xl sm:text-7xl font-extrabold uppercase tracking-[0.18em]">
          Picnic
        </h2>

        {/* Date */}
        <div className="my-6 h-px w-44 bg-white/60" />

        <p className="text-2xl sm_text-4xl font-extrabold uppercase tracking-wide">
          12th July
        </p>

        <div className="my-6 h-px w-44 bg-white/60" />

        {/* Event details */}
        <div className="space-y-4 text-[18px] sm:text-[20px] font-semibold uppercase">
          <div>
            <p>🌸 Service @11AM</p>
            <p className="font-normal text-center normal-case">Högabergsgatan 5</p>
          </div>

          <div>
            <p>🌸 Picnic Afterwards</p>
            <p className="font-normal normal-case">Marine Museum</p>
          </div>
        </div>

        {/* Bible verse */}
        <p className="mt-4 sm:mt-8 max-w-[260px] text-[10px] sm:text-[14px] italic leading-snug pb-2">
          “Jesus Christ the same yesterday, and today, and forever.”
          <br />
          <span className="font-semibold">Hebrews 13:8</span>
        </p>
      </div>
    </section>
  );
}