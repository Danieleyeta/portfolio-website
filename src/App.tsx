import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Desktop from './components/os/Desktop';
import { WindowManagerProvider } from './context/WindowManagerContext';

function App() {
  const [desktopMode, setDesktopMode] = useState(false);

  if (desktopMode) {
    return (
      <WindowManagerProvider>
        <Desktop onExitDesktop={() => setDesktopMode(false)} />
      </WindowManagerProvider>
    );
  }

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <ParticleBackground />
      <Navbar onEnterDesktop={() => setDesktopMode(true)} />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
