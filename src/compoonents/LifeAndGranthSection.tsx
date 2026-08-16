import React, { useState } from 'react';
import { BookOpen, Heart, Shield, Compass, ChevronRight, Scroll, Flame, Award, X } from 'lucide-react';
import { LIFE_EPISODES, EPIC_REFERENCES, SACRED_GRANTHS } from '../data/hanumanLifeData';
import type { LifeEpisode, SacredGranth } from '../data/hanumanLifeData';
import { soundManager } from '../utils/soundEffects';

export const LifeAndGranthSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'episodes' | 'devotion' | 'epics' | 'granths'>('episodes');
  const [selectedEpisode, setSelectedEpisode] = useState<LifeEpisode | null>(null);
  const [selectedGranth, setSelectedGranth] = useState<SacredGranth | null>(null);

  const handleTabChange = (tab: 'episodes' | 'devotion' | 'epics' | 'granths') => {
    soundManager.playTempleBell();
    setActiveTab(tab);
  };

  return (
    <section id="life-and-granth" className="py-12 md:py-20 bg-amber-50/70 text-slate-900 border-t border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200/80 border border-amber-400 text-amber-900 text-xs sm:text-sm font-bold shadow-xs">
            <Scroll className="w-4 h-4 text-orange-600" />
            <span>चरित्र, पराक्रम एवं पावन वाङ्मय</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-devanagari-heading text-amber-950">
            हनुमान जीवन, राम निष्ठा और पावन ग्रंथ
          </h2>
          <p className="text-sm sm:text-base text-amber-900/80 font-devanagari-body">
            भगवान श्री हनुमान जी के दिव्य जीवन प्रसंग, प्रभु राम के प्रति अनन्य दास्य भक्ति, महाभारत व पुराणों में पावन प्रसंग और प्रमुख स्तुति ग्रंथ।
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <button
            onClick={() => handleTabChange('episodes')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl whitespace-nowrap text-sm font-bold font-devanagari-body transition-all border ${
              activeTab === 'episodes'
                ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                : 'bg-white border-amber-200 text-amber-950 hover:bg-amber-100'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>जीवन के मुख्य प्रसंग</span>
          </button>

          <button
            onClick={() => handleTabChange('devotion')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl whitespace-nowrap text-sm font-bold font-devanagari-body transition-all border ${
              activeTab === 'devotion'
                ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                : 'bg-white border-amber-200 text-amber-950 hover:bg-amber-100'
            }`}
          >
            <Heart className="w-4 h-4 text-rose-500" />
            <span>श्री राम के प्रति निष्ठा</span>
          </button>

          <button
            onClick={() => handleTabChange('epics')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl whitespace-nowrap text-sm font-bold font-devanagari-body transition-all border ${
              activeTab === 'epics'
                ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                : 'bg-white border-amber-200 text-amber-950 hover:bg-amber-100'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>महाभारत व पुराणों में उल्लेख</span>
          </button>

          <button
            onClick={() => handleTabChange('granths')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl whitespace-nowrap text-sm font-bold font-devanagari-body transition-all border ${
              activeTab === 'granths'
                ? 'bg-saffron-gradient text-white border-amber-300 shadow-aura scale-105'
                : 'bg-white border-amber-200 text-amber-950 hover:bg-amber-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>हनुमान जी के प्रमुख ग्रंथ</span>
          </button>
        </div>

        {/* Tab 1: Life Episodes Timeline & Cards */}
        {activeTab === 'episodes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {LIFE_EPISODES.map((episode, idx) => (
              <div
                key={episode.id}
                className="bg-white rounded-3xl p-6 border-2 border-amber-200 shadow-lg hover:border-amber-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center text-xs shadow-md">
                      {idx + 1}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold font-devanagari-body">
                      {episode.era}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-devanagari-heading text-amber-950 group-hover:text-orange-600 transition-colors">
                      {episode.hindiTitle}
                    </h3>
                    <p className="text-xs text-amber-700 font-devanagari-body mt-0.5">
                      📍 {episode.location}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 font-devanagari-body line-clamp-3 leading-relaxed">
                    {episode.description}
                  </p>

                  <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-devanagari-body">
                    <span className="font-bold text-orange-600 block mb-1">आध्यात्मिक सीख:</span>
                    <p className="text-slate-800 italic">{episode.keyLesson}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedEpisode(episode)}
                  className="mt-6 w-full py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold font-devanagari-body text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <span>विस्तृत प्रसंग पढ़ें</span>
                  <ChevronRight className="w-4 h-4 text-orange-600" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Devotion to Lord Rama */}
        {activeTab === 'devotion' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Spotlight Banner */}
            <div className="bg-gradient-to-r from-amber-950 via-orange-950 to-amber-950 rounded-3xl p-6 sm:p-10 text-white border-2 border-amber-400 shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-bold font-devanagari-body">
                  <Heart className="w-3.5 h-3.5 fill-white" /> अनन्य दास्य भाव
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-devanagari-heading text-gold-gradient">
                  "हृदय माहिं सिय राम बसिया" — पराकाष्ठा की निष्ठा
                </h3>
                <p className="text-sm sm:text-base text-amber-100/90 font-devanagari-body leading-relaxed">
                  हनुमान जी की भक्ति संसार में 'दास्य भक्ति' का सर्वोच्च आदर्श है। जब माता सीता ने उन्हें मोतियों की बहुमूल्य माला भेंट की, तो उन्होंने हर मोती को तोड़कर देखा कि उसमें 'राम' हैं या नहीं। जब सभासदों ने प्रश्न किया, तो हनुमान जी ने अपना सीना चीरकर साक्षात् प्रभु श्री राम और माता जानकी के दर्शन करा दिए।
                </p>
                <div className="p-4 rounded-2xl bg-amber-900/60 border border-amber-500/30 text-amber-200 font-devanagari-body italic text-sm">
                  "राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा॥"
                </div>
              </div>
            </div>

            {/* 3 Pillars of Devotion */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-6 border-2 border-amber-200 shadow-lg space-y-3">
                <div className="p-3 rounded-2xl bg-orange-100 text-orange-600 w-fit">
                  <Flame className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-devanagari-heading text-amber-950">
                  राम नाम की सर्वोच्च महिमा
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 font-devanagari-body leading-relaxed">
                  हनुमान जी के अनुसार 'राम' नाम स्वयं भगवान राम से भी बड़ा है। समुद्र पर तैरने वाले पत्थरों पर 'श्री राम' लिखकर ही सेतु का निर्माण हुआ। हनुमान जी का प्रत्येक श्वास केवल 'राम' नाम का ही जप करता है।
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border-2 border-amber-200 shadow-lg space-y-3">
                <div className="p-3 rounded-2xl bg-amber-100 text-amber-700 w-fit">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-devanagari-heading text-amber-950">
                  अहंकार शून्यता (निरहंकारिता)
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 font-devanagari-body leading-relaxed">
                  समुद्र लांघने, लंका दहन और संजीवनी लाने जैसे असंभव कार्यों को करने के बाद भी जब प्रभु राम ने प्रशंसा की, तो हनुमान जी ने हाथ जोड़कर कहा— "प्रभु, यह सब आपके नाम और कृपा का प्रताप है, मेरा कोई सामर्थ्य नहीं।"
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border-2 border-amber-200 shadow-lg space-y-3">
                <div className="p-3 rounded-2xl bg-rose-100 text-rose-600 w-fit">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-devanagari-heading text-amber-950">
                  अखंड सेवा का संकल्प
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 font-devanagari-body leading-relaxed">
                  जब भगवान राम अपने परम धाम वैकुंठ पधारने लगे, तो उन्होंने हनुमान जी से साथ चलने को कहा। परंतु हनुमान जी ने यह कहकर मना कर दिया कि जहाँ रामकथा नहीं, उस मोक्ष का मैं क्या करूँगा। मैं पृथ्वी पर रहकर सदा रामकथा सुनूँगा।
                </p>
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Mahabharata & Puranas References */}
        {activeTab === 'epics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {EPIC_REFERENCES.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-orange-700 text-xs font-bold font-devanagari-body">
                      {item.source}
                    </span>
                    <span className="text-xl">📜</span>
                  </div>

                  <h3 className="text-xl font-bold font-devanagari-heading text-amber-950">
                    {item.title}
                  </h3>

                  <p className="text-xs font-bold text-slate-500 font-devanagari-body">
                    प्रसंग: {item.context}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-700 font-devanagari-body leading-relaxed">
                    {item.story}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-devanagari-body text-amber-950">
                  <strong className="text-orange-600 block mb-0.5">शास्त्र सम्मत महत्व:</strong>
                  {item.significance}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Sacred Scriptures (ग्रंथ) */}
        {activeTab === 'granths' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
            {SACRED_GRANTHS.map((granth) => (
              <div
                key={granth.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-xl space-y-5 flex flex-col justify-between hover:border-amber-400 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold font-devanagari-body">
                      {granth.author}
                    </span>
                    <span className="text-xs text-slate-500 font-devanagari-body">{granth.compositionEra}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-devanagari-heading text-amber-950">
                      {granth.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 font-devanagari-body mt-2 leading-relaxed">
                      {granth.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-amber-200">
                    <span className="text-xs font-bold text-amber-950 font-devanagari-body block">
                      मुख्य विशेषताएं एवं सामग्री:
                    </span>
                    <ul className="space-y-1">
                      {granth.keyHighlights.map((hl, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-devanagari-body text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-orange-600 block font-devanagari-body">पाठ का विशेष फल:</span>
                    <p className="text-xs text-slate-800 font-devanagari-body">{granth.significance}</p>
                  </div>
                  <button
                    onClick={() => setSelectedGranth(granth)}
                    className="px-3 py-1.5 rounded-xl bg-orange-600 text-white font-bold text-xs font-devanagari-body shrink-0 ml-3 shadow-md hover:bg-orange-500 transition-all"
                  >
                    विवरण
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Episode Detail Modal */}
      {selectedEpisode && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 max-w-xl w-full border-2 border-amber-400 shadow-2xl relative space-y-6 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedEpisode(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-amber-100 text-amber-900 hover:bg-amber-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-amber-200 pb-4">
              <span className="text-xs font-bold text-orange-600 font-devanagari-body uppercase">
                {selectedEpisode.era} • {selectedEpisode.location}
              </span>
              <h3 className="text-2xl font-bold font-devanagari-heading text-amber-950 mt-1">
                {selectedEpisode.hindiTitle}
              </h3>
            </div>

            <div className="space-y-4 font-devanagari-body text-sm leading-relaxed text-slate-800">
              <p>{selectedEpisode.description}</p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-center space-y-1">
                <span className="text-xs font-bold text-orange-600 uppercase">संबंधित पावन श्लोक</span>
                <p className="text-base font-bold font-devanagari-heading text-amber-950">
                  "{selectedEpisode.shloka}"
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
                <span className="text-xs font-bold text-orange-700 block mb-1">जीवन में अपनाने योग्य शिक्षा:</span>
                <p className="text-xs sm:text-sm text-slate-800">{selectedEpisode.keyLesson}</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedEpisode(null)}
              className="w-full py-3 rounded-xl bg-saffron-gradient text-white font-bold font-devanagari-body text-xs shadow-md"
            >
              बंद करें (Close)
            </button>
          </div>
        </div>
      )}

      {/* Granth Detail Modal */}
      {selectedGranth && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 max-w-xl w-full border-2 border-amber-400 shadow-2xl relative space-y-6 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedGranth(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-amber-100 text-amber-900 hover:bg-amber-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-amber-200 pb-4">
              <span className="text-xs font-bold text-orange-600 font-devanagari-body uppercase">
                रचयिता: {selectedGranth.author} ({selectedGranth.compositionEra})
              </span>
              <h3 className="text-2xl font-bold font-devanagari-heading text-amber-950 mt-1">
                {selectedGranth.name}
              </h3>
            </div>

            <div className="space-y-4 font-devanagari-body text-sm leading-relaxed text-slate-800">
              <p>{selectedGranth.description}</p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <span className="text-xs font-bold text-amber-950 block">इस ग्रंथ के मुख्य अध्याय एवं विषय:</span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {selectedGranth.keyHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5 shrink-0"></span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
                <span className="text-xs font-bold text-orange-700 block mb-1">नित्य पाठ का आध्यात्मिक फल:</span>
                <p className="text-xs sm:text-sm text-slate-800">{selectedGranth.significance}</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedGranth(null)}
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
