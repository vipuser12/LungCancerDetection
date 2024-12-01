import { Link, useLocation } from 'react-router-dom';

export function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`self-stretch px-2.5 py-1 my-auto relative group ${isActive ? 'text-blue-600' : 'text-neutral-900'
        }`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100 ${isActive ? 'scale-x-100' : ''
        }`} />
    </Link>
  );
}
