import React, { useState, useEffect } from 'react';
import { Calendar, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { FESTIVALS } from '../data/hanumanData';
import type { Festival } from '../data/hanumanData';

export const FestivalsSection: React.FC = () => {
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);

  // Countdown timer simulation for upcoming Hanuman Jayanti / Mangalvar Vrat
  const [timeLeft, setTimeLeft] = useState({ days: 14, hours: 8, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return { ...prev, seconds: 59, minutes: prev.minutes > 0 ? prev.minutes - 1 : 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="festivals" className="py-12 md:py-20 bg-amber-50/60 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200/80 border border-amber-400 text-amber-900 text-xs sm:text-sm font-bold">
            <Calendar className="w-4 h-4 text-orange-600" />
            <span>पावन तिथियाँ एवं शुभ मुहूर्त</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-devanagari-heading text-amber-950">
            विशेष त्यौहार, हनुमान जयंती व व्रत नियम
          </h2>
          <p className="text-sm sm:text-base text-amber-900/80 font-devanagari-body">
            हनुमान जयंती उत्सव, बुढ़वा मंगलवार एवं शनिवार व्रत की शास्त्रीय पूजन विधि एवं तिथि कैलेंडर।
          </p>
        </div>

        {/* Live Countdown Banner to Hanuman Jayanti / Vrat */}
        <div className="mb-12 max-w-4xl mx-auto bg-gradient-to-r from-amber-950 via-orange-950 to-amber-950 rounded-3xl p-6 sm:p-8 text-white border-2 border-amber-500/40 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-bold font-devanagari-body mb-2">
                <Clock className="w-3.5 h-3.5 animate-spin" /> आगामी पावन तिथि
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-devanagari-heading text-gold-gradient">
                श्री हनुमान जयंती महाउत्सव
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/80 font-devanagari-body mt-1">
                चैत्र पूर्णिमा तिथि | प्रातःकाल ब्राह्ममुहूर्त पूजन समय
              </p>
            </div>

            {/* Countdown Grid */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center justify-center w-16 h-18 sm:w-20 sm:h-22 rounded-2xl bg-amber-900/80 border border-amber-500/40 shadow-inner">
                <span className="text-xl sm:text-2xl font-bold font-devanagari-heading text-white">{timeLeft.days}</span>
                <span className="text-[10px] text-amber-300 font-devanagari-body">दिन</span>
              </div>
              <span className="text-xl font-bold text-amber-400">:</span>
              <div className="flex flex-col items-center justify-center w-16 h-18 sm:w-20 sm:h-22 rounded-2xl bg-amber-900/80 border border-amber-500/40 shadow-inner">
                <span className="text-xl sm:text-2xl font-bold font-devanagari-heading text-white">{timeLeft.hours}</span>
                <span className="text-[10px] text-amber-300 font-devanagari-body">घंटे</span>
              </div>
              <span className="text-xl font-bold text-amber-400">:</span>
              <div className="flex flex-col items-center justify-center w-16 h-18 sm:w-20 sm:h-22 rounded-2xl bg-amber-900/80 border border-amber-500/40 shadow-inner">
                <span className="text-xl sm:text-2xl font-bold font-devanagari-heading text-white">{timeLeft.minutes}</span>
                <span className="text-[10px] text-amber-300 font-devanagari-body">मिनट</span>
              </div>
              <span className="text-xl font-bold text-amber-400">:</span>
              <div className="flex flex-col items-center justify-center w-16 h-18 sm:w-20 sm:h-22 rounded-2xl bg-amber-900/80 border border-amber-500/40 shadow-inner">
                <span className="text-xl sm:text-2xl font-bold font-devanagari-heading text-amber-400">{timeLeft.seconds}</span>
                <span className="text-[10px] text-amber-300 font-devanagari-body">सेकंड</span>
              </div>
            </div>
          </div>

        </div>

        {/* Festival Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FESTIVALS.map((festival) => (
            <div
              key={festival.id}
              className="bg-white rounded-3xl p-6 border-2 border-amber-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold font-devanagari-body">
                    {festival.date}
                  </span>
                  <span className="text-xl">🚩</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-devanagari-heading text-amber-950">
                    {festival.hindiName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-devanagari-body mt-2 leading-relaxed">
                    {festival.description}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200">
                  <span className="text-xs font-bold text-orange-600 block font-devanagari-body mb-1">विशेष महत्व:</span>
                  <p className="text-xs text-slate-700 font-devanagari-body leading-relaxed">
                    {festival.significance}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedFestival(festival)}
                className="mt-6 w-full py-3 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold font-devanagari-body text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <span>संपूर्ण पूजा विधि देखें</span>
                <ChevronRight className="w-4 h-4 text-orange-600" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Puja Vidhi Modal */}
      {selectedFestival && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 max-w-xl w-full border-2 border-amber-400 shadow-2xl relative space-y-6 max-h-[85vh] overflow-y-auto">
            
            <div className="border-b border-amber-200 pb-4">
              <span className="text-xs font-bold text-orange-600 font-devanagari-body uppercase">
                {selectedFestival.date}
              </span>
              <h3 className="text-2xl font-bold font-devanagari-heading text-amber-950 mt-1">
                {selectedFestival.hindiName} पूजन विधि
              </h3>
            </div>

            <div className="space-y-3 font-devanagari-body">
              <h4 className="text-sm font-bold text-amber-950 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-orange-600" />
                चरणबद्ध पूजन प्रक्रिया:
              </h4>

              <div className="space-y-2">
                {selectedFestival.rituals.map((ritual, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm">
                    <span className="w-6 h-6 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                      {idx + 1}
                    </span>
                    <p className="text-slate-800 leading-relaxed pt-0.5">{ritual}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedFestival(null)}
              className="w-full py-3 rounded-xl bg-saffron-gradient text-white font-bold font-devanagari-body text-xs shadow-md"
            >
              बंद करें (Close)
            </button>

          </div>
        </div>
      )}

    </section>
  );
};
