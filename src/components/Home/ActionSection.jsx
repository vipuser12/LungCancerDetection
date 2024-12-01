import { useNavigate } from 'react-router-dom';

export default function ActionSection() {
  const navigate = useNavigate();

  return (
    <section className="flex overflow-hidden flex-col justify-center items-center self-stretch px-16 py-14 w-full bg-black max-md:px-5 max-md:max-w-full">
      <div className="w-full max-w-[1087px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <article className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
              <h2 className="text-3xl font-medium text-white">
                Lung Cancer Detection
              </h2>
              <p className="self-stretch mt-3.5 text-xl leading-7 text-white max-md:max-w-full">
                "Lung cancer is one of the most dangerous and common types of
                cancer, and through early detection, the chances of recovery
                can be greatly increased. Our website provides comprehensive
                information about the symptoms of the disease, different
                screening methods, and available treatments to support you in
                making informed health decisions."
              </p>
              <div className="flex gap-8 items-center mt-10 max-w-full text-2xl font-bold w-[444px]">
                <button
                  onClick={() => navigate('/examine')}
                  className="overflow-hidden self-stretch px-2 py-4 my-auto bg-blue-800 rounded-3xl min-h-[60px] text-zinc-50 w-[209px]"
                >
                  Start scan
                </button>
                <button
                  onClick={() => navigate('/results')}
                  className="overflow-hidden self-stretch px-2 py-4 my-auto rounded-3xl border-solid border-[3px] border-zinc-100 min-h-[60px] text-zinc-100 w-[209px]"
                >
                  Check record
                </button>
              </div>
            </div>
          </article>
          <aside className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/84dfb7fca5d24fe09ada46f181faaa46/8ec70ea4870c3c92ee4e398158fcb197baecba47941c4741484203493b6e265a?apiKey=84dfb7fca5d24fe09ada46f181faaa46&"
              alt="Lung cancer detection illustration"
              className="object-contain w-full aspect-[1.12] max-md:mt-10"
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
