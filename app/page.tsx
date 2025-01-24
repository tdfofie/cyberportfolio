import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import ParticlesComponent from '@/components/part'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ParticlesComponent id="particles"/>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </main>
  );
}