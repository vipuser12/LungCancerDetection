import * as React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Negative() {
  const navigate = useNavigate();
  const [showExplanation, setShowExplanation] = React.useState(false);

  const navigationItems = [
    { text: "Home", width: "88px", path: "/" },
    { text: "Examine", width: "73px", path: "/examine" },
    { text: "Results", width: "64px", path: "/results" },
    { text: "Explanation", path: "/explanation" },
    { text: "Information", path: "/information" }
  ];

  const handleExplanationClick = () => {
    setShowExplanation(true);
  };

  return (
    <main className="flex overflow-hidden flex-col pt-3 pr-20 pb-16 pl-9 bg-zinc-100 max-md:px-5" role="main">
     <Header />
      <section
        className="self-center px-11 pt-9 pb-14 mt-16 max-w-full rounded-xl bg-neutral-200 w-[1050px] max-md:px-5 max-md:mt-10"
        aria-labelledby="test-results-heading"
      >
        <div className="flex gap-5 max-md:flex-col">
          <article className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-neutral-900 max-md:mt-10 max-md:max-w-full">
              <h1 id="test-results-heading" className="self-start text-4xl font-bold">Test result</h1>
              <p className="mt-40 text-4xl font-medium leading-[61px] max-md:mt-10 max-md:max-w-full">
                The test result is negative. Please refer to a specialist doctor.
              </p>
            </div>
          </article>

          <aside className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full" role="complementary">
            <div className="flex flex-col items-start w-full font-bold max-md:mt-10">
              <h2 className="self-end text-3xl text-neutral-950">Negative</h2>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/bed82d85168942febc6a121d9050f8b8/08bae413f7780f453f064df24fb188d0ffe3fac164481448f62b7ce416c9bca2?apiKey=bed82d85168942febc6a121d9050f8b8&"
                className="object-contain mt-5 max-w-full aspect-[1.06] w-[289px]"
                alt="Visual representation of negative test result"
              />
              {/* <button
                onClick={handleExplanationClick}
                className="overflow-hidden self-stretch px-2 py-4 mt-80 text-2xl rounded-3xl 
                         bg-neutral-900 min-h-[60px] text-zinc-50 max-md:mt-10 max-md:ml-1
                         hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-600
                         transition-colors duration-200"
                aria-expanded={showExplanation}
              >
                Full explanation
              </button> */}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
