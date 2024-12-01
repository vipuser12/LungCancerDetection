import { Link } from 'react-router-dom';

export default function Header() {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/examine', label: 'Examine' },
    { path: '/results', label: 'Results' },
    { path: '/explanation', label: 'Explanation' },
    { path: '/information', label: 'Information' }
  ];
  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? 'absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-100 transition-transform'
      : 'absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100';
  };

  return (
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
      <Link
        to="/login"
        className="gap-2.5 self-stretch px-2.5 py-2.5 my-auto text-white rounded-xl bg-neutral-900 min-h-[47px]"
      >
        Log in
      </Link>
    </header>
  );
}
