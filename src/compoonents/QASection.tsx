import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Send, Sparkles, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/hanumanData';
import { soundManager } from '../utils/soundEffects';

export const QASection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [userQuestion, setUserQuestion] = useState('');
  const [devoteeName, setDevoteeName] = useState('');
  const [askedQuestions, setAskedQuestions] = useState<Array<{ q: string; a: string; name: string }>>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion) return;

    soundManager.playTempleBell();

    let answer = 'हनुमान जी की कृपा से आपका प्रश्न प्राप्त हुआ है। हनुमान चालीसा में लिखा है: "बुद्धिहीन तनु जानिके सुमिरौ पवन-कुमार, बल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार"। भक्तिपूर्वक प्रभु का ध्यान करें, आपकी सभी शंकाएं दूर होंगी।';

    if (userQuestion.includes('महिला') || userQuestion.includes('स्त्री')) {
      answer = 'हां, माताएं व बहनें पूर्ण श्रद्धा से श्री हनुमान चालीसा व हनुमान आरती का पाठ कर सकती हैं। केवल हनुमान जी की मूर्ति को स्पर्श न करने की परंपरा का पालन किया जाता है।';
    } else if (userQuestion.includes('व्रत') || userQuestion.includes('मंगलवार')) {
      answer = 'मंगलवार व्रत में दिन में केवल एक बार बिना नमक का भोजन (जैसे हलवा, फल, दूध या मीठी पूरी) ग्रहण किया जाता है। प्रातः हनुमान जी को चोला या सुंदरकांड पाठ समर्पित करें।';
    } else if (userQuestion.includes('चालीसा')) {
      answer = 'हनुमान चालीसा का पाठ दिन में किसी भी समय प्रातः अथवा संध्याकाल में धूप-दीपक जलाकर 1, 7, 11 या 100 बार किया जा सकता है।';
    }

    setAskedQuestions([{ q: userQuestion, a: answer, name: devoteeName || 'भक्त' }, ...askedQuestions]);
    setUserQuestion('');
    setDevoteeName('');
  };

  return (
    <section id="qa" className="py-12 md:py-20 bg-divine-dark text-amber-50 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold shadow-md">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>भक्त शंका समाधान</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-devanagari-heading text-gold-gradient">
            भक्त प्रश्नोत्तर एवं आध्यात्मिक जिज्ञासा समाधान
          </h2>
          <p className="text-sm sm:text-base text-amber-200/80 font-devanagari-body">
            हनुमान चालीसा पाठ नियम, व्रत विधि, चोला अर्पण व धार्मिक प्रश्नों के प्रामाणिक समाधान।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: FAQ Accordion (Lg: 7) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold font-devanagari-heading text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-amber-400" />
              <span>सामान्यतः पूछे जाने वाले प्रश्न (FAQ)</span>
            </h3>

            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-amber-950/80 border border-amber-600/40 overflow-hidden transition-all shadow-md"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold font-devanagari-heading text-base sm:text-lg text-amber-100 hover:text-amber-300 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-amber-400 text-sm">Q{index + 1}.</span>
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-amber-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 border-t border-amber-800/40 text-xs sm:text-sm text-amber-200/90 font-devanagari-body leading-relaxed space-y-2">
                      <p>{faq.answer}</p>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-900 text-amber-300 text-[10px] font-bold">
                        श्रेणी: {faq.category}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Ask Question Interactive Form (Lg: 5) */}
          <div className="lg:col-span-5 bg-amber-950/90 rounded-3xl p-6 sm:p-8 border-2 border-amber-500/40 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-devanagari-body flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" /> आध्यात्मिक संवाद
              </span>
              <h3 className="text-2xl font-bold font-devanagari-heading text-gold-gradient mt-1">
                अपना प्रश्न पूछें
              </h3>
              <p className="text-xs text-amber-200/80 font-devanagari-body mt-1">
                हनुमान जी की पूजा, पाठ अथवा व्रत से संबंधित अपनी शंका यहाँ लिखें।
              </p>
            </div>

            <form onSubmit={handleAskQuestion} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-amber-300 mb-1.5 font-devanagari-body">
                  आपका नाम (Name):
                </label>
                <input
                  type="text"
                  placeholder="अपना नाम लिखें..."
                  value={devoteeName}
                  onChange={(e) => setDevoteeName(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-amber-900/60 border border-amber-600/40 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-500 font-devanagari-body"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-300 mb-1.5 font-devanagari-body">
                  आपका प्रश्न (Your Question) *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="जैसे: क्या हनुमान जी को तुलसी दल चढ़ाना चाहिए?..."
                  value={userQuestion}
                  onChange={(e) => setUserQuestion(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-amber-900/60 border border-amber-600/40 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-500 font-devanagari-body"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-saffron-gradient text-white font-bold font-devanagari-body text-sm shadow-aura hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>प्रश्न सबमिट करें व समाधान पाएं</span>
              </button>
            </form>

            {/* Answer Display Feed */}
            {askedQuestions.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-amber-800/60">
                <span className="text-xs font-bold text-amber-400 font-devanagari-body">हाल में पूछे गए प्रश्न व उत्तर:</span>
                {askedQuestions.map((q, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-amber-900/50 border border-amber-700/40 text-xs font-devanagari-body space-y-1.5">
                    <p className="font-bold text-amber-200">
                      भक्त {q.name}: "{q.q}"
                    </p>
                    <p className="text-amber-100/90 leading-relaxed pl-2 border-l-2 border-orange-500">
                      उत्तर: {q.a}
                    </p>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
