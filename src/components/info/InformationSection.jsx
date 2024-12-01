import React from 'react';

function InformationSection() {
  return (
    <section className="flex overflow-hidden z-10 flex-col justify-center items-start px-20 py-24 mt-0 w-full text-3xl font-medium bg-black h-[1043px] text-zinc-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col pb-52 max-w-full h-[830px] w-[1440px]">
        <h2 className="self-start h-0 uppercase w-[234.8px]">Reasons</h2>
        <div className="z-10 mt-14 max-md:mt-0 max-md:max-w-full">
          <ul>
            <li>
              Smoking: It is the main cause, as cigarette smoke contains many
              carcinogenic chemicals.
            </li>
            <li>
              Exposure to chemicals: such as asbestos and harmful gases in the
              workplace.
            </li>
            <li>
              Environmental pollution: Exposure to polluted air can increase
              the risk of infection.
            </li>
          </ul>
        </div>
        <h2 className="self-start mt-5 uppercase">Symptoms</h2>
        <div className="z-10 mt-0 w-[948px] max-md:mt-0 max-md:max-w-full">
          <br />
          Chest pain: This may be the result of inflammation or the spread of
          cancer to surrounding tissues.
          <br />
          Unexplained weight loss: It may be a sign that something is wrong
          with the body.
          <br />
          Bloody sputum: This is one of the distinctive signs that requires
          immediate evaluation.
        </div>
        <h2 className="self-start mt-8 uppercase">Tests</h2>
        <div className="mt-5 max-md:max-w-full">
          X-rays and CT scans: help detect tumors or abnormal areas in the
          lung.
          <br />
          Sputum tests: to determine the presence of cancer cells.
          <br />
          Biopsy: Taking a sample of tissue for laboratory analysis.
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
