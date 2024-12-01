// components/PageLayout.jsx
import Header from './Header'; // Import the Header component

export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-100">
      <Header /> {/* This is the global header */}
      <main className="flex-1">{children}</main> {/* The content will be passed as children */}
    </div>
  );
}
