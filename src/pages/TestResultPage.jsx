import { useNavigate } from 'react-router-dom';


export default function TestResultPage() {
  const navigate = useNavigate();
  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? 'absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-100 transition-transform'
      : 'absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100';
  };

  return (
    <main className="flex overflow-hidden flex-col pt-3 pr-20 pb-14 pl-9 bg-zinc-100 max-md:px-5">
      
      <header className="flex flex-wrap gap-5 justify-between items-center w-full text-2xl font-bold max-w-[1353px] max-md:max-w-full">
        <a className="flex items-center self-stretch text-black uppercase" href="/" data-discover="true">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/84dfb7fca5d24fe09ada46f181faaa46/ec6ded1ec2dbc6425f7f35b4088afb5336b35fe4b123081da6bfd9919a34dca6?apiKey=84dfb7fca5d24fe09ada46f181faaa46&amp;"
            alt="LCD Logo"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[82px]"
          />
          <span className="self-stretch my-auto">L C D</span>
        </a>

        <nav className="flex flex-wrap gap-6 justify-center items-center self-stretch p-2.5 my-auto text-lg font-medium whitespace-nowrap text-neutral-900 max-md:max-w-full mx-auto">
          <a className="flex flex-col justify-center items-center self-stretch px-2.5 py-1 my-auto relative group" href="/" data-discover="true">
            <span>Home</span>
            <span className={getNavLinkClass('/')}></span>
          </a>
          <a className="flex flex-col justify-center items-center self-stretch px-2.5 py-1 my-auto relative group" href="/examine" data-discover="true">
            <span>Examine</span>
            <span className={getNavLinkClass('/examine')}></span>
          </a>
          <a className="flex flex-col justify-center items-center self-stretch px-2.5 py-1 my-auto relative group" href="/results" data-discover="true">
            <span>Results</span>
            <span className={getNavLinkClass('/results')}></span>
          </a>
          <a className="flex flex-col justify-center items-center self-stretch px-2.5 py-1 my-auto relative group" href="/explanation" data-discover="true">
            <span>Explanation</span>
            <span className={getNavLinkClass('/explanation')}></span>
          </a>
          <a className="flex flex-col justify-center items-center self-stretch px-2.5 py-1 my-auto relative group" href="/information" data-discover="true">
            <span>Information</span>
            <span className={getNavLinkClass('/information')}></span>
          </a>
        </nav>
      </header>



      <section className="flex flex-col items-start self-center pt-9 pb-14 pl-12 mt-16 w-full rounded-xl bg-neutral-200 max-w-[1050px] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between max-w-full font-bold w-[952px]">
          <h1 className="text-4xl text-neutral-900">Test result</h1>
          <p className="my-auto text-3xl text-green-600">Positive</p>
        </div>

        <div className="mr-0 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <article className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <p className="text-2xl font-medium leading-9 text-neutral-900 max-md:mt-10 max-md:max-w-full">
                The examination indicated a positive result and the optics were
                free of cancer and any types of cancer that affect the lung.The
                examination indicated a positive result and the optics were free
                of cancer and any types of cancer that affect the lung.The
                examination indicated a positive result and the optics were free
                of cancer and any types of cancer that affect the lung.The The
                result of a CT scan of the chest shows that the lungs are
                healthy and free of any signs of cancer. There are no suspicious
                masses or nodules in the lung, and the respiratory system is
                functioning normally. This result is a positive indicator of
                lung health and that there are no serious problems that require
                concern at the present time. It is recommended to continue
                regular follow-up and preventive examinations to ensure lung
                health is maintained.
              </p>
            </article>

            <aside className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full text-2xl font-bold text-zinc-50 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/bed82d85168942febc6a121d9050f8b8/37bc631976489896328c4394ea784efad40b0724fd866227d7187c6b286bd261?apiKey=bed82d85168942febc6a121d9050f8b8&"
                  className="object-contain w-full aspect-[1.18]"
                  alt="Detailed test result visualization"
                />
                <button
                  onClick={() => navigate('/explanation')}
                  className="overflow-hidden self-start px-2 py-4 mt-64 rounded-3xl bg-neutral-900 min-h-[60px] max-md:mt-10 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-700 focus:outline-none"
                  tabIndex="0"
                >
                  Full explanation
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
