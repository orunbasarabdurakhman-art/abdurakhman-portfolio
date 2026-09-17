import { Background } from './components/Background';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Hero } from './sections/Hero';
import { Journey } from './sections/Journey';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { WhyIT } from './sections/WhyIT';

export default function App() {
  return (
    <>
      <a href="#top" className="skip-link">
        Мазмұнға өту
      </a>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <WhyIT />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
