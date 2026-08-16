import React from 'react';
import { MapPin } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {

  const handleRingBell = () => {
    soundManager.playTempleBell();
  };

  return (
    <footer className="bg-amber-950 text-amber-100 border-t-2 border-amber-600/40 relative overflow-hidden font-devanagari-body">
      
      {/* Top Divine Mantra Strip */}
      <div className="bg-gradient-to-r from-orange-700 via-amber-600 to-orange-700 py-3 text-white text-center font-bold text-sm sm:text-base tracking-widest shadow-inner">
        🚩 ॐ नमो हनुमते भय भञ्जनाय सुखं कुरु फट् स्वाहा 🚩
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Mantra */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center text-xl shadow-aura">
                🚩
              </div>
              <h3 className="text-xl font-bold font-devanagari-heading text-gold-gradient">
                श्री हनुमान धाम
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed">
              भगवान श्री हनुमान जी को समर्पित सात्विक और आधुनिक वेब पोर्टल। हनुमान चालीसा, बजरंग बाण, आरती, जीवन प्रसंग, १०८ नाम, डिजिटल जाप काउंटर और लाइव दर्शन।
            </p>
            <button
              onClick={handleRingBell}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-900 border border-amber-600/40 text-amber-300 text-xs font-bold hover:bg-amber-800 transition-all"
            >
              <span>🔔 मंदिर घंटी बजाएं</span>
            </button>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-bold font-devanagari-heading text-gold-gradient">
              मुख्य अनुभाग (Navigation)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-amber-200/80">
              <li>
                <button onClick={() => setActiveSection('hero')} className="hover:text-amber-400 transition-colors">
                  • मुख्य पृष्ठ (Home)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveSection('chalisa')} className="hover:text-amber-400 transition-colors">
                  • पावन स्तोत्र, चालीसा व बाण
                </button>
              </li>
              <li>
                <button onClick={() => setActiveSection('life-and-granth')} className="hover:text-amber-400 transition-colors">
                  • हनुमान जीवन व प्रमुख ग्रंथ
                </button>
              </li>
              <li>
                <button onClick={() => setActiveSection('mantra-sadhana')} className="hover:text-amber-400 transition-colors">
                  • १०८ नाम व डिजिटल जाप काउंटर
                </button>
              </li>
              <li>
                <button onClick={() => setActiveSection('live-darshan')} className="hover:text-amber-400 transition-colors">
                  • लाइव मंदिर दर्शन
                </button>
              </li>
              <li>
                <button onClick={() => setActiveSection('gallery')} className="hover:text-amber-400 transition-colors">
                  • श्री हनुमान के एकादश रुद्र स्वरूप
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Sidh Peeth Temples */}
          <div className="space-y-3">
            <h4 className="text-base font-bold font-devanagari-heading text-gold-gradient">
              प्रसिद्ध सिद्ध पीठ (Temples)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-amber-200/80">
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>सालासर बालाजी, राजस्थान</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>महंदीपुर बालाजी, दौसा</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>हनुमान गढ़ी, अयोध्या जी</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>संकट मोचन मंदिर, वाराणसी</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Devotional Stats */}
          <div className="space-y-3 p-4 rounded-2xl bg-amber-900/40 border border-amber-600/30">
            <h4 className="text-sm font-bold font-devanagari-heading text-amber-300">
              भक्त सेवा आँकड़े
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-amber-800/40 pb-1">
                <span className="text-amber-200">चालीसा व बाण पाठ:</span>
                <span className="font-bold text-white">५०,०००+ प्रतिदिन</span>
              </div>
              <div className="flex justify-between border-b border-amber-800/40 pb-1">
                <span className="text-amber-200">डिजिटल मंत्र जाप:</span>
                <span className="font-bold text-white">१,०८,०००+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-200">लाइव दर्शनार्थी:</span>
                <span className="font-bold text-emerald-400">२४/७ चालू</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-amber-800/60 text-center text-xs text-amber-300/70 space-y-2">
          <p className="font-bold text-amber-200">
            "जय श्री राम | सर्व संकट हरण प्रभु हनुमान जी के श्री चरणों में कोटि-कोटि नमन"
          </p>
          <p>© 2026 श्री हनुमान धाम | सात्विक एवं आधुनिक आध्यात्मिक वेब पोर्टल</p>
        </div>

      </div>
    </footer>
  );
};
