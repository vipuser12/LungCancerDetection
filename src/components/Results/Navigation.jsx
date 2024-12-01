import NavItem from './NavItem';

export default function Navigation() {
  const navItems = [
    { text: 'Home', to: '/' },
    { text: 'Examine', to: '/examine' },
    { text: 'Results', to: '/results' },
    { text: 'Explanation', to: '/explanation' },
    { text: 'Information', to: '/information' }
  ];

  return (
    <nav className="flex flex-wrap gap-6 justify-center items-center p-2.5 my-auto text-lg font-medium whitespace-nowrap text-neutral-900 max-md:max-w-full">
      {navItems.map((item) => (
        <NavItem key={item.text} {...item} />
      ))}
    </nav>
  );
}
