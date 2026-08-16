import React, { useState } from 'react';
import { Flame, RefreshCw, Share2, Copy, Check, Quote } from 'lucide-react';
import { SUVICHARS } from '../data/hanumanData';
import type { Suvichar } from '../data/hanumanData';
import { soundManager } from '../utils/soundEffects';

export const DailySuvicharSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentSuvichar: Suvichar = SUVICHARS[currentIndex];

  const handleNextSuvichar = () => {
    soundManager.playTempleBell();
    setCurrentIndex((prev) => (prev + 1) % SUVICHARS.length);
  };

  const handleCopy = () => {
    const text = `श्री हनुमान जी दैनिक सुविचार 🚩\n\n"${currentSuvichar.shloka}"\n\nअर्थ: ${currentSuvichar.hindiMeaning}\n\n- ${currentSuvichar.author}\n\nश्री हनुमान धाम वेब पोर्टल`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`श्री हनुमान जी दैनिक सुविचार 🚩\n\n"${currentSuvichar.shloka}"\n\nअर्थ: ${currentSuvichar.hindiMeaning}\n\n- ${currentSuvichar.author}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section className="py-12 md:py-16 bg-amber-50/70 text-slate-900 border-t border-amber-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-amber-950 via-orange-950 to-amber-950 rounded-3xl p-6 sm:p-10 text-amber-50 border-2 border-amber-400 shadow-2xl relative overflow-hidden text-center space-y-6">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/80 border border-amber-500/40 text-amber-300 text-xs font-bold shadow-md">
            <Flame className="w-4 h-4 text-orange-400" />
            <span>हनुमान जी के दैनिक सुविचार व श्लोक</span>
          </div>

          <div className="relative max-w-2xl mx-auto space-y-4 pt-2">
            <Quote className="w-10 h-10 text-amber-500/30 mx-auto" />
            
            <h3 className="text-2xl sm:text-3xl font-black font-devanagari-heading text-gold-gradient leading-relaxed">
              "{currentSuvichar.shloka}"
            </h3>

            <p className="text-sm sm:text-base font-devanagari-body text-amber-200/90 leading-relaxed max-w-xl mx-auto">
              भावार्थ: {currentSuvichar.hindiMeaning}
            </p>

            <span className="inline-block text-xs text-amber-400 font-devanagari-body font-bold pt-2">
              — {currentSuvichar.author}
            </span>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-amber-800/60">
            
            <button
              onClick={handleNextSuvichar}
              className="px-4 py-2.5 rounded-xl bg-amber-900 border border-amber-600/40 text-amber-200 hover:bg-amber-800 font-bold font-devanagari-body text-xs flex items-center gap-1.5 transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>अन्य सुविचार देखें</span>
            </button>

            <button
              onClick={handleCopy}
              className="px-4 py-2.5 rounded-xl bg-amber-900 border border-amber-600/40 text-amber-200 hover:bg-amber-800 font-bold font-devanagari-body text-xs flex items-center gap-1.5 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'कॉपी हुआ' : 'सुविचार कॉपी करें'}</span>
            </button>

            <button
              onClick={handleShareWhatsApp}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold font-devanagari-body text-xs shadow-md flex items-center gap-1.5 transition-all"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>WhatsApp पर शेयर करें</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
