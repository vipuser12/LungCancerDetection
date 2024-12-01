import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/examine', label: 'Examine' },
  { path: '/results', label: 'Results' },
  { path: '/explanation', label: 'Explanation' },
  { path: '/information', label: 'Information' }
];

export function NavBar() {
  const location = useLocation();

  return (
    <nav
      className="flex flex-wrap gap-6 justify-center items-center p-2.5 text-lg font-medium text-neutral-900"
      aria-label="Main navigation"
    >
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`self-stretch my-auto px-3 py-2 rounded hover:bg-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:outline-none ${location.pathname === item.path ? 'font-bold bg-neutral-200' : ''
            }`}
          aria-current={location.pathname === item.path ? 'page' : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
