import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import WhyChooseMe from '@/components/WhyChooseMe';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorTrail from '@/components/CursorTrail';

const Index = () => {
  return (
    <div className="min-h-screen dark">
      <CursorTrail />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <WhyChooseMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;