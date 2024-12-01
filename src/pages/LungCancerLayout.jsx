import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import Header from '../components/Header'; // Import your header component
import HeroSection from '../components/info/HeroSection';
import InformationSection from '../components/info/InformationSection';

function LungCancerLayout() {
  const location = useLocation(); // Get the current location (URL)

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center pt-3 bg-zinc-100">
      <div className="flex flex-col w-full max-w-[1272px] px-4 max-md:max-w-full">
        {/* Integrating Header component here */}
        <header className="flex flex-wrap gap-5 justify-between items-center w-full text-2xl font-bold max-w-[1353px] max-md:max-w-full">
          <Link
            to="/"
            className="flex items-center self-stretch text-black uppercase"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/84dfb7fca5d24fe09ada46f181faaa46/ec6ded1ec2dbc6425f7f35b4088afb5336b35fe4b123081da6bfd9919a34dca6?apiKey=84dfb7fca5d24fe09ada46f181faaa46&amp;"
              alt="LCD Logo"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[82px]"
            />
            <span className="self-stretch my-auto">L C D</span>
          </Link>

          <nav className="flex flex-wrap gap-6 justify-center items-center self-stretch p-2.5 my-auto text-lg font-medium whitespace-nowrap text-neutral-900 max-md:max-w-full mx-auto">
            <Link
              to="/"
              className={`flex flex-col justify-center items-center self-stretch px-2.5 py-1 my-auto relative group ${location.pathname === '/' ? 'border-b-2 border-blue-600' : ''
                }`}
            >
              <span>Home</span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100 ${location.pathname === '/' ? 'scale-x-100' : ''
                  }`}
              />
            </Link>

            <Link
              to="/examine"
              className={`flex flex-col justify-center items-center self-stretch px-2.5 py-1 my-auto relative group ${location.pathname === '/examine' ? 'border-b-2 border-blue-600' : ''
                }`}
            >
              <span>Examine</span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100 ${location.pathname === '/examine' ? 'scale-x-100' : ''
                  }`}
              />
            </Link>

            <Link
              to="/results"
              className={`flex flex-col justify-center items-center self-stretch px-2.5 py-1 my-auto relative group ${location.pathname === '/results' ? 'border-b-2 border-blue-600' : ''
                }`}
            >
              <span>Results</span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100 ${location.pathname === '/results' ? 'scale-x-100' : ''
                  }`}
              />
            </Link>

            <Link
              to="/explanation"
              className={`flex flex-col justify-center items-center self-stretch px-2.5 py-1 my-auto relative group ${location.pathname === '/explanation' ? 'border-b-2 border-blue-600' : ''
                }`}
            >
              <span>Explanation</span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100 ${location.pathname === '/explanation' ? 'scale-x-100' : ''
                  }`}
              />
            </Link>

            <Link
              to="/information"
              className={`flex flex-col justify-center items-center self-stretch px-2.5 py-1 my-auto relative group ${location.pathname === '/information' ? 'border-b-2 border-blue-600' : ''
                }`}
            >
              <span>Information</span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100 ${location.pathname === '/information' ? 'scale-x-100' : ''
                  }`}
              />
            </Link>
          </nav>
        </header>

        {/* Integrating Hero Section */}
        <HeroSection />
      </div>

      {/* Integrating Information Section */}
      <InformationSection />
    </div>
  );
}

export default LungCancerLayout;
