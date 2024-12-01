import ActionSection from '../components/Home/ActionSection';
import Header from '../components/Header';
import HeroSection from '../components/Home/HeroSection';


export default function HomePage() {
  return (
    <main className="app-container flex overflow-hidden flex-col items-center pt-3 bg-zinc-100">
      <Header />
      <HeroSection />
      <ActionSection />
    </main>
  );
}
