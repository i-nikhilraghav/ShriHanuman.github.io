import React, { useState } from 'react';
import { Play, Sparkles, MapPin, Bell, Flame, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TEMPLES } from '../data/hanumanData';
import type { Temple } from '../data/hanumanData';
import { soundManager } from '../utils/soundEffects';

export const LiveDarshanSection: React.FC = () => {
  const [selectedTemple, setSelectedTemple] = useState<Temple>(TEMPLES[0]);
  const [isDiyaLit, setIsDiyaLit] = useState(true);
  const [flowerCount, setFlowerCount] = useState(0);
  const [prasadOffered, setPrasadOffered] = useState(false);
  const [bellActive, setBellActive] = useState(false);

  const handleFlowerShower = () => {
    setFlowerCount((prev) => prev + 1);
    soundManager.playTempleBell();
    
    // Canvas confetti for flower shower
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.3 },
      colors: ['#FF9E00', '#FFD700', '#FF4500', '#FFA500', '#E65100']
    });
  };

  const handleRingBell = () => {
    soundManager.playTempleBell();
    setBellActive(true);
    setTimeout(() => setBellActive(false), 800);
  };

  const handleOfferPrasad = () => {
    soundManager.playTempleBell();
    setPrasadOffered(true);
    setTimeout(() => setPrasadOffered(false), 4000);
  };

  return (
    <section id="live-darshan" className="py-12 md:py-20 bg-divine-dark text-amber-50 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-amber-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold shadow-md">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>सिद्ध पीठों का सीधा प्रसारण</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-devanagari-heading text-gold-gradient">
            लाइव हनुमान मंदिर दर्शन व आभासी पूजा
          </h2>
          <p className="text-sm sm:text-base text-amber-200/80 font-devanagari-body">
            घर बैठे श्री सालासर बालाजी, महंदीपुर बालाजी और अयोध्या हनुमानगढ़ी के दिव्य दर्शन करें और वर्चुअल पूजा अर्पण करें।
          </p>
        </div>

        {/* Temple Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {TEMPLES.map((temple) => {
            const isSelected = selectedTemple.id === temple.id;
            return (
              <button
                key={temple.id}
                onClick={() => setSelectedTemple(temple)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl whitespace-nowrap text-sm font-bold font-devanagari-body transition-all border ${
                  isSelected
                    ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                    : 'bg-amber-950/70 border-amber-600/30 text-amber-200 hover:bg-amber-900/60'
                }`}
              >
                <MapPin className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-amber-400'}`} />
                <span>{temple.name}</span>
                {temple.isLive && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Video Player & Virtual Pooja Station */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main HD Live Stream Container (Lg: 8) */}
          <div className="lg:col-span-8 bg-amber-950/90 rounded-3xl p-3 sm:p-4 border-2 border-amber-500/40 shadow-2xl space-y-4">
            
            {/* Live Player Screen */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-amber-600/30 shadow-inner group">
              
              {/* Simulated HD Temple Stream Background Image & Overlay Video */}
              <img
                src={selectedTemple.imageUrl}
                alt={selectedTemple.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40"></div>

              {/* Live Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/90 text-white text-xs font-bold font-devanagari-body shadow-md backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span>सीधा प्रसारण (LIVE STREAM)</span>
              </div>

              {/* Temple Title Badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-200 text-xs font-bold font-devanagari-body backdrop-blur-md">
                📍 {selectedTemple.location}, {selectedTemple.state}
              </div>

              {/* Diya Flame Animated Effect on Video bottom */}
              {isDiyaLit && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6">
                  <div className="relative">
                    <div className="w-8 h-10 bg-gradient-to-t from-amber-600 via-orange-400 to-yellow-200 rounded-full blur-[2px] animate-flame"></div>
                    <div className="w-10 h-3 bg-amber-800 rounded-full mx-auto -mt-1 shadow-lg"></div>
                  </div>
                </div>
              )}

              {/* Toast Message for Prasad Offering */}
              {prasadOffered && (
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300">
                  <div className="text-center p-6 rounded-2xl bg-amber-950 border border-amber-400/60 max-w-sm text-amber-100 space-y-2">
                    <div className="text-4xl">🍌 🌺  लड्डू</div>
                    <h4 className="text-xl font-bold font-devanagari-heading text-gold-gradient">
                      प्रसाद अर्पण स्वीकार हुआ!
                    </h4>
                    <p className="text-xs text-amber-200 font-devanagari-body">
                      भगवान श्री हनुमान जी की असीम कृपा आपके और आपके परिवार पर सदा बनी रहे।
                    </p>
                  </div>
                </div>
              )}

              {/* Center Watermark Play Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-amber-500/30 border border-amber-300/50 flex items-center justify-center text-white mb-2 shadow-aura hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-devanagari-heading text-white">
                  {selectedTemple.name}
                </h3>
                <p className="text-xs text-amber-300 font-devanagari-body mt-1">
                  समय: {selectedTemple.timings}
                </p>
              </div>

            </div>

            {/* Live Stream Details */}
            <div className="p-2 sm:p-3 text-amber-200 font-devanagari-body text-sm space-y-1">
              <h4 className="font-bold text-base text-gold-gradient font-devanagari-heading">
                {selectedTemple.name} महिमा
              </h4>
              <p className="text-xs sm:text-sm text-amber-300/90 leading-relaxed">
                {selectedTemple.description}
              </p>
            </div>

          </div>

          {/* Right Column: Virtual Pooja Interactive Controls (Lg: 4) */}
          <div className="lg:col-span-4 bg-amber-950/90 rounded-3xl p-6 border-2 border-amber-500/40 shadow-2xl space-y-6">
            <div className="border-b border-amber-700/50 pb-4 text-center">
              <h3 className="text-xl font-bold font-devanagari-heading text-gold-gradient">
                वर्चुअल पूजा एवं सेवा
              </h3>
              <p className="text-xs text-amber-300/80 font-devanagari-body mt-1">
                डिजिटल माध्यम से घर पर ही प्रभु चरणों में अर्पण करें
              </p>
            </div>

            {/* Virtual Ritual Buttons Grid */}
            <div className="space-y-4">
              
              {/* Ring Bell */}
              <button
                onClick={handleRingBell}
                className={`w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-amber-900 to-amber-800 border border-amber-500/40 text-amber-100 font-bold font-devanagari-body text-sm shadow-md hover:from-amber-800 hover:to-amber-700 transition-all ${
                  bellActive ? 'animate-bell-ring bg-amber-600' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-700 text-amber-200">
                    <Bell className="w-5 h-5" />
                  </div>
                  <span>मंदिर घंटी बजाएं</span>
                </div>
                <span className="text-xs text-amber-400">🔔 टन-टन</span>
              </button>

              {/* Light Diya */}
              <button
                onClick={() => setIsDiyaLit(!isDiyaLit)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border text-sm font-bold font-devanagari-body shadow-md transition-all ${
                  isDiyaLit
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white border-amber-300'
                    : 'bg-amber-900/60 border-amber-500/40 text-amber-200 hover:bg-amber-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-orange-700 text-yellow-300">
                    <Flame className="w-5 h-5 animate-pulse" />
                  </div>
                  <span>{isDiyaLit ? 'दीपक प्रज्वलित है' : 'दीपक प्रज्वलित करें'}</span>
                </div>
                <span className="text-xs text-amber-300">🪔 आरती</span>
              </button>

              {/* Flower Shower */}
              <button
                onClick={handleFlowerShower}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-amber-900 to-amber-800 border border-amber-500/40 text-amber-100 font-bold font-devanagari-body text-sm shadow-md hover:from-amber-800 hover:to-amber-700 transition-all active:scale-98"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-700 text-amber-200">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span>गेंदा पुष्प वर्षा करें</span>
                </div>
                <span className="text-xs text-amber-300 font-bold">🌸 ({flowerCount})</span>
              </button>

              {/* Offer Prasad */}
              <button
                onClick={handleOfferPrasad}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-amber-900 to-amber-800 border border-amber-500/40 text-amber-100 font-bold font-devanagari-body text-sm shadow-md hover:from-amber-800 hover:to-amber-700 transition-all active:scale-98"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-700 text-amber-200">
                    <Heart className="w-5 h-5 text-red-400" />
                  </div>
                  <span>भोग/प्रसाद अर्पण करें</span>
                </div>
                <span className="text-xs text-amber-300">🍌 लड्डू</span>
              </button>

            </div>

            {/* Virtual Pooja Counter */}
            <div className="p-4 rounded-2xl bg-amber-950 border border-amber-600/40 text-center space-y-1">
              <span className="text-xs text-amber-400 font-devanagari-body">
                आज के वर्चुअल भक्त अर्पण
              </span>
              <p className="text-2xl font-bold font-devanagari-heading text-gold-gradient">
                १२,४५०+ पुष्प व आरती
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
