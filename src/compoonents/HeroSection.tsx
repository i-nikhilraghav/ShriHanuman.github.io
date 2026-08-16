import React from 'react';
import { Play, Sparkles, BookOpen, Flame, Scroll, RotateCcw } from 'lucide-react';
import { SUVICHARS } from '../data/hanumanData';
import { soundManager } from '../utils/soundEffects';

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setActiveSection }) => {
  const randomSuvichar = SUVICHARS[0];

  const handleQuickBell = () => {
    soundManager.playTempleBell();
  };

  return (
    <section className="relative overflow-hidden bg-divine-dark text-amber-50 py-12 md:py-20 lg:py-24 border-b border-amber-600/30">
      {/* Background Divine Halo Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Divine Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Sattvik Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900/70 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-md animate-pulse">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>सात्विक, आधुनिक एवं पावन हनुमान सेवा धाम</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-devanagari-heading text-white leading-tight tracking-wide">
              अतुलितबलधामं <br />
              <span className="text-gold-gradient drop-shadow-lg">
                हेमशैलदेहमं दनुजवनकृशानुम्
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-amber-100/90 font-devanagari-body leading-relaxed max-w-2xl mx-auto lg:mx-0">
              महावीर भगवान श्री हनुमान जी के पावन चालीसा, बजरंग बाण, और आरती के हर श्लोक को प्रासंगिक चित्रों व ऑडियो प्लेयर के साथ अनुभव करें। उनके जीवन प्रसंग, १०८ दिव्य नाम, और डिजिटल जाप काउंटर का लाभ उठाएं।
            </p>

            {/* Daily Shloka Spotlight Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/90 via-orange-950/80 to-amber-950/90 border border-amber-500/30 text-amber-200 shadow-xl max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-orange-400" /> आज का दिव्य सुविचार
                </span>
                <span className="text-xs text-amber-400/80 font-devanagari-body">{randomSuvichar.author}</span>
              </div>
              <p className="text-sm sm:text-base font-devanagari-body text-amber-100 font-semibold italic">
                "{randomSuvichar.shloka}"
              </p>
              <p className="text-xs sm:text-sm text-amber-300/80 font-devanagari-body mt-1">
                अर्थ: {randomSuvichar.hindiMeaning}
              </p>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => setActiveSection('chalisa')}
                className="px-6 py-3.5 rounded-2xl bg-saffron-gradient text-white font-bold font-devanagari-body text-base shadow-aura hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5 text-amber-200" />
                <span>चालीसा, बाण, अष्टक व बाहुक पाठ</span>
              </button>

              <button
                onClick={() => setActiveSection('mantra-sadhana')}
                className="px-6 py-3.5 rounded-2xl bg-amber-900/80 border border-amber-500/50 text-amber-200 hover:bg-amber-800 font-bold font-devanagari-body text-base hover:text-white transition-all flex items-center gap-2 shadow-lg"
              >
                <RotateCcw className="w-5 h-5 text-amber-400" />
                <span>डिजिटल जाप काउंटर</span>
              </button>

              <button
                onClick={() => setActiveSection('life-and-granth')}
                className="px-5 py-3.5 rounded-2xl bg-amber-950/80 border border-amber-500/50 text-amber-200 hover:bg-amber-900/60 font-bold font-devanagari-body text-base hover:text-white transition-all flex items-center gap-2 shadow-lg"
              >
                <Scroll className="w-5 h-5 text-amber-400" />
                <span>जीवन व ग्रंथ</span>
              </button>

              <button
                onClick={handleQuickBell}
                className="p-3.5 rounded-2xl bg-amber-900/50 border border-amber-500/30 text-amber-300 hover:bg-amber-800/80 hover:text-white transition-all"
                title="घंटी बजाकर नमन करें"
              >
                🔔
              </button>
            </div>

          </div>

          {/* Right Column: Hero Divine Artwork with Glowing Halo */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing Aura Ring behind artwork */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow-300 blur-2xl opacity-60 animate-aura"></div>
            
            <div className="relative w-full max-w-md rounded-3xl p-2 bg-gradient-to-b from-amber-500 via-orange-600 to-amber-700 shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl border-2 border-amber-300/40 bg-amber-950">
                <img
                  src="/images/hero_hanuman.jpg"
                  alt="भगवान श्री हनुमान जी दिव्य स्वरूप"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                
                {/* Overlay Divine Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950 via-transparent to-transparent opacity-80"></div>
                
                {/* Floating Mantra Banner */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-amber-950/85 border border-amber-500/40 backdrop-blur-md text-center">
                  <p className="text-xs text-amber-300 font-bold uppercase tracking-widest font-devanagari-body">
                    महावीर स्वामी संकट मोचन
                  </p>
                  <p className="text-sm font-devanagari-heading text-amber-100 font-bold">
                    "जय श्री राम | जय हनुमान"
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Highlights Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            onClick={() => setActiveSection('chalisa')}
            className="p-4 rounded-2xl bg-amber-900/40 border border-amber-600/30 backdrop-blur-md flex items-center gap-3 cursor-pointer hover:bg-amber-900/70 transition-all"
          >
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-600 to-amber-600 text-white shadow-md">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-amber-200 text-sm sm:text-base font-devanagari-heading">५ पावन स्तोत्र व पाठ</h4>
              <p className="text-xs text-amber-400/80 font-devanagari-body">ऑडियो व अर्थ सहित</p>
            </div>
          </div>

          <div 
            onClick={() => setActiveSection('mantra-sadhana')}
            className="p-4 rounded-2xl bg-amber-900/40 border border-amber-600/30 backdrop-blur-md flex items-center gap-3 cursor-pointer hover:bg-amber-900/70 transition-all"
          >
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-600 to-orange-500 text-white shadow-md">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-amber-200 text-sm sm:text-base font-devanagari-heading">१०८ नाम व जाप</h4>
              <p className="text-xs text-amber-400/80 font-devanagari-body">डिजिटल माला काउंटर</p>
            </div>
          </div>

          <div 
            onClick={() => setActiveSection('life-and-granth')}
            className="p-4 rounded-2xl bg-amber-900/40 border border-amber-600/30 backdrop-blur-md flex items-center gap-3 cursor-pointer hover:bg-amber-900/70 transition-all"
          >
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-700 text-white shadow-md">
              <Scroll className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-amber-200 text-sm sm:text-base font-devanagari-heading">जीवन व ग्रंथ</h4>
              <p className="text-xs text-amber-400/80 font-devanagari-body">प्रसंग व महाभारत उल्लेख</p>
            </div>
          </div>

          <div 
            onClick={() => setActiveSection('live-darshan')}
            className="p-4 rounded-2xl bg-amber-900/40 border border-amber-600/30 backdrop-blur-md flex items-center gap-3 cursor-pointer hover:bg-amber-900/70 transition-all"
          >
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md">
              <Play className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-amber-200 text-sm sm:text-base font-devanagari-heading">लाइव मंदिर दर्शन</h4>
              <p className="text-xs text-amber-400/80 font-devanagari-body">५+ सिद्ध पीठ</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
