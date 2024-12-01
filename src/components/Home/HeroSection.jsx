export default function HeroSection() {
  return (
    <section className="flex flex-col items-center mt-11">
      <h1 className="text-7xl font-bold uppercase text-neutral-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Lung Cancer Detection
      </h1>
      <div className="flex relative z-10 flex-col px-16 pt-0 pb-96 mt-7 ml-3.5 max-w-full text-2xl leading-none uppercase min-h-[479px] text-neutral-900 w-[719px] max-md:px-5 max-md:pb-28 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/84dfb7fca5d24fe09ada46f181faaa46/15ef7cb22fce48399b3cb68cd739cc723fc68d0371f57e2b2fa4fcdfe515949c?apiKey=84dfb7fca5d24fe09ada46f181faaa46&"
          alt="Lung cancer screening visualization"
          className="object-cover absolute inset-0 size-full"
        />
        <p>Early screening protects your life</p>
      </div>
    </section>
  );
}
