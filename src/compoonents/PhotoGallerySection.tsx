import React, { useState } from 'react';
import { Sparkles, Copy, Check, X, Shield, Eye, Flame, Heart, Compass } from 'lucide-react';
import { HANUMAN_SWAROOPS } from '../data/hanumanData';
import type { HanumanSwaroop } from '../data/hanumanData';
import { soundManager } from '../utils/soundEffects';

export const PhotoGallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'rudra' | 'bhakti' | 'kalyan'>('all');
  const [selectedSwaroop, setSelectedSwaroop] = useState<HanumanSwaroop | null>(null);
  const [copiedMantraId, setCopiedMantraId] = useState<string | null>(null);

  const filteredSwaroops = activeCategory === 'all'
    ? HANUMAN_SWAROOPS
    : HANUMAN_SWAROOPS.filter(s => s.category === activeCategory);

  const handleCopyMantra = (swaroop: HanumanSwaroop) => {
    navigator.clipboard.writeText(`${swaroop.hindiName} ध्यान मंत्र: ${swaroop.mantra}`);
    setCopiedMantraId(swaroop.id);
    soundManager.playTempleBell();
    setTimeout(() => setCopiedMantraId(null), 1800);
  };

  const handleCategoryChange = (cat: 'all' | 'rudra' | 'bhakti' | 'kalyan') => {
    soundManager.playTempleBell();
    setActiveCategory(cat);
  };

  return (
    <section id="gallery" className="py-12 md:py-20 bg-amber-50/80 text-slate-900 border-t border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200/80 border border-amber-400 text-amber-900 text-xs sm:text-sm font-bold shadow-xs">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>एकादश रुद्रावतार अलौकिक विग्रह</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-devanagari-heading text-amber-950">
            श्री हनुमान के एकादश रुद्र स्वरूप
          </h2>
          <p className="text-sm sm:text-base text-amber-900/80 font-devanagari-body">
            भगवान शिव के ग्यारहवें रुद्रावतार श्री हनुमान जी के सभी ११ दिव्य स्वरूपों का विस्तृत वर्णन, प्राकट्य का पावन उद्देश्य एवं सिद्ध ध्यान मंत्र।
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`flex items-center gap-1.5 px-5 py-2.5 rounded-2xl whitespace-nowrap text-xs sm:text-sm font-bold font-devanagari-body transition-all border ${
              activeCategory === 'all'
                ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                : 'bg-white border-amber-200 text-amber-950 hover:bg-amber-100'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>सभी ११ स्वरूप ({HANUMAN_SWAROOPS.length})</span>
          </button>

          <button
            onClick={() => handleCategoryChange('rudra')}
            className={`flex items-center gap-1.5 px-5 py-2.5 rounded-2xl whitespace-nowrap text-xs sm:text-sm font-bold font-devanagari-body transition-all border ${
              activeCategory === 'rudra'
                ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                : 'bg-white border-amber-200 text-amber-950 hover:bg-amber-100'
            }`}
          >
            <Flame className="w-4 h-4 text-orange-600" />
            <span>रुद्र व पराक्रम रूप (५)</span>
          </button>

          <button
            onClick={() => handleCategoryChange('bhakti')}
            className={`flex items-center gap-1.5 px-5 py-2.5 rounded-2xl whitespace-nowrap text-xs sm:text-sm font-bold font-devanagari-body transition-all border ${
              activeCategory === 'bhakti'
                ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                : 'bg-white border-amber-200 text-amber-950 hover:bg-amber-100'
            }`}
          >
            <Heart className="w-4 h-4 text-rose-500" />
            <span>भक्ति व ज्ञान रूप (३)</span>
          </button>

          <button
            onClick={() => handleCategoryChange('kalyan')}
            className={`flex items-center gap-1.5 px-5 py-2.5 rounded-2xl whitespace-nowrap text-xs sm:text-sm font-bold font-devanagari-body transition-all border ${
              activeCategory === 'kalyan'
                ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                : 'bg-white border-amber-200 text-amber-950 hover:bg-amber-100'
            }`}
          >
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>कल्याण व वरद रूप (३)</span>
          </button>
        </div>

        {/* 11 Swaroops Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSwaroops.map((swaroop, idx) => (
            <div
              key={swaroop.id}
              className="bg-white rounded-3xl overflow-hidden border-2 border-amber-200 shadow-xl hover:border-amber-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top Image Box */}
              <div className="relative h-60 bg-amber-950 overflow-hidden cursor-pointer" onClick={() => setSelectedSwaroop(swaroop)}>
                <img
                  src={swaroop.imageUrl}
                  alt={swaroop.hindiName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-orange-600/90 backdrop-blur-md text-white text-xs font-bold font-devanagari-heading shadow-md border border-orange-400/40">
                  स्वरूप #{idx + 1}
                </div>

                {/* Quick View Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSwaroop(swaroop);
                  }}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-orange-600 transition-colors backdrop-blur-sm"
                  title="विस्तृत दर्शन करें"
                >
                  <Eye className="w-4 h-4" />
                </button>

                {/* Subtitle Badge */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs text-amber-300 font-bold font-devanagari-body block drop-shadow-md">
                    {swaroop.title}
                  </span>
                  <h3 className="text-xl font-bold font-devanagari-heading text-white drop-shadow-lg mt-0.5">
                    {swaroop.hindiName}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  
                  {/* Detailed Description */}
                  <div>
                    <span className="text-xs font-bold text-amber-950 font-devanagari-body block mb-1">
                      स्वरूप का दिव्य वर्णन:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 font-devanagari-body leading-relaxed line-clamp-3">
                      {swaroop.description}
                    </p>
                  </div>

                  {/* Purpose Behind The Form */}
                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                    <strong className="text-xs font-bold text-orange-600 flex items-center gap-1.5 font-devanagari-body">
                      <Shield className="w-3.5 h-3.5" />
                      <span>प्रकट होने का पावन उद्देश्य:</span>
                    </strong>
                    <p className="text-xs text-slate-800 font-devanagari-body leading-relaxed line-clamp-3">
                      {swaroop.purpose}
                    </p>
                  </div>

                  {/* Mantra Banner */}
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-900 to-orange-950 text-amber-100 flex items-center justify-between border border-amber-500/30">
                    <div className="overflow-hidden mr-2">
                      <span className="text-[10px] text-amber-400 font-bold block uppercase font-devanagari-body">
                        सिद्ध ध्यान मंत्र:
                      </span>
                      <p className="text-xs font-bold font-devanagari-heading text-amber-100 truncate">
                        {swaroop.mantra}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCopyMantra(swaroop)}
                      className="p-1.5 rounded-lg bg-amber-800/80 hover:bg-amber-700 text-amber-300 shrink-0 transition-all"
                      title="मंत्र कॉपी करें"
                    >
                      {copiedMantraId === swaroop.id ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <button
                  onClick={() => setSelectedSwaroop(swaroop)}
                  className="mt-4 w-full py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold font-devanagari-body text-xs transition-all flex items-center justify-center gap-1.5 border border-amber-300"
                >
                  <span>संपूर्ण महिमा व रहस्य जानें</span>
                  <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Modal Lightbox */}
      {selectedSwaroop && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 max-w-2xl w-full border-2 border-amber-400 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedSwaroop(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-amber-100 text-amber-900 hover:bg-amber-200 transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-64 rounded-2xl overflow-hidden bg-amber-950">
              <img
                src={selectedSwaroop.imageUrl}
                alt={selectedSwaroop.hindiName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs text-amber-300 font-bold uppercase tracking-wider font-devanagari-body">
                  {selectedSwaroop.title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-devanagari-heading text-gold-gradient">
                  {selectedSwaroop.hindiName}
                </h3>
              </div>
            </div>

            {/* In-depth Details Body */}
            <div className="space-y-4 font-devanagari-body text-sm text-slate-800 leading-relaxed">
              
              <div className="space-y-1">
                <strong className="text-amber-950 font-bold block text-sm">
                  १. स्वरूप का विस्तृत वर्णन:
                </strong>
                <p className="text-xs sm:text-sm text-slate-700 bg-amber-50/60 p-3.5 rounded-2xl border border-amber-200">
                  {selectedSwaroop.description}
                </p>
              </div>

              <div className="space-y-1">
                <strong className="text-orange-700 font-bold block text-sm flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-orange-600" />
                  <span>२. इस स्वरूप के प्राकट्य का मुख्य उद्देश्य:</span>
                </strong>
                <p className="text-xs sm:text-sm text-slate-800 bg-orange-50/70 p-3.5 rounded-2xl border border-orange-200">
                  {selectedSwaroop.purpose}
                </p>
              </div>

              <div className="space-y-1">
                <strong className="text-emerald-800 font-bold block text-sm">
                  ३. पूजन व ध्यान से मिलने वाला फल (फलश्रुति):
                </strong>
                <p className="text-xs sm:text-sm text-slate-700 bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-200">
                  {selectedSwaroop.significance}
                </p>
              </div>

              {/* Siddha Mantra Box */}
              <div className="p-4 rounded-2xl bg-amber-950 text-white border border-amber-500/40 text-center space-y-2">
                <span className="text-xs text-amber-400 font-bold uppercase tracking-widest block">
                  पावन सिद्ध ध्यान मंत्र
                </span>
                <p className="text-base sm:text-lg font-bold font-devanagari-heading text-amber-100">
                  {selectedSwaroop.mantra}
                </p>
                <button
                  onClick={() => handleCopyMantra(selectedSwaroop)}
                  className="px-4 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all inline-flex items-center gap-1.5 shadow-md"
                >
                  {copiedMantraId === selectedSwaroop.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>मंत्र कॉपी हो गया!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>मंत्र कॉपी करें</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Modal Bottom Buttons */}
            <button
              onClick={() => setSelectedSwaroop(null)}
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
