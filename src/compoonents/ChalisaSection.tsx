import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, 
  Search, Share2, Copy, Check, ZoomIn, ZoomOut, 
  Sparkles, BookOpen, Flame, Scroll, Heart, Award, X
} from 'lucide-react';
import { SCRIPTURES } from '../data/hanumanData';
import type { ScriptureItem, Chaupai } from '../data/hanumanData';
import { soundManager } from '../utils/soundEffects';

export const ChalisaSection: React.FC = () => {
  const [activeScriptureId, setActiveScriptureId] = useState<string>('chalisa');
  const [activeVerseIndex, setActiveVerseIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const [isSoundMuted, setIsSoundMuted] = useState<boolean>(false);

  const verseRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const currentScripture: ScriptureItem = SCRIPTURES[activeScriptureId] || SCRIPTURES['chalisa'];

  // Handle switching scriptures
  const handleSelectScripture = (id: string) => {
    soundManager.playTempleBell();
    setActiveScriptureId(id);
    setActiveVerseIndex(0);
    setIsPlaying(false);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  // Text-to-Speech audio reader using Web Speech Synthesis API
  useEffect(() => {
    if (!isPlaying) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      return;
    }

    const currentVerse = currentScripture.verses[activeVerseIndex];
    if (!currentVerse) return;

    // Scroll active verse smoothly into view
    if (verseRefs.current[activeVerseIndex]) {
      verseRefs.current[activeVerseIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }

    if (!isSoundMuted) {
      soundManager.playTempleBell();
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      // Clean Hindi text for pronunciation
      const cleanText = currentVerse.hindiText.replace(/[।॥\n]/g, ' ');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'hi-IN';
      utterance.rate = playbackSpeed * 0.85; // Sattvik slow devotional pace
      utterance.pitch = 0.95;

      // Find Hindi voice if available
      const voices = window.speechSynthesis.getVoices();
      const hindiVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('HI'));
      if (hindiVoice) {
        utterance.voice = hindiVoice;
      }

      utterance.onend = () => {
        if (isPlaying) {
          if (activeVerseIndex < currentScripture.verses.length - 1) {
            setActiveVerseIndex(prev => prev + 1);
          } else {
            setIsPlaying(false);
          }
        }
      };

      utterance.onerror = () => {
        // Fallback timer if speech synth fails or on unsupported browsers
        const timer = setTimeout(() => {
          if (isPlaying) {
            if (activeVerseIndex < currentScripture.verses.length - 1) {
              setActiveVerseIndex(prev => prev + 1);
            } else {
              setIsPlaying(false);
            }
          }
        }, 8000 / playbackSpeed);
        return () => clearTimeout(timer);
      };

      window.speechSynthesis.speak(utterance);
    }
  }, [isPlaying, activeVerseIndex, activeScriptureId, playbackSpeed, isSoundMuted]);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (!isPlaying) {
      soundManager.playTempleBell();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextVerse = () => {
    if (activeVerseIndex < currentScripture.verses.length - 1) {
      setActiveVerseIndex(prev => prev + 1);
    }
  };

  const handlePrevVerse = () => {
    if (activeVerseIndex > 0) {
      setActiveVerseIndex(prev => prev - 1);
    }
  };

  const handleCopyVerse = (verse: Chaupai) => {
    const textToCopy = `${verse.numberStr}\n${verse.hindiText}\n\nभावार्थ:\n${verse.meaning}\n\n- श्री हनुमान धाम (${currentScripture.title})`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(verse.id);
    soundManager.playTempleBell();
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShareWhatsApp = (verse: Chaupai) => {
    const text = `🚩 *${currentScripture.title} - ${verse.numberStr}* 🚩\n\n${verse.hindiText}\n\n*सरल भावार्थ:*\n${verse.meaning}\n\nजय श्री राम | जय हनुमान 🚩\nhttps://hanumandham.in`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const filteredVerses = currentScripture.verses.filter(v => 
    v.hindiText.includes(searchQuery) ||
    v.meaning.includes(searchQuery) ||
    v.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.numberStr.includes(searchQuery)
  );

  // Dynamic font sizing classes
  const fontClasses = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-2xl',
    lg: 'text-xl sm:text-3xl',
    xl: 'text-2xl sm:text-4xl'
  }[fontSize];

  return (
    <section id="chalisa" className="py-12 md:py-20 bg-amber-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200/80 border border-amber-400 text-amber-900 text-xs sm:text-sm font-bold shadow-xs">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>चित्र एवं ऑडियो श्लोक पाठ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-devanagari-heading text-amber-950">
            पावन स्तोत्र, चालीसा, बाण एवं आरती
          </h2>
          <p className="text-sm sm:text-base text-amber-900/80 font-devanagari-body">
            हर एक श्लोक, छंद और चौपाई के साथ उससे जुड़ी प्रासंगिक तस्वीर, रोमन उच्चारण, सरल हिंदी भावार्थ और स्पष्ट ऑडियो उच्चारण।
          </p>
        </div>

        {/* Tab Navigation for All 5 Scriptures */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
          
          <button
            onClick={() => handleSelectScripture('chalisa')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl whitespace-nowrap text-xs sm:text-sm font-bold font-devanagari-body transition-all border ${
              activeScriptureId === 'chalisa'
                ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                : 'bg-white border-amber-200 text-amber-950 hover:bg-amber-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>श्री हनुमान चालीसा (४३)</span>
          </button>

          <button
            onClick={() => handleSelectScripture('bajrang_baan')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl whitespace-nowrap text-xs sm:text-sm font-bold font-devanagari-body transition-all border ${
              activeScriptureId === 'bajrang_baan'
                ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                : 'bg-white border-amber-200 text-amber-950 hover:bg-amber-100'
            }`}
          >
            <Flame className="w-4 h-4 text-orange-600" />
            <span>श्री बजरंग बाण (१७)</span>
          </button>

          <button
            onClick={() => handleSelectScripture('sankat_mochan')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl whitespace-nowrap text-xs sm:text-sm font-bold font-devanagari-body transition-all border ${
              activeScriptureId === 'sankat_mochan'
                ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                : 'bg-white border-amber-200 text-amber-950 hover:bg-amber-100'
            }`}
          >
            <Award className="w-4 h-4 text-amber-700" />
            <span>संकटमोचन हनुमानाष्टक (९)</span>
          </button>

          <button
            onClick={() => handleSelectScripture('hanuman_bahuk')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl whitespace-nowrap text-xs sm:text-sm font-bold font-devanagari-body transition-all border ${
              activeScriptureId === 'hanuman_bahuk'
                ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                : 'bg-white border-amber-200 text-amber-950 hover:bg-amber-100'
            }`}
          >
            <Scroll className="w-4 h-4 text-orange-700" />
            <span>श्री हनुमान बाहुक (६)</span>
          </button>

          <button
            onClick={() => handleSelectScripture('aarti')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl whitespace-nowrap text-xs sm:text-sm font-bold font-devanagari-body transition-all border ${
              activeScriptureId === 'aarti'
                ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                : 'bg-white border-amber-200 text-amber-950 hover:bg-amber-100'
            }`}
          >
            <Heart className="w-4 h-4 text-rose-600" />
            <span>श्री हनुमान आरती (१३)</span>
          </button>

        </div>

        {/* Current Scripture Description Banner */}
        <div className="bg-gradient-to-r from-amber-950 via-orange-950 to-amber-950 text-white rounded-3xl p-5 sm:p-6 mb-8 border-2 border-amber-400/60 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-bold font-devanagari-body">
                {currentScripture.subtitle}
              </span>
              <span className="text-xs text-amber-300 font-devanagari-body">
                कुल {currentScripture.verses.length} श्लोक/छंद
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-devanagari-heading text-gold-gradient">
              {currentScripture.title}
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/90 font-devanagari-body max-w-2xl">
              {currentScripture.description}
            </p>
          </div>

          {/* Quick Play/Stop Large Button */}
          <button
            onClick={handlePlayPause}
            className="px-6 py-3 rounded-2xl bg-saffron-gradient text-white font-bold font-devanagari-body text-sm shadow-aura hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shrink-0"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
            <span>{isPlaying ? 'ऑडियो रोकें (Pause)' : 'संपूर्ण पाठ सुनें (Play)'}</span>
          </button>
        </div>

        {/* Floating / Sticky Interactive Audio Player Bar */}
        <div className="sticky top-20 z-40 bg-amber-950/95 backdrop-blur-md rounded-3xl p-4 sm:p-5 border-2 border-amber-400 shadow-2xl text-white mb-8 transition-all">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Now Playing Info */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-amber-900 shrink-0 border border-amber-400/40">
                <img
                  src={currentScripture.verses[activeVerseIndex]?.imageUrl || '/images/hero_hanuman.jpg'}
                  alt="वर्तमान श्लोक"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs text-amber-300 font-devanagari-body font-semibold block">
                  अब पढ़ रहे हैं: {currentScripture.verses[activeVerseIndex]?.numberStr}
                </span>
                <p className="text-sm sm:text-base font-bold font-devanagari-heading text-white truncate max-w-xs sm:max-w-md">
                  {currentScripture.verses[activeVerseIndex]?.hindiText.split('\n')[0]}
                </p>
              </div>
            </div>

            {/* Audio Controls */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={handlePrevVerse}
                disabled={activeVerseIndex === 0}
                className="p-2.5 rounded-full bg-amber-900/60 hover:bg-amber-800 text-amber-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                title="पिछला श्लोक"
              >
                <SkipBack className="w-5 h-5" />
              </button>

              <button
                onClick={handlePlayPause}
                className="p-4 rounded-full bg-saffron-gradient text-white shadow-aura hover:scale-105 active:scale-95 transition-all"
                title={isPlaying ? 'रोकें' : 'चलाएं'}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 fill-white" />}
              </button>

              <button
                onClick={handleNextVerse}
                disabled={activeVerseIndex === currentScripture.verses.length - 1}
                className="p-2.5 rounded-full bg-amber-900/60 hover:bg-amber-800 text-amber-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                title="अगला श्लोक"
              >
                <SkipForward className="w-5 h-5" />
              </button>

              {/* Speed Switcher */}
              <div className="flex items-center bg-amber-900/70 rounded-xl p-1 border border-amber-600/40 text-xs font-devanagari-body">
                {[0.75, 1, 1.25, 1.5].map((speed) => (
                  <button
                    key={speed}
                    onClick={() => setPlaybackSpeed(speed)}
                    className={`px-2 py-1 rounded-lg transition-all ${
                      playbackSpeed === speed ? 'bg-orange-600 text-white font-bold' : 'text-amber-300 hover:text-white'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>

              {/* Mute Bell Sound */}
              <button
                onClick={() => setIsSoundMuted(!isSoundMuted)}
                className="p-2 rounded-xl bg-amber-900/60 text-amber-200 hover:bg-amber-800"
                title={isSoundMuted ? 'ध्वनि चालू करें' : 'ध्वनि बंद करें'}
              >
                {isSoundMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              </button>
            </div>

            {/* Utility Toolbar: Search & Font Resize */}
            <div className="flex items-center gap-2 w-full lg:w-auto justify-end">
              
              {/* Search in text */}
              <div className="relative flex-1 sm:w-48">
                <Search className="w-3.5 h-3.5 text-amber-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="खोजें (Search)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-amber-900/70 border border-amber-600/40 text-white placeholder-amber-400/50 text-xs font-devanagari-body focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>

              {/* Font Size Selector */}
              <div className="flex items-center gap-1 bg-amber-900/70 rounded-xl p-1 border border-amber-600/40 text-xs">
                <button
                  onClick={() => setFontSize('sm')}
                  className={`p-1.5 rounded-lg ${fontSize === 'sm' ? 'bg-orange-600 text-white font-bold' : 'text-amber-300'}`}
                  title="छोटा फ़ॉन्ट"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setFontSize('md')}
                  className={`px-2 py-1 rounded-lg ${fontSize === 'md' ? 'bg-orange-600 text-white font-bold' : 'text-amber-300'}`}
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('lg')}
                  className={`px-2 py-1 rounded-lg ${fontSize === 'lg' ? 'bg-orange-600 text-white font-bold' : 'text-amber-300'}`}
                >
                  A+
                </button>
                <button
                  onClick={() => setFontSize('xl')}
                  className={`p-1.5 rounded-lg ${fontSize === 'xl' ? 'bg-orange-600 text-white font-bold' : 'text-amber-300'}`}
                  title="अति विशाल फ़ॉन्ट"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Verses Cards List */}
        <div className="space-y-6">
          {filteredVerses.map((verse) => {
            const isActive = activeVerseIndex === verse.id;

            return (
              <div
                key={verse.id}
                ref={(el) => { verseRefs.current[verse.id] = el; }}
                className={`rounded-3xl border-2 transition-all duration-300 overflow-hidden bg-white ${
                  isActive
                    ? 'border-orange-500 shadow-2xl ring-4 ring-orange-400/30 scale-[1.01]'
                    : 'border-amber-200 shadow-md hover:border-amber-300'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  
                  {/* Left Column: Shloka Artwork with Zoom Modal Trigger (Md: 4 / Lg: 3) */}
                  <div className="md:col-span-4 lg:col-span-3 relative h-48 md:h-auto bg-amber-950 overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedImage({ src: verse.imageUrl, title: verse.numberStr })}
                  >
                    <img
                      src={verse.imageUrl}
                      alt={verse.numberStr}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Verse Number Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-orange-600/90 text-white text-xs font-bold font-devanagari-heading shadow-md">
                      {verse.numberStr}
                    </div>

                    {/* Zoom Icon overlay */}
                    <div className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 text-white backdrop-blur-sm group-hover:bg-orange-600 transition-colors">
                      <ZoomIn className="w-4 h-4" />
                    </div>

                    {/* Active Playing Pulse */}
                    {isActive && isPlaying && (
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold animate-pulse">
                        <span>🔊 पाठ चालू</span>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Devanagari Shloka, Transliteration & Hindi Meaning (Md: 8 / Lg: 9) */}
                  <div className="md:col-span-8 lg:col-span-9 p-5 sm:p-7 flex flex-col justify-between space-y-4">
                    
                    <div className="space-y-3">
                      
                      {/* Top Action Bar */}
                      <div className="flex items-center justify-between border-b border-amber-100 pb-2">
                        <span className="text-xs font-bold text-orange-600 font-devanagari-body uppercase tracking-wider">
                          {verse.type === 'doha' ? 'पावन दोहा' : verse.type === 'chhand' ? 'संकटमोचन छंद' : verse.type === 'pada' ? 'बाहुक पद' : 'चौपाई'}
                        </span>

                        <div className="flex items-center gap-1.5">
                          {/* Play this verse */}
                          <button
                            onClick={() => {
                              setActiveVerseIndex(verse.id);
                              setIsPlaying(true);
                            }}
                            className={`px-3 py-1 rounded-xl text-xs font-bold font-devanagari-body transition-all flex items-center gap-1 ${
                              isActive && isPlaying
                                ? 'bg-emerald-600 text-white shadow-sm'
                                : 'bg-amber-100 hover:bg-amber-200 text-amber-900'
                            }`}
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>{isActive && isPlaying ? 'चल रहा है' : 'उच्चारण सुनें'}</span>
                          </button>

                          {/* Copy Shloka */}
                          <button
                            onClick={() => handleCopyVerse(verse)}
                            className="p-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 transition-all"
                            title="श्लोक कॉपी करें"
                          >
                            {copiedId === verse.id ? (
                              <Check className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>

                          {/* Share WhatsApp */}
                          <button
                            onClick={() => handleShareWhatsApp(verse)}
                            className="p-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 transition-all"
                            title="व्हाट्सएप पर शेयर करें"
                          >
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Devanagari Shloka Text */}
                      <div className="font-devanagari-heading font-black text-amber-950 leading-relaxed whitespace-pre-line tracking-wide">
                        <p className={fontClasses}>
                          {verse.hindiText}
                        </p>
                      </div>

                      {/* Roman Transliteration */}
                      <div className="text-xs sm:text-sm font-sans italic text-slate-500 whitespace-pre-line leading-relaxed">
                        {verse.transliteration}
                      </div>

                    </div>

                    {/* Hindi Bhavarth Box */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-1">
                      <span className="text-xs font-bold text-orange-700 block font-devanagari-body">
                        सरल हिंदी भावार्थ:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 font-devanagari-body leading-relaxed">
                        {verse.meaning}
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Image Zoom Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full bg-amber-950 p-2 rounded-3xl border-2 border-amber-400 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 text-white hover:bg-orange-600 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              />
            </div>
            <div className="p-4 text-center text-white">
              <p className="text-sm font-bold font-devanagari-heading text-gold-gradient">
                {selectedImage.title} — भगवान श्री हनुमान जी दिव्य लीला छवि
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
