import React, { useState } from 'react';
import { Bell, Flame, Menu, X, Sparkles, Volume2, Calendar, BookOpen, Camera, HelpCircle, Scroll, RotateCcw } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isFlowerRainActive: boolean;
  setIsFlowerRainActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
  isFlowerRainActive,
  setIsFlowerRainActive
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOmPlaying, setIsOmPlaying] = useState(false);
  const [bellRung, setBellRung] = useState(false);

  const handleRingBell = () => {
    soundManager.playTempleBell();
    setBellRung(true);
    setTimeout(() => setBellRung(false), 800);
  };

  const handleShankh = () => {
    soundManager.playShankhSound();
  };

  const handleToggleOm = () => {
    const playing = soundManager.toggleOmAmbient();
    setIsOmPlaying(playing);
  };

  const navLinks = [
    { id: 'hero', label: 'मुख्य पृष्ठ', icon: Flame },
    { id: 'chalisa', label: 'स्तोत्र व चालीसा', icon: BookOpen },
    { id: 'life-and-granth', label: 'जीवन व ग्रंथ', icon: Scroll },
    { id: 'mantra-sadhana', label: 'मंत्र व साधना', icon: RotateCcw },
    { id: 'live-darshan', label: 'लाइव दर्शन', icon: Sparkles },
    { id: 'gallery', label: 'एकादश रुद्र स्वरूप', icon: Camera },
    { id: 'festivals', label: 'त्यौहार व व्रत', icon: Calendar },
    { id: 'qa', label: 'भक्त प्रश्नोत्तर', icon: HelpCircle }
  ];

  return (
    <header className="sticky top-0 z-50 bg-amber-950/90 backdrop-blur-md border-b border-amber-600/40 text-amber-50 shadow-lg transition-all duration-300">
      {/* Top Divine Ticker */}
      <div className="bg-gradient-to-r from-amber-900 via-orange-700 to-amber-900 text-amber-100 text-xs py-1 px-4 text-center font-devanagari-body tracking-wider flex items-center justify-between border-b border-amber-500/20">
        <span className="hidden sm:inline">🚩 जय श्री राम | जय हनुमान जी महाराज 🚩</span>
        <span className="mx-auto sm:mx-0 flex items-center gap-2">
          <span>दैनिक संकल्प: "संकट कटै मिटै सब पीरा, जो सुमिरै हनुमत बलबीरा"</span>
        </span>
        <span className="hidden md:inline text-amber-300">आज का पावन दिन: मंगलवार / शनिवार विशेष दर्शन</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveSection('hero')}
          >
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 via-orange-500 to-yellow-400 p-0.5 shadow-aura flex items-center justify-center group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-amber-950 flex items-center justify-center text-amber-400 text-2xl font-bold font-devanagari-heading shadow-inner">
                🚩
              </div>
              <div className="absolute -inset-1 rounded-full bg-orange-500/20 blur-sm group-hover:bg-orange-500/40 transition-all"></div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black font-devanagari-heading text-gold-gradient tracking-wide">
                श्री हनुमान धाम
              </h1>
              <p className="text-xs text-amber-200/80 font-devanagari-body">सात्विक एवं आधुनिक दिव्य पोर्टल</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveSection(link.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs lg:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md font-bold'
                      : 'text-amber-100/90 hover:text-amber-300 hover:bg-amber-900/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-amber-400'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Temple Sound Effects & Action Controls */}
          <div className="flex items-center gap-2">
            
            {/* Temple Bell Sound Button */}
            <button
              onClick={handleRingBell}
              title="मंदिर की घंटी बजाएं"
              className={`relative p-2.5 rounded-full bg-amber-900/60 border border-amber-500/40 text-amber-300 hover:text-amber-100 hover:bg-amber-800 transition-all ${
                bellRung ? 'animate-bell-ring bg-amber-600 text-white' : ''
              }`}
            >
              <Bell className="w-5 h-5" />
              <span className="sr-only">घंटी</span>
            </button>

            {/* Shankh Sound Button */}
            <button
              onClick={handleShankh}
              title="दिव्य शंख ध्वनि बजाएं"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-700 to-orange-600 text-amber-100 hover:from-amber-600 hover:to-orange-500 text-xs font-semibold shadow-md transition-all active:scale-95 border border-amber-400/30"
            >
              <span>🐚 शंख ध्वनि</span>
            </button>

            {/* Ambient Om Sound Toggle */}
            <button
              onClick={handleToggleOm}
              title="ॐ की सुखद पृष्ठभूमि धुन"
              className={`p-2.5 rounded-full border transition-all ${
                isOmPlaying
                  ? 'bg-amber-500 text-amber-950 border-amber-300 shadow-gold-glow animate-pulse'
                  : 'bg-amber-900/60 border-amber-500/40 text-amber-400 hover:bg-amber-800'
              }`}
            >
              <Volume2 className="w-5 h-5" />
            </button>

            {/* Marigold Flower Rain Toggle */}
            <button
              onClick={() => setIsFlowerRainActive(!isFlowerRainActive)}
              title="गेंदा पुष्प वर्षा"
              className={`p-2.5 rounded-full border transition-all ${
                isFlowerRainActive
                  ? 'bg-orange-500 text-white border-orange-300 shadow-aura'
                  : 'bg-amber-900/60 border-amber-500/40 text-amber-400 hover:bg-amber-800'
              }`}
            >
              <span>🌸</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-amber-200 hover:bg-amber-900/60"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-amber-950/95 border-t border-amber-600/40 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-amber-800/60">
            <button
              onClick={handleRingBell}
              className="flex items-center justify-center gap-2 p-2 rounded-xl bg-amber-900/80 border border-amber-600/40 text-amber-200 text-xs"
            >
              <Bell className="w-4 h-4 text-amber-400" />
              <span>घंटी बजाएं</span>
            </button>
            <button
              onClick={handleShankh}
              className="flex items-center justify-center gap-2 p-2 rounded-xl bg-amber-900/80 border border-amber-600/40 text-amber-200 text-xs"
            >
              <span>🐚 शंख ध्वनि</span>
            </button>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveSection(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold shadow-md'
                      : 'text-amber-100 hover:bg-amber-900/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-amber-400'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
