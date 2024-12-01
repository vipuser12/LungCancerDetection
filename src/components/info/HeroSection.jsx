import React from 'react';

function HeroSection() {
  return (
    <>
      <h1 className="self-end mt-20 text-6xl font-bold uppercase text-neutral-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Information about lung cancer
      </h1>
      <div className="z-10 self-center mt-0 ml-12 text-2xl font-medium text-center uppercase text-neutral-900 max-md:max-w-full">
        <br />
        Lung cancer is one of the most common and dangerous types of cancer.
        Lung cancer develops in the tissues of the lungs, especially in the
        cells that line the bronchial tubes.
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/bed82d85168942febc6a121d9050f8b8/7bb46f315c8567cc864069445c78fe33d591a6a7f5340333be77a820febc48c0?apiKey=bed82d85168942febc6a121d9050f8b8&"
        className="object-contain self-center mt-10 ml-12 max-w-full aspect-square w-[649px]"
        alt="Lung cancer illustration"
      />
    </>
  );
}

export default HeroSection;
