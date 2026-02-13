import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CoreStrengths } from './components/CoreStrengths';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { UIUXShowcase } from './components/UIUXShowcase';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingShapes } from './components/FloatingShapes';

export default function App() {
  return (
    <div className="min-h-screen relative">
      <FloatingShapes />
      <Header />
      <main>
        <Hero />
        <About />
        <CoreStrengths />
        <Services />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <UIUXShowcase />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}