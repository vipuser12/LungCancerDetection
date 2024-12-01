import { Link } from 'react-router-dom';

export default function Header() {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/examine', label: 'Examine' },
    { path: '/results', label: 'Results' },
    { path: '/explanation', label: 'Explanation' },
    { path: '/information', label: 'Information' }
  ];

  return (
    <header className="flex flex-wrap gap-5 justify-between items-center w-full text-2xl font-bold max-w-[1353px] max-md:max-w-full">
      <Link to="/" className="flex items-center self-stretch text-black uppercase">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/84dfb7fca5d24fe09ada46f181faaa46/ec6ded1ec2dbc6425f7f35b4088afb5336b35fe4b123081da6bfd9919a34dca6?apiKey=84dfb7fca5d24fe09ada46f181faaa46&"
          alt="LCD Logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[82px]"
        />
        <span className="self-stretch my-auto">L C D</span>
      </Link>
      
      <nav className="flex flex-wrap gap-6 justify-center items-center self-stretch p-2.5 my-auto text-lg font-medium whitespace-nowrap text-neutral-900 max-md:max-w-full">
        {navLinks.map((link, index) => (
          <Link 
            key={index} 
            to={link.path}
            className="flex flex-col justify-center items-center self-stretch px-2.5 py-1 my-auto"
          >
            {link.label}
            {link.label === 'Home' && (
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/84dfb7fca5d24fe09ada46f181faaa46/a2ee299be8c272e2335a994126a8cc73820224e9f7e1fb1af625341c3c32c584?apiKey=84dfb7fca5d24fe09ada46f181faaa46&"
                alt=""
                className="object-contain aspect-[11.63] w-[53px]"
              />
            )}
          </Link>
        ))}
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
