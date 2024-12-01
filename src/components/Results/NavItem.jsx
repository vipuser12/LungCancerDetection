import { Link } from 'react-router-dom';

export default function NavItem({ text, to }) {
  return (
    <Link
      to={to}
      className="self-stretch px-2.5 py-1 my-auto hover:border-b-2 hover:border-neutral-900 focus:border-b-2 focus:border-neutral-900 focus:outline-none"
    >
      {text}
    </Link>
  );
}
