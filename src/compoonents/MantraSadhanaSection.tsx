import React, { useState } from 'react';
import { RotateCcw, Volume2, VolumeX, Search, Copy, Check, Award, BookOpen, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { HANUMAN_108_NAMES, SADHANA_MANTRAS } from '../data/hanumanLifeData';
import type { HanumanName108 } from '../data/hanumanLifeData';
import { soundManager } from '../utils/soundEffects';

export const MantraSadhanaSection: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'counter' | 'names108' | 'sadhana'>('counter');
  
  // Interactive Japa Counter State
  const [japaCount, setJapaCount] = useState(0);
  const [completedMalas, setCompletedMalas] = useState(0);
  const [targetMalas, setTargetMalas] = useState(1);
  const [selectedMantra, setSelectedMantra] = useState('ॐ हं हनुमते नमः॥');
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [malaCompletedAlert, setMalaCompletedAlert] = useState(false);

  // 108 Names Search & Copy
  const [searchName, setSearchName] = useState('');
  const [copiedNameIndex, setCopiedNameIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  // Handle single bead chant tap
  const handleJapaTap = () => {
    if (isSoundEnabled) {
      soundManager.playTempleBell();
    }

    const nextCount = japaCount + 1;

    if (nextCount === 108) {
      // 1 Mala Completed
      setJapaCount(0);
      setCompletedMalas((prev) => {
        const newMala = prev + 1;
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#FF9E00', '#FFD700', '#FF4500']
        });
        setMalaCompletedAlert(true);
        setTimeout(() => setMalaCompletedAlert(false), 3500);
        return newMala;
      });
    } else {
      setJapaCount(nextCount);
    }
  };

  const handleResetCounter = () => {
    setJapaCount(0);
    setCompletedMalas(0);
  };

  const handleCopySingleName = (item: HanumanName108) => {
    navigator.clipboard.writeText(`${item.sanskritName} (${item.hindiName}) - अर्थ: ${item.meaning}`);
    setCopiedNameIndex(item.number);
    setTimeout(() => setCopiedNameIndex(null), 1500);
  };

  const handleCopyAll108 = () => {
    const text = HANUMAN_108_NAMES.map(n => `${n.number}. ${n.sanskritName} - ${n.meaning}`).join('\n');
    navigator.clipboard.writeText(`श्री हनुमद अष्टोत्तर शतनामावली (१०८ पावन नाम) 🚩\n\n${text}\n\n- श्री हनुमान धाम`);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const filteredNames = HANUMAN_108_NAMES.filter(
    (n) =>
      n.sanskritName.includes(searchName) ||
      n.hindiName.includes(searchName) ||
      n.meaning.includes(searchName)
  );

  // Progress percentage of current 108 mala
  const progressPercent = Math.round((japaCount / 108) * 100);

  return (
    <section id="mantra-sadhana" className="py-12 md:py-20 bg-divine-dark text-amber-50 relative overflow-hidden border-t border-amber-600/30">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold shadow-md">
            <Flame className="w-4 h-4 text-orange-400" />
            <span>सिद्धि, शक्ति एवं नाम महिमा</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-devanagari-heading text-gold-gradient">
            मंत्र, साधना एवं १०८ पावन नाम
          </h2>
          <p className="text-sm sm:text-base text-amber-200/80 font-devanagari-body">
            भक्तों के लिए इंटरैक्टिव डिजिटल जाप माला काउंटर, श्री हनुमद अष्टोत्तर शतनामावली एवं प्रामाणिक साधना विधि।
          </p>
        </div>

        {/* Sub-tab Navigation */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <button
            onClick={() => setActiveSubTab('counter')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl whitespace-nowrap text-sm font-bold font-devanagari-body transition-all border ${
              activeSubTab === 'counter'
                ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                : 'bg-amber-950/70 border-amber-600/30 text-amber-200 hover:bg-amber-900/60'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>डिजिटल जाप माला काउंटर</span>
          </button>

          <button
            onClick={() => setActiveSubTab('names108')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl whitespace-nowrap text-sm font-bold font-devanagari-body transition-all border ${
              activeSubTab === 'names108'
                ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                : 'bg-amber-950/70 border-amber-600/30 text-amber-200 hover:bg-amber-900/60'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>१०८ दिव्य नाम (नामावली)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('sadhana')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl whitespace-nowrap text-sm font-bold font-devanagari-body transition-all border ${
              activeSubTab === 'sadhana'
                ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                : 'bg-amber-950/70 border-amber-600/30 text-amber-200 hover:bg-amber-900/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>सिद्ध मंत्र व साधना नियम</span>
          </button>
        </div>

        {/* 1. DIGITAL JAPA MALA COUNTER */}
        {activeSubTab === 'counter' && (
          <div className="max-w-3xl mx-auto bg-amber-950/90 rounded-3xl p-6 sm:p-10 border-2 border-amber-400 shadow-2xl space-y-8 animate-in fade-in duration-300">
            
            {/* Mantra Selector */}
            <div className="space-y-2 text-center">
              <span className="text-xs font-bold text-amber-400 font-devanagari-body uppercase tracking-wider">
                जाप हेतु मंत्र चुनें:
              </span>
              <div className="flex flex-wrap justify-center gap-2 pt-1">
                {[
                  'ॐ हं हनुमते नमः॥',
                  'ॐ श्री हनुमते नमः॥',
                  'ॐ रामदूताय नमः॥',
                  'ॐ नमो हनुमते भय भञ्जनाय सुखं कुरु फट् स्वाहा॥'
                ].map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMantra(m)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-devanagari-body transition-all border ${
                      selectedMantra === m
                        ? 'bg-orange-600 text-white border-amber-300 shadow-md scale-105'
                        : 'bg-amber-900/60 border-amber-700/40 text-amber-200 hover:bg-amber-800'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Interactive Tap Bead Card */}
            <div className="flex flex-col items-center justify-center space-y-6">
              
              {/* Active Mantra Banner */}
              <div className="p-4 rounded-2xl bg-amber-900/70 border border-amber-500/40 text-center w-full shadow-inner">
                <p className="text-xl sm:text-2xl font-black font-devanagari-heading text-gold-gradient tracking-wide">
                  {selectedMantra}
                </p>
              </div>

              {/* Circular Japa Bead Click Area */}
              <div className="relative flex items-center justify-center">
                
                {/* Glowing Outer Ring */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border-4 border-dashed border-amber-500/40 flex items-center justify-center animate-spin-slow"></div>

                {/* Progress Ring overlay */}
                <div 
                  onClick={handleJapaTap}
                  className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-orange-700 via-amber-600 to-yellow-500 p-1.5 shadow-aura cursor-pointer hover:scale-105 active:scale-95 transition-transform flex items-center justify-center group select-none"
                  title="जाप गिनने के लिए यहाँ स्पर्श करें"
                >
                  <div className="w-full h-full rounded-full bg-amber-950 flex flex-col items-center justify-center text-center p-4 border border-amber-400/50 shadow-inner group-hover:bg-amber-900/90 transition-colors">
                    <span className="text-xs text-amber-400 font-devanagari-body font-semibold">
                      मनका (Bead Count)
                    </span>
                    <span className="text-5xl sm:text-6xl font-black font-devanagari-heading text-white my-1">
                      {japaCount}
                    </span>
                    <span className="text-xs text-amber-300 font-devanagari-body">
                      / १०८ मनके
                    </span>
                    <span className="mt-2 px-2.5 py-0.5 rounded-full bg-orange-600/80 text-white text-[11px] font-bold">
                      जाप करें (Tap)
                    </span>
                  </div>
                </div>

              </div>

              {/* Mala Completed Toast Alert */}
              {malaCompletedAlert && (
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-700 to-amber-700 text-white text-center font-devanagari-body text-xs sm:text-sm font-bold animate-bounce shadow-xl border border-emerald-300">
                  🎉 साधु! १ माला (१०८ जाप) पूर्ण हुई। भगवान श्री हनुमान जी की कृपा आप पर सदा रहे! 🚩
                </div>
              )}

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full">
                <div className="p-3.5 rounded-2xl bg-amber-900/60 border border-amber-600/40 text-center font-devanagari-body">
                  <span className="text-[11px] text-amber-400 block">पूर्ण माला</span>
                  <span className="text-xl sm:text-2xl font-bold text-gold-gradient font-devanagari-heading">
                    {completedMalas} माला
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-900/60 border border-amber-600/40 text-center font-devanagari-body">
                  <span className="text-[11px] text-amber-400 block">कुल मंत्र जाप</span>
                  <span className="text-xl sm:text-2xl font-bold text-white font-devanagari-heading">
                    {(completedMalas * 108) + japaCount}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-900/60 border border-amber-600/40 text-center font-devanagari-body">
                  <span className="text-[11px] text-amber-400 block">माला प्रगति</span>
                  <span className="text-xl sm:text-2xl font-bold text-amber-300 font-devanagari-heading">
                    {progressPercent}%
                  </span>
                </div>
              </div>

              {/* Toolbar Controls */}
              <div className="flex flex-wrap items-center justify-between w-full pt-4 border-t border-amber-800/60 gap-4">
                
                {/* Sound Toggle */}
                <button
                  onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-900/80 text-amber-200 text-xs font-devanagari-body hover:bg-amber-800"
                >
                  {isSoundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-rose-400" />}
                  <span>{isSoundEnabled ? 'घंटी ध्वनि चालू' : 'ध्वनि बंद'}</span>
                </button>

                {/* Target Mala Selector */}
                <div className="flex items-center gap-1.5 text-xs font-devanagari-body text-amber-300">
                  <span>लक्ष्य:</span>
                  {[1, 3, 11, 21].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTargetMalas(t)}
                      className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                        targetMalas === t ? 'bg-orange-600 text-white' : 'bg-amber-900 text-amber-300 hover:bg-amber-800'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                  <span>माला</span>
                </div>

                {/* Reset Button */}
                <button
                  onClick={handleResetCounter}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-900/80 text-amber-200 text-xs font-devanagari-body hover:bg-amber-800 hover:text-white"
                  title="काउंटर रीसेट करें"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>रीसेट</span>
                </button>

              </div>

            </div>

          </div>
        )}

        {/* 2. 108 HOLY NAMES (अष्टोत्तर शतनामावली) */}
        {activeSubTab === 'names108' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* Top Toolbar: Search & Copy All */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Search Box */}
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="नाम या अर्थ खोजें..."
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-amber-950/80 border border-amber-600/40 text-amber-100 placeholder-amber-400/50 text-sm font-devanagari-body focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Copy All 108 Names Button */}
              <button
                onClick={handleCopyAll108}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 to-orange-600 text-white font-bold font-devanagari-body text-xs shadow-md hover:from-amber-600 hover:to-orange-500 transition-all flex items-center justify-center gap-2"
              >
                {copiedAll ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copiedAll ? 'समस्त १०८ नाम कॉपी हुए!' : 'संपूर्ण १०८ नामावली कॉपी करें'}</span>
              </button>

            </div>

            {/* 108 Names Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[700px] overflow-y-auto pr-1">
              {filteredNames.map((item) => (
                <div
                  key={item.number}
                  className="p-4 rounded-2xl bg-amber-950/80 border border-amber-600/30 hover:border-amber-400 transition-all flex items-center justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-900 border border-amber-500/40 text-amber-300 font-bold flex items-center justify-center text-[10px]">
                        {item.number}
                      </span>
                      <h4 className="font-bold text-base font-devanagari-heading text-gold-gradient">
                        {item.sanskritName}
                      </h4>
                    </div>
                    <p className="text-xs text-amber-200/80 font-devanagari-body pl-8">
                      {item.meaning}
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopySingleName(item)}
                    className="p-2 rounded-lg bg-amber-900/60 hover:bg-amber-800 text-amber-300 shrink-0 transition-all"
                    title="नाम कॉपी करें"
                  >
                    {copiedNameIndex === item.number ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* 3. SIDDHA MANTRAS & SADHANA GUIDELINES */}
        {activeSubTab === 'sadhana' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-300">
            
            {/* Left Column: Mantras Catalog (Lg: 7) */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold font-devanagari-heading text-white mb-4">
                हनुमान जी के सिद्ध मंत्र एवं उनका प्रभाव
              </h3>

              {SADHANA_MANTRAS.map((m) => (
                <div
                  key={m.id}
                  className="p-6 rounded-3xl bg-amber-950/80 border-2 border-amber-600/40 space-y-3 shadow-xl"
                >
                  <div className="flex items-center justify-between border-b border-amber-800/60 pb-2">
                    <h4 className="text-lg font-bold font-devanagari-heading text-gold-gradient">
                      {m.name}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-orange-600 text-white text-[11px] font-bold font-devanagari-body">
                      {m.japCount}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-900/60 border border-amber-500/30 text-center">
                    <p className="text-base sm:text-lg font-bold font-devanagari-heading text-white tracking-wide">
                      {m.mantra}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-devanagari-body pt-1">
                    <div className="p-3 rounded-xl bg-amber-900/40 border border-amber-700/30">
                      <strong className="text-amber-400 block mb-0.5">उद्देश्य व फल:</strong>
                      <p className="text-amber-200/90">{m.purpose}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-amber-900/40 border border-amber-700/30">
                      <strong className="text-amber-400 block mb-0.5">जाप विधि:</strong>
                      <p className="text-amber-200/90">{m.vidhi}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: 5 Golden Rules of Sadhana (Lg: 5) */}
            <div className="lg:col-span-5 bg-amber-950/90 rounded-3xl p-6 sm:p-8 border-2 border-amber-500/40 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-devanagari-body">
                  शास्त्र सम्मत नियम
                </span>
                <h3 className="text-2xl font-bold font-devanagari-heading text-gold-gradient mt-1">
                  हनुमान साधना के ५ नियम
                </h3>
              </div>

              <div className="space-y-3.5 font-devanagari-body text-xs sm:text-sm">
                <div className="p-3.5 rounded-2xl bg-amber-900/60 border border-amber-700/40 space-y-1">
                  <strong className="text-amber-300 flex items-center gap-1.5">
                    <span>१. दिशा एवं आसन:</span>
                  </strong>
                  <p className="text-amber-100/90 leading-relaxed">
                    हनुमान जी की साधना के लिए पूर्व या उत्तर दिशा की ओर मुख करके बैठें। लाल या कुश के आसन का उपयोग सर्वश्रेष्ठ माना जाता है।
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-900/60 border border-amber-700/40 space-y-1">
                  <strong className="text-amber-300 flex items-center gap-1.5">
                    <span>२. माला का चयन:</span>
                  </strong>
                  <p className="text-amber-100/90 leading-relaxed">
                    मंत्र जप हेतु तुलसी की माला अथवा लाल चंदन या रुद्राक्ष की १०८ दानों वाली माला का प्रयोग करें।
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-900/60 border border-amber-700/40 space-y-1">
                  <strong className="text-amber-300 flex items-center gap-1.5">
                    <span>३. पवित्रता एवं ब्रह्मचर्य:</span>
                  </strong>
                  <p className="text-amber-100/90 leading-relaxed">
                    साधना काल में मन, वचन और कर्म से पूर्ण पवित्रता रखें और सात्विक आहार (लहसुन-प्याज रहित) का पालन करें।
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-900/60 border border-amber-700/40 space-y-1">
                  <strong className="text-amber-300 flex items-center gap-1.5">
                    <span>४. दीपक एवं भोग:</span>
                  </strong>
                  <p className="text-amber-100/90 leading-relaxed">
                    शुद्ध चमेली के तेल या गाय के घी का दीपक जलाएं और गुड़, चना या बूंदी के लड्डू का भोग लगाएं।
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-900/60 border border-amber-700/40 space-y-1">
                  <strong className="text-amber-300 flex items-center gap-1.5">
                    <span>५. श्रीराम नाम स्मरण:</span>
                  </strong>
                  <p className="text-amber-100/90 leading-relaxed">
                    हनुमान साधना आरंभ और समाप्त करते समय कम से कम ११ बार 'श्री राम जय राम जय जय राम' का स्मरण अवश्य करें।
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
