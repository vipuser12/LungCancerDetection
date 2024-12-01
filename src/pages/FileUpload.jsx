import { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function FileUpload({ onFileUpload }) {  // Accept the onFileUpload prop
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const formatFileSize = (bytes) => {
    if (!bytes) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };

  const handleFileSelect = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        console.log('File selected:', selectedFile.name); // Debug log
        setFile(selectedFile);
        onFileUpload(selectedFile);  // Pass file state to parent
        setIsUploading(true);

        const timer = setInterval(() => {
          setUploadProgress((prev) => {
            if (prev >= 100) {
              clearInterval(timer);
              console.log('Navigation triggered to /results'); // Debug log
              setTimeout(() => {
                navigate('/results'); // Redirect after progress completes
              }, 1000);
              return 100;
            }
            return prev + 1;
          });
        }, 50);

        // Cleanup timer when component unmounts
        return () => clearInterval(timer);
      }
    };

    input.click();
  }, [navigate, onFileUpload]);

  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? 'absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-100 transition-transform'
      : 'absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100';
  };

  return (
    <main className="flex overflow-hidden flex-col items-center pt-3 pr-20 pb-96 pl-9 bg-zinc-100 max-md:px-5 max-md:pb-24">
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

      <h1 className="mt-40 text-7xl font-bold uppercase text-neutral-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Add the scan file
      </h1>

      <section className="flex flex-col items-center pb-12 pl-1.5 mt-7 w-full rounded-xl bg-neutral-200 max-w-[1089px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1034px] max-md:max-w-full">
          <div className="flex gap-1 mt-4 text-neutral-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/bed82d85168942febc6a121d9050f8b8/e05e5bdf8e7815472db56362f10cb1c4e25de72ed892bf66655a0a5557152009?apiKey=bed82d85168942febc6a121d9050f8b8&"
              className="object-contain shrink-0 w-16 aspect-square"
              alt="File icon"
            />
            <div className="flex flex-col self-start mt-3">
              <h2 className="text-2xl font-semibold">
                {file ? file.name : 'Lung examination file'}
              </h2>
              <p className="text-xl">{file ? formatFileSize(file.size) : ''}</p>
            </div>
          </div>
          <div className="flex gap-7">
            <span className="object-contain shrink-0 aspect-[0.04] w-[3px] bg-gray-300" />
            <button
              onClick={handleFileSelect}
              className="object-contain shrink-0 self-start mt-3.5 w-16 aspect-square focus:outline-none focus:ring-2 focus:ring-blue-500 hover:opacity-80 transition-opacity"
              aria-label="Upload file"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/bed82d85168942febc6a121d9050f8b8/40686f67288280d05577aae7b014ba6e1c55fead1b40fa04da31c8a26cee51d9?apiKey=bed82d85168942febc6a121d9050f8b8&"
                className="w-full h-full"
                alt=""
              />
            </button>
          </div>
        </div>

        {isUploading && (
          <div className="w-full px-3.5 mt-11">
            <div className="flex flex-wrap gap-5 justify-between items-start max-w-full text-2xl font-semibold uppercase whitespace-nowrap">
              <span className="text-neutral-900">Loading</span>
              <span className="mt-5 text-blue-800">{uploadProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
                role="progressbar"
                aria-valuenow={uploadProgress}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
