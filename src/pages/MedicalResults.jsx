import React from 'react';
import Header from '../components/Header';
export function MedicalResults() {
  const results = [
    {
      title: "Result of CT scan analysis of the chest",
      description: "The result of a CT scan of the chest shows that the lungs are healthy and free of any signs of cancer. There are no suspicious masses or nodules in the lung, and the respiratory system is functioning normally. This result is a positive indicator of lung health and that there are no serious problems that require concern at the present time. It is recommended to continue regular follow-up and preventive examinations to ensure lung health is maintained.",
      status: "Positive"
    },
    {
      title: "X-ray analysis result",
      description: "The result of a chest X-ray indicates that the lungs are in healthy condition and there are no signs of cancer. The lung tissue and bronchi appear normal, and there are no abnormal masses or enlarged lymph nodes. This result confirms that there are no serious lung problems at the present time.",
      status: "Positive"
    },
    {
      title: "Pulmonary function test result (PFT)",
      description: "The results of the lung function analysis indicate that respiratory capabilities and lung functions are at a normal level. Airflow indicators, lung capacity, and oxygen-to-carbon dioxide ratio are all within normal ranges, indicating that the lungs are functioning well. This result reflects excellent lung health and the absence of any respiratory disorders.",
      status: "Positive"
    }
  ];

  return (
    <main className="flex overflow-hidden flex-col pt-3 pr-20 pb-14 pl-9 bg-zinc-100 max-md:px-5">
      <Header />
      <section
        aria-label="Medical Test Results"
        className="flex flex-col items-center self-center pt-9 pb-16 mt-16 w-full rounded-xl bg-neutral-200 max-w-[1050px] max-md:mt-10 max-md:max-w-full"
      >
        {results.map((result, index) => (
          <React.Fragment key={index}>
            <article className="flex flex-wrap gap-5 justify-between mt-2.5 max-w-full w-[955px]">
              <div className="flex flex-col text-neutral-900 max-md:max-w-full">
                <h2 className="self-start text-2xl font-bold max-md:max-w-full">
                  {result.title}
                </h2>
                <p className="mt-1 text-lg font-medium leading-7 max-md:max-w-full">
                  {result.description}
                </p>
              </div>
              <div
                className="self-start text-3xl font-bold text-green-600"
                role="status"
                aria-label={`Test result: ${result.status}`}
              >
                {result.status}
              </div>
            </article>
            {index < results.length - 1 && (
              <div role="separator" aria-hidden="true" className="shrink-0 self-stretch mt-5 h-px border border-solid border-neutral-900 max-md:max-w-full" />
            )}
          </React.Fragment>
        ))}
      </section>
    </main>
  );
}
