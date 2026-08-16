import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ChalisaSection } from './components/ChalisaSection';
import { LifeAndGranthSection } from './components/LifeAndGranthSection';
import { MantraSadhanaSection } from './components/MantraSadhanaSection';
import { LiveDarshanSection } from './components/LiveDarshanSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { FestivalsSection } from './components/FestivalsSection';
import { QASection } from './components/QASection';
import { DailySuvicharSection } from './components/DailySuvicharSection';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isFlowerRainActive, setIsFlowerRainActive] = useState<boolean>(false);

  // Smooth scroll to section when activeSection changes
  useEffect(() => {
    if (activeSection !== 'hero') {
      const elem = document.getElementById(activeSection);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen flex flex-col bg-amber-50 selection:bg-amber-500 selection:text-white relative">
      
      {/* Falling Marigold Flower Petals Particle Overlay */}
      {isFlowerRainActive && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl select-none"
              style={{
                left: `${Math.random() * 100}%`,
                animation: `marigold-fall ${4 + Math.random() * 6}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {i % 3 === 0 ? '🌸' : i % 2 === 0 ? '🌼' : '🌺'}
            </div>
          ))}
        </div>
      )}

      {/* Navigation Header */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isFlowerRainActive={isFlowerRainActive}
        setIsFlowerRainActive={setIsFlowerRainActive}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection setActiveSection={setActiveSection} />
        
        <ChalisaSection />

        <LifeAndGranthSection />

        <MantraSadhanaSection />
        
        <LiveDarshanSection />
        
        <PhotoGallerySection />
        
        <FestivalsSection />
        
        <QASection />
        
        <DailySuvicharSection />
      </main>

      {/* Footer */}
      <Footer setActiveSection={setActiveSection} />

    </div>
  );
}

export default App;
