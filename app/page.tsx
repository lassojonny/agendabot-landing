import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { WaitlistSection } from './components/WaitlistSection';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <WaitlistSection />
      <Pricing />
      <Footer />
    </main>
  );
}
