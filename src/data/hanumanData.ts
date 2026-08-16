export interface Chaupai {
  id: number;
  type: 'doha' | 'chaupai' | 'chhand' | 'pada';
  numberStr: string;
  hindiText: string;
  transliteration: string;
  meaning: string;
  imageUrl: string;
  audioTime: number; // in seconds
}

export interface ScriptureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  verses: Chaupai[];
}

export interface Temple {
  id: string;
  name: string;
  location: string;
  state: string;
  description: string;
  streamUrl: string;
  timings: string;
  imageUrl: string;
  isLive: boolean;
}

export interface HanumanSwaroop {
  id: string;
  name: string;
  hindiName: string;
  title: string;
  description: string;
  purpose: string; // प्राकट्य का दिव्य उद्देश्य
  significance: string;
  imageUrl: string;
  category: 'rudra' | 'bhakti' | 'kalyan' | 'all';
  mantra: string;
}

export interface Festival {
  id: string;
  name: string;
  hindiName: string;
  date: string;
  description: string;
  significance: string;
  rituals: string[];
  imageUrl: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface Suvichar {
  id: number;
  shloka: string;
  hindiMeaning: string;
  author: string;
}

// 1. श्री हनुमान चालीसा (All 40 Chaupai + 3 Dohas)
export const HANUMAN_CHALISA: ScriptureItem = {
  id: 'chalisa',
  title: 'श्री हनुमान चालीसा',
  subtitle: 'गोस्वामी तुलसीदास कृत ४० चौपाई एवं ३ दोहे',
  description: 'समस्त मनोकामनाओं की पूर्ति, भय निवारण एवं आत्मबल जागृति हेतु नित्य पाठ्य महाकाव्य।',
  verses: [
    {
      id: 0,
      type: 'doha',
      numberStr: 'दोहा १',
      hindiText: 'श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि।\nबरनऊ रघुबर बिमल जसु जो दायकु फल चारि॥',
      transliteration: 'Shri Guru Charan Saroj Raj, Nij Manu Mukuru Sudhari;\nBarnau Raghuvar Bimal Jasu, Jo Dayaku Phal Chari.',
      meaning: 'श्री गुरु महाराज के चरण कमलों की धूलि से अपने मन रूपी दर्पण को पवित्र करके, मैं श्री रघुवीर के निर्मल यश का वर्णन करता हूँ, जो चारों फल (धर्म, अर्थ, काम और मोक्ष) देने वाला है।',
      imageUrl: '/images/hero_hanuman.jpg',
      audioTime: 0
    },
    {
      id: 1,
      type: 'doha',
      numberStr: 'दोहा २',
      hindiText: 'बुद्धिहीन तनु जानिके सुमिरौ पवन-कुमार।\nबल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार॥',
      transliteration: 'Buddhiheen Tanu Janike, Sumirau Pavan-Kumar;\nBal Buddhi Vidya Dehu Mohi, Harahu Kalesh Bikar.',
      meaning: 'हे पवनकुमार! मैं स्वयं को बुद्धिहीन मानकर आपका स्मरण करता हूँ। आप मुझे बल, बुद्धि और विद्या प्रदान करें तथा मेरे समस्त क्लेशों व विकारों को दूर करें।',
      imageUrl: '/images/bal_maruti_hanuman.jpg',
      audioTime: 12
    },
    {
      id: 2,
      type: 'chaupai',
      numberStr: 'चौपाई १',
      hindiText: 'जय हनुमान ज्ञान गुन सागर।\nजय कपीस तिहुं लोक उजागर॥',
      transliteration: 'Jai Hanuman Gyan Gun Sagar;\nJai Kapis Tihun Lok Ujagar.',
      meaning: 'ज्ञान और गुणों के सागर श्री हनुमान जी की जय हो! तीनों लोकों में आपका यश देदीप्यमान है, आपकी जय हो!',
      imageUrl: '/images/hero_hanuman.jpg',
      audioTime: 24
    },
    {
      id: 3,
      type: 'chaupai',
      numberStr: 'चौपाई २',
      hindiText: 'राम दूत अतुलित बल धामा।\nअंजनि-पुत्र पवनसुत नामा॥',
      transliteration: 'Ram Doot Atulit Bal Dhama;\nAnjani-Putra Pavansut Nama.',
      meaning: 'आप श्री राम के दूत और अतुलनीय बल के धाम हैं। आपको माता अंजनी के पुत्र और पवनसुत के नाम से जाना जाता है।',
      imageUrl: '/images/veer_maruti_hanuman.jpg',
      audioTime: 32
    },
    {
      id: 4,
      type: 'chaupai',
      numberStr: 'चौपाई ३',
      hindiText: 'महाबीर बिक्रम बजरंगी।\nकुमति निवार सुमति के संगी॥',
      transliteration: 'Mahabir Bikram Bajrangi;\nKumati Nivar Sumati Ke Sangi.',
      meaning: 'आप महान वीर और वज्र के समान शक्तिशाली अंगों वाले हैं। आप दुर्बुद्धि को दूर करने वाले और सद्बुद्धि देने वालों के साथी हैं।',
      imageUrl: '/images/veer_maruti_hanuman.jpg',
      audioTime: 40
    },
    {
      id: 5,
      type: 'chaupai',
      numberStr: 'चौपाई ४',
      hindiText: 'कंचन बरन बिराज सुबेसा।\nकानन कुंडल कुंचित केसा॥',
      transliteration: 'Kanchan Baran Biraj Subesa;\nKanan Kundal Kunchit Kesa.',
      meaning: 'आपका वर्ण सुवर्ण के समान कांतिमान है। आप सुंदर वस्त्रों, कानों में कुंडल और घुंघराले केशों से सुशोभित हैं।',
      imageUrl: '/images/prasanna_anjaneya.jpg',
      audioTime: 48
    },
    {
      id: 6,
      type: 'chaupai',
      numberStr: 'चौपाई ५',
      hindiText: 'हाथ बज्र ओ ध्वजा बिराजै।\nकांधे मूंज जनेऊ साजै॥',
      transliteration: 'Hath Vajra O Dhwaja Birajai;\nKandhe Munj Janeu Sajai.',
      meaning: 'आपके हाथ में वज्र और धर्म की ध्वजा सुशोभित है तथा कंधे पर मूंज का जनेऊ अत्यधिक शोभायमान है।',
      imageUrl: '/images/panchmukhi_hanuman.jpg',
      audioTime: 56
    },
    {
      id: 7,
      type: 'chaupai',
      numberStr: 'चौपाई ६',
      hindiText: 'संकर सुवन केसरीनंदन।\nतेज प्रताप महा जग बंदन॥',
      transliteration: 'Sankar Suvan Kesarinandan;\nTej Pratap Maha Jag Bandan.',
      meaning: 'आप भगवान शंकर के अवतार और केसरी जी के नंदन हैं। आपके महान तेज और प्रताप की संपूर्ण संसार वंदना करता है।',
      imageUrl: '/images/ekadashmukhi_hanuman.jpg',
      audioTime: 64
    },
    {
      id: 8,
      type: 'chaupai',
      numberStr: 'चौपाई ७',
      hindiText: 'विद्यावान गुनी अति चातुर।\nराम काज करिबे को आतुर॥',
      transliteration: 'Vidyavan Guni Ati Chatur;\nRam Kaj Karibe Ko Aatur.',
      meaning: 'आप अत्यंत विद्यावान, गुणी और चतुर हैं तथा श्री राम चंद्र जी के कार्यों को पूर्ण करने के लिए सर्वदा तत्पर रहते हैं।',
      imageUrl: '/images/surya_shishya_hanuman.jpg',
      audioTime: 72
    },
    {
      id: 9,
      type: 'chaupai',
      numberStr: 'चौपाई ८',
      hindiText: 'प्रभु चरित्र सुनिबे को रसिया।\nराम लखन सीता मन बसिया॥',
      transliteration: 'Prabhu Charitra Sunibe Ko Rasiya;\nRam Lakhan Sita Man Basiya.',
      meaning: 'आप भगवान श्री राम की कथाएँ और चरित्र सुनने के अत्यंत रसिक हैं। श्री राम, लक्ष्मण और माता सीता आपके हृदय में सदैव निवास करते हैं।',
      imageUrl: '/images/bhakta_hanuman.jpg',
      audioTime: 80
    },
    {
      id: 10,
      type: 'chaupai',
      numberStr: 'चौपाई ९',
      hindiText: 'सूक्ष्म रूप धरि सियहिं दिखावा।\nबिकट रूप धरि लंक जरावा॥',
      transliteration: 'Sukshma Roop Dhari Siyahin Dikhava;\nBikat Roop Dhari Lanka Jarava.',
      meaning: 'आपने अत्यंत सूक्ष्म रूप धारण करके माता सीता को दर्शन दिए और विकराल रूप धारण करके लंका दहन किया।',
      imageUrl: '/images/lanka_dahan_hanuman.jpg',
      audioTime: 88
    },
    {
      id: 11,
      type: 'chaupai',
      numberStr: 'चौपाई १०',
      hindiText: 'भीम रूप धरि असुर संहारे।\nरामचंद्र के काज संवारे॥',
      transliteration: 'Bheem Roop Dhari Asur Samhare;\nRamchandra Ke Kaj Samvare.',
      meaning: 'आपने विशाल एवं भयानक रूप धारण करके राक्षसों का संहार किया और श्री रामचंद्र जी के सभी कार्यों को सुगमता से संवारा।',
      imageUrl: '/images/sankat_mochan_hanuman.jpg',
      audioTime: 96
    },
    {
      id: 12,
      type: 'chaupai',
      numberStr: 'चौपाई ११',
      hindiText: 'लाय सजीवन लखन जियाये।\nश्रीरघुबीर हरषि उर लाये॥',
      transliteration: 'Laye Sanjeevan Lakhan Jiyaye;\nShri Raghuveer Harashi Ur Laye.',
      meaning: 'आप द्रोणाचल पर्वत से संजीवनी बूटी लाकर श्री लक्ष्मण जी के प्राण बचाए, जिससे प्रसन्न होकर श्री रघुनाथ जी ने आपको हृदय से लगा लिया।',
      imageUrl: '/images/sankat_mochan_hanuman.jpg',
      audioTime: 104
    },
    {
      id: 13,
      type: 'chaupai',
      numberStr: 'चौपाई १२',
      hindiText: 'रघुपति कीन्ही बहुत बड़ाई।\nतुम मम प्रिय भरतहि सम भाई॥',
      transliteration: 'Raghupati Keenhi Bahut Badai;\nTum Mam Priya Bharatahi Sam Bhai.',
      meaning: 'श्री राम जी ने आपकी भूरि-भूरि प्रशंसा की और कहा कि तुम मुझे मेरे भ्राता भरत के समान ही प्रिय हो।',
      imageUrl: '/images/bhakta_hanuman.jpg',
      audioTime: 112
    },
    {
      id: 14,
      type: 'chaupai',
      numberStr: 'चौपाई १३',
      hindiText: 'सहस बदन तुम्हरो जस गावैं।\nअस कहि श्रीपति कंठ लगावैं॥',
      transliteration: 'Sahas Badan Tumharo Jas Gavain;\nAs Kahi Shripati Kanth Lagavain.',
      meaning: 'शेषनाग अपने हजार मुखों से तुम्हारा यशगान करते हैं, ऐसा कहकर लक्ष्मीपति श्री राम ने आपको कंठ से लगा लिया।',
      imageUrl: '/images/prasanna_anjaneya.jpg',
      audioTime: 120
    },
    {
      id: 15,
      type: 'chaupai',
      numberStr: 'चौपाई १४',
      hindiText: 'सनकादिक ब्रह्मादि मुनीसा।\nनारद सारद सहित अहीसा॥',
      transliteration: 'Sanakadika Brahmadika Muneesa;\nNarad Sarad Sahit Aheesa.',
      meaning: 'सनक, सनन्दन, सनातन, सनत्कुमार, ब्रह्मा आदि देव, नारद मुनि, माता सरस्वती और शेषनाग जी भी आपका यशगान करते हैं।',
      imageUrl: '/images/panchmukhi_hanuman.jpg',
      audioTime: 128
    },
    {
      id: 16,
      type: 'chaupai',
      numberStr: 'चौपाई १५',
      hindiText: 'जम कुबेर दिगपाल जहां ते।\nकबि कोबिद कहि सके कहां ते॥',
      transliteration: 'Jam Kuber Digpal Jahan Te;\nKabi Kobid Kahi Sake Kahan Te.',
      meaning: 'यमराज, कुबेर और दिशाओं के रक्षक दिक्पाल भी जब आपकी महिमा का पूर्ण वर्णन नहीं कर सकते, तो साधारण कवि और विद्वान कैसे कर सकते हैं!',
      imageUrl: '/images/ekadashmukhi_hanuman.jpg',
      audioTime: 136
    },
    {
      id: 17,
      type: 'chaupai',
      numberStr: 'चौपाई १६',
      hindiText: 'तुम उपकार सुग्रीवहिं कीन्हा।\nराम मिलाय राज पद दीन्हा॥',
      transliteration: 'Tum Upakar Sugreevahin Keenha;\nRam Milaye Raj Pad Deenha.',
      meaning: 'आपने सुग्रीव पर महान उपकार किया, उन्हें श्री राम से मिलाया और उनका खोया हुआ राज्य पद पुनः प्राप्त कराया।',
      imageUrl: '/images/surya_shishya_hanuman.jpg',
      audioTime: 144
    },
    {
      id: 18,
      type: 'chaupai',
      numberStr: 'चौपाई १७',
      hindiText: 'तुम्हरो मंत्र बिभीषन माना।\nलंकेस्वर भए सब जग जाना॥',
      transliteration: 'Tumharo Mantra Vibhishan Mana;\nLankeswar Bhae Sab Jag Jana.',
      meaning: 'आपकी सलाह को विभीषण ने माना, जिसके फलस्वरूप वे लंका के राजा बने, यह बात सारा संसार जानता है।',
      imageUrl: '/images/bhakta_hanuman.jpg',
      audioTime: 152
    },
    {
      id: 19,
      type: 'chaupai',
      numberStr: 'चौपाई १८',
      hindiText: 'जुग सहस जोजन पर भानू।\nलील्यो ताहि मधुर फल जानू॥',
      transliteration: 'Jug Sahas Jojan Par Bhanu;\nLeelyo Tahi Madhur Phal Janu.',
      meaning: 'जो सूर्य हजारों योजन की दूरी पर स्थित है, उसे आपने बाल्यकाल में एक मीठा फल समझकर निगल लिया था।',
      imageUrl: '/images/bal_maruti_hanuman.jpg',
      audioTime: 160
    },
    {
      id: 20,
      type: 'chaupai',
      numberStr: 'चौपाई १९',
      hindiText: 'प्रभु मुद्रिका मेलि मुख माहीं।\nजलधि लांघि गये अचरज नाहीं॥',
      transliteration: 'Prabhu Mudrika Meli Mukh Mahin;\nJaladhi Langhi Gaye Acharaj Nahin.',
      meaning: 'श्री राम जी की मुद्रिका (अंगूठी) को मुख में रखकर आपने अथाह समुद्र को लांघ लिया, इसमें कोई आश्चर्य की बात नहीं है।',
      imageUrl: '/images/sankat_mochan_hanuman.jpg',
      audioTime: 168
    },
    {
      id: 21,
      type: 'chaupai',
      numberStr: 'चौपाई २०',
      hindiText: 'दुर्गम काज जगत के जेते।\nसुगम अनुग्रह तुम्हारे तेते॥',
      transliteration: 'Durgam Kaj Jagat Ke Jete;\nSugam Anugraha Tumhare Tete.',
      meaning: 'संसार में जितने भी कठिन से कठिन कार्य हैं, वे आपकी कृपा दृष्टि मात्र से सुगम हो जाते हैं।',
      imageUrl: '/images/hero_hanuman.jpg',
      audioTime: 176
    },
    {
      id: 22,
      type: 'chaupai',
      numberStr: 'चौपाई २१',
      hindiText: 'राम दुआरे तुम रखवारे।\nहोत न आज्ञा बिनु पैसारे॥',
      transliteration: 'Ram Duare Tum Rakhvare;\nHot Na Agya Binu Paisare.',
      meaning: 'श्री राम जी के द्वार के आप रक्षक हैं। आपकी आज्ञा और कृपा के बिना कोई भी राम जी के दरबार में प्रवेश नहीं पा सकता।',
      imageUrl: '/images/veer_maruti_hanuman.jpg',
      audioTime: 184
    },
    {
      id: 23,
      type: 'chaupai',
      numberStr: 'चौपाई २२',
      hindiText: 'सब सुख लहै तुम्हारी सरना।\nतुम रच्छक काहू को डर ना॥',
      transliteration: 'Sab Sukh Lahai Tumhari Sarna;\nTum Rachhak Kahu Ko Dar Na.',
      meaning: 'आपकी शरण में आने पर संपूर्ण सुख और आनंद प्राप्त होते हैं। जब आप रक्षक हैं, तो किसी भी बात का भय नहीं रहता।',
      imageUrl: '/images/prasanna_anjaneya.jpg',
      audioTime: 192
    },
    {
      id: 24,
      type: 'chaupai',
      numberStr: 'चौपाई २३',
      hindiText: 'आपन तेज सम्हारो आपै।\nतीनों लोक हांक तें कांपै॥',
      transliteration: 'Aapan Tej Samharo Aapai;\nTeenon Lok Hank Ten Kanpai.',
      meaning: 'आपके प्रचंड तेज को केवल आप ही संभाल सकते हैं। आपकी एक हुंकार मात्र से तीनों लोक थर-थर कांपने लगते हैं।',
      imageUrl: '/images/lanka_dahan_hanuman.jpg',
      audioTime: 200
    },
    {
      id: 25,
      type: 'chaupai',
      numberStr: 'चौपाई २४',
      hindiText: 'भूत पिसाच निकट नहिं आवै।\nमहाबीर जब नाम सुनावै॥',
      transliteration: 'Bhoot Pisach Nikat Nahin Aavai;\nMahabir Jab Nam Sunavai.',
      meaning: 'जहाँ महावीर श्री हनुमान जी का नाम उच्चारण किया जाता है, वहाँ भूत-प्रेत और नकारात्मक शक्तियाँ निकट भी नहीं आ सकतीं।',
      imageUrl: '/images/panchmukhi_hanuman.jpg',
      audioTime: 208
    },
    {
      id: 26,
      type: 'chaupai',
      numberStr: 'चौपाई २५',
      hindiText: 'नासै रोग हरै सब पीरा।\nजपत निरंतर हनुमत बीरा॥',
      transliteration: 'Nase Rog Harai Sab Peera;\nJapat Nirantar Hanumat Beera.',
      meaning: 'वीर हनुमान जी के नाम का निरंतर जप करने से समस्त रोग नष्ट हो जाते हैं और सभी कष्ट व पीड़ा दूर हो जाती है।',
      imageUrl: '/images/sankat_mochan_hanuman.jpg',
      audioTime: 216
    },
    {
      id: 27,
      type: 'chaupai',
      numberStr: 'चौपाई २६',
      hindiText: 'संकट तें हनुमान छुड़ावै।\nमन क्रम बचन ध्यान जो लावै॥',
      transliteration: 'Sankat Ten Hanuman Chhudavai;\nMan Kram Bachan Dhyan Jo Lavai.',
      meaning: 'जो भक्त मन, कर्म और वचन से हनुमान जी का ध्यान लगाता है, हनुमान जी उसे हर प्रकार के संकट से मुक्ति दिलाते हैं।',
      imageUrl: '/images/dhyan_hanuman.jpg',
      audioTime: 224
    },
    {
      id: 28,
      type: 'chaupai',
      numberStr: 'चौपाई २७',
      hindiText: 'सब पर राम तपस्वी राजा।\nतिन के काज सकल तुम साजा॥',
      transliteration: 'Sab Par Ram Tapaswi Raja;\nTin Ke Kaj Sakal Tum Saja.',
      meaning: 'तपस्वी राजा श्री राम सब पर सर्वश्रेष्ठ हैं, और उनके भी सभी कठिन कार्यों को आपने ही पूर्ण सिद्ध किया।',
      imageUrl: '/images/bhakta_hanuman.jpg',
      audioTime: 232
    },
    {
      id: 29,
      type: 'chaupai',
      numberStr: 'चौपाई २८',
      hindiText: 'और मनोरथ जो कोई लावै।\nसोइ अमित जीवन फल पावै॥',
      transliteration: 'Aur Manorath Jo Koi Lavai;\nSoi Amit Jeevan Phal Pavai.',
      meaning: 'इसके अतिरिक्त जो भी भक्त अपनी इच्छा लेकर आपके द्वार पर आता है, वह जीवन का असीम और अनंत फल प्राप्त करता है।',
      imageUrl: '/images/prasanna_anjaneya.jpg',
      audioTime: 240
    },
    {
      id: 30,
      type: 'chaupai',
      numberStr: 'चौपाई २९',
      hindiText: 'चारों जुग परताप तुम्हारा।\nहै परसिद्ध जगत उजियारा॥',
      transliteration: 'Charon Jug Partap Tumhara;\nHai Parsiddh Jagat Ujiyara.',
      meaning: 'सतयुग, त्रेता, द्वापर और कलयुग - चारों युगों में आपका प्रताप फैला हुआ है, आपका यश पूरे संसार में प्रकाशमान है।',
      imageUrl: '/images/kapi_dhwaja_hanuman.jpg',
      audioTime: 248
    },
    {
      id: 31,
      type: 'chaupai',
      numberStr: 'चौपाई ३०',
      hindiText: 'साधु संत के तुम रखवारे।\nअसुर निकंदन राम दुलारे॥',
      transliteration: 'Sadhu Sant Ke Tum Rakhvare;\nAsur Nikandan Ram Dulare.',
      meaning: 'आप साधु और संतों के रक्षक हैं, दुष्ट राक्षसों का संहार करने वाले और श्री राम जी के अत्यंत दुलारे हैं।',
      imageUrl: '/images/veer_maruti_hanuman.jpg',
      audioTime: 256
    },
    {
      id: 32,
      type: 'chaupai',
      numberStr: 'चौपाई ३१',
      hindiText: 'अष्ट सिध्दि नौ निधि के दाता।\nअस बर दीन्ह जानकी माता॥',
      transliteration: 'Ashta Siddhi Nau Nidhi Ke Data;\nAs Bar Deenh Janaki Mata.',
      meaning: 'आपको माता सीता ने यह वरदान दिया है कि आप अपने भक्तों को आठों सिद्धियाँ और नौ निधियाँ प्रदान करने में समर्थ हैं।',
      imageUrl: '/images/prasanna_anjaneya.jpg',
      audioTime: 264
    },
    {
      id: 33,
      type: 'chaupai',
      numberStr: 'चौपाई ३२',
      hindiText: 'राम रसायन तुम्हरे पासा।\nसदा रहो रघुपति के दासा॥',
      transliteration: 'Ram Rasayan Tumhare Pasa;\nSada Raho Raghupati Ke Dasa.',
      meaning: 'आपके पास श्री राम की भक्ति रूपी दिव्य औषधि (रसायन) है। आप सदा श्री रघुनाथ जी के अनन्य सेवक और दास बने रहें।',
      imageUrl: '/images/bhakta_hanuman.jpg',
      audioTime: 272
    },
    {
      id: 34,
      type: 'chaupai',
      numberStr: 'चौपाई ३३',
      hindiText: 'तुम्हरे भजन राम को पावै।\nजनम जनम के दुख बिसरावै॥',
      transliteration: 'Tumhare Bhajan Ram Ko Pavai;\nJanam Janam Ke Dukh Bisravai.',
      meaning: 'आपका भजन-स्मरण करने से श्री राम जी की प्राप्ति होती है और जन्म-जन्मांतर के दुःख एवं कष्ट दूर हो जाते हैं।',
      imageUrl: '/images/dhyan_hanuman.jpg',
      audioTime: 280
    },
    {
      id: 35,
      type: 'chaupai',
      numberStr: 'चौपाई ३४',
      hindiText: 'अंत काल रघुबर पुर जाई।\nजहां जन्म हरि-भक्त कहाई॥',
      transliteration: 'Ant Kal Raghubar Pur Jai;\nJahan Janm Hari-Bhakta Kahai.',
      meaning: 'अंत समय में भक्त श्री राम के परम धाम (वैकुंठ) में जाता है, और यदि पृथ्वी पर पुनः जन्म ले तो हरि-भक्त कहलाता है।',
      imageUrl: '/images/prasanna_anjaneya.jpg',
      audioTime: 288
    },
    {
      id: 36,
      type: 'chaupai',
      numberStr: 'चौपाई ३५',
      hindiText: 'और देवता चित्त न धरई।\nहनुमत सेइ सर्ब सुख करई॥',
      transliteration: 'Aur Devata Chitta Na Dharai;\nHanumat Sei Sarb Sukh Karai.',
      meaning: 'यदि कोई अन्य देवी-देवताओं का ध्यान न भी रखे, केवल श्री हनुमान जी की सेवा-भक्ति करे, तो भी उसे संपूर्ण सुख प्राप्त होते हैं।',
      imageUrl: '/images/hero_hanuman.jpg',
      audioTime: 296
    },
    {
      id: 37,
      type: 'chaupai',
      numberStr: 'चौपाई ३६',
      hindiText: 'संकट कटै मिटै सब पीरा।\nजो सुमिरै हनुमत बलबीरा॥',
      transliteration: 'Sankat Kate Mitai Sab Peera;\nJo Sumirai Hanumat Balbeera.',
      meaning: 'जो भी महाबली हनुमान जी का स्मरण करता है, उसके सारे संकट कट जाते हैं और समस्त पीड़ाएँ मिट जाती हैं।',
      imageUrl: '/images/sankat_mochan_hanuman.jpg',
      audioTime: 304
    },
    {
      id: 38,
      type: 'chaupai',
      numberStr: 'चौपाई ३७',
      hindiText: 'जै जै जै हनुमान गुसाईं।\nकृपा करहु गुरु देव की नाईं॥',
      transliteration: 'Jai Jai Jai Hanuman Gosain;\nKripa Karahu Guru Dev Ki Nain.',
      meaning: 'हे स्वामी हनुमान जी! आपकी जय हो, जय हो, जय हो! आप मुझ पर गुरुदेव के समान कृपा दृष्टि बनाए रखें।',
      imageUrl: '/images/prasanna_anjaneya.jpg',
      audioTime: 312
    },
    {
      id: 39,
      type: 'chaupai',
      numberStr: 'चौपाई ३८',
      hindiText: 'जो सत बार पाठ कर कोई।\nछूटहि बंदि महा सुख होई॥',
      transliteration: 'Jo Sat Bar Path Kar Koi;\nChhootahi Bandi Maha Sukh Hoi.',
      meaning: 'जो व्यक्ति इस हनुमान चालीसा का सौ (100) बार पाठ करता है, वह सभी बंधनों और कष्टों से मुक्त होकर परम सुख पाता है।',
      imageUrl: '/images/dhyan_hanuman.jpg',
      audioTime: 320
    },
    {
      id: 40,
      type: 'chaupai',
      numberStr: 'चौपाई ३९',
      hindiText: 'जो यह पढ़ै हनुमान चालीसा।\nहोय सिध्दि साखी गौरीसा॥',
      transliteration: 'Jo Yah Padhai Hanuman Chalisa;\nHoy Siddhi Sakhi Gaurisa.',
      meaning: 'जो भी इस हनुमान चालीसा का पाठ करता है, उसे निश्चित ही सिद्धि प्राप्त होती है, इसके साक्षी स्वयं भगवान शिव (गौरीश) हैं।',
      imageUrl: '/images/ekadashmukhi_hanuman.jpg',
      audioTime: 328
    },
    {
      id: 41,
      type: 'chaupai',
      numberStr: 'चौपाई ४०',
      hindiText: 'तुलसीदास सदा हरि चेरा।\nकीजै नाथ हृदय मंह डेरा॥',
      transliteration: 'Tulsidas Sada Hari Chera;\nKeejai Nath Hriday Mahn Dera.',
      meaning: 'तुलसीदास जी कहते हैं कि वे सर्वदा श्री हरि के दास हैं। हे नाथ हनुमान जी! आप सदा मेरे हृदय मंदिर में निवास करें।',
      imageUrl: '/images/bhakta_hanuman.jpg',
      audioTime: 336
    },
    {
      id: 42,
      type: 'doha',
      numberStr: 'अंतिम दोहा',
      hindiText: 'पवनतनय संकट हरन मंगल मूरति रूप।\nराम लखन सीता सहित हृदय बसहु सुर भूप॥',
      transliteration: 'Pavan Tanay Sankat Haran, Mangal Murati Roop;\nRam Lakhan Sita Sahit, Hriday Basahu Sur Bhoop.',
      meaning: 'हे पवनसुत! आप संकटों को हरने वाले और मंगल मूर्ति रूप हैं। हे देवों के देव! आप श्री राम, लक्ष्मण और माता सीता सहित सदैव मेरे हृदय में निवास करें।',
      imageUrl: '/images/hero_hanuman.jpg',
      audioTime: 344
    }
  ]
};

// 2. श्री बजरंग बाण (Complete 17 Verses)
export const BAJRANG_BAAN: ScriptureItem = {
  id: 'bajrang_baan',
  title: 'श्री बजरंग बाण',
  subtitle: 'अमोघ एवं सर्व संकट निवारक संपूर्ण बाण पाठ',
  description: 'भूत-प्रेत बाधा, शत्रु संहार, असाध्य संकटों व तंत्र-दोषों से तत्काल मुक्ति हेतु परम प्रभावशाली पाठ।',
  verses: [
    {
      id: 0,
      type: 'doha',
      numberStr: 'आरंभिक दोहा',
      hindiText: 'निश्चय प्रेम प्रतीति ते, बिनय करैं सनमान।\nतेहि के कारज सकल शुभ, सिद्ध करैं हनुमान॥',
      transliteration: 'Nishchay Prem Prateeti Te, Binay Karain Sanman;\nTehi Ke Karaj Sakal Shubh, Siddha Karain Hanuman.',
      meaning: 'जो मनुष्य पूर्ण विश्वास, अगाध प्रेम और आदर-सम्मान के साथ हनुमान जी से प्रार्थना करता है, हनुमान जी उसके सभी शुभ कार्यों को निश्चित ही सिद्ध करते हैं।',
      imageUrl: '/images/bhakta_hanuman.jpg',
      audioTime: 0
    },
    {
      id: 1,
      type: 'chaupai',
      numberStr: 'चौपाई १-२',
      hindiText: 'जय हनुमंत संत हितकारी। सुन लीजै प्रभु अरज हमारी॥\nजन के काज बिलंब न कीजै। आतुर धाइ महा सुख दीजै॥',
      transliteration: 'Jai Hanumant Sant Hitkari; Sun Leejai Prabhu Araj Hamari;\nJan Ke Kaj Bilamb Na Keejai; Aatur Dhai Maha Sukh Deejai.',
      meaning: 'हे संतों का कल्याण करने वाले हनुमान जी! आपकी जय हो। हे प्रभु, मेरी विनती स्वीकार करें। अपने इस सेवक के कार्य में तनिक भी विलंब न करें और शीघ्र दौड़े आकर परम सुख प्रदान करें।',
      imageUrl: '/images/hero_hanuman.jpg',
      audioTime: 12
    },
    {
      id: 2,
      type: 'chaupai',
      numberStr: 'चौपाई ३-४',
      hindiText: 'जैसे कूद सिंधु महिपारा। सुरसा बदन पैठि बिस्तारा॥\nआगे जाय लंकिनी रोका। मारेहु लात गई सुर लोका॥',
      transliteration: 'Jaise Kood Sindhu Mahipara; Sursa Badan Paithi Bistara;\nAage Jay Lankini Roka; Marehu Lat Gai Sur Loka.',
      meaning: 'जिस प्रकार आपने समुद्र लांघते समय विशाल रूप धरकर सुरसा के मुख में प्रवेश किया और चतुराई से पार निकले, तथा लंका के द्वार पर रोकने वाली लंकिनी को एक ही प्रहार से परास्त कर दिया।',
      imageUrl: '/images/sankat_mochan_hanuman.jpg',
      audioTime: 24
    },
    {
      id: 3,
      type: 'chaupai',
      numberStr: 'चौपाई ५-६',
      hindiText: 'जाय बिभीषन को सुख दीन्हा। सीता निरखि परम पद लीन्हा॥\nबाग उजारि सिंधु महं बोरा। अति आतुर जमकातर तोरा॥',
      transliteration: 'Jay Bibheeshan Ko Sukh Deenha; Sita Nirakhi Param Pad Leenha;\nBag Ujari Sindhu Mahn Bora; Ati Aatur Jamkatar Tora.',
      meaning: 'आपने विभीषण को मिलकर सुख दिया, माता सीता के दर्शन कर परम पद पाया, अशोक वाटिका को उजाड़कर शत्रुओं के अस्त्र-शस्त्रों को खंडित कर दिया।',
      imageUrl: '/images/lanka_dahan_hanuman.jpg',
      audioTime: 36
    },
    {
      id: 4,
      type: 'chaupai',
      numberStr: 'चौपाई ७-८',
      hindiText: 'अक्षय कुमार मारि संहारा। लूम लपेटि लंक को जारा॥\nलाह समान लंक जरि गई। जय जय धुनि सुरपुर महं भई॥',
      transliteration: 'Akshay Kumar Mari Samhara; Loom Lapeti Lanka Ko Jara;\nLah Saman Lanka Jari Gai; Jai Jai Dhuni Surpur Mahn Bhai.',
      meaning: 'आपने रावण के पुत्र अक्षय कुमार का वध किया और अपनी पूंछ से सोने की लंका को लाख के समान जला दिया, जिससे देवलोक में आपकी जय-जयकार गूंज उठी।',
      imageUrl: '/images/lanka_dahan_hanuman.jpg',
      audioTime: 48
    },
    {
      id: 5,
      type: 'chaupai',
      numberStr: 'चौपाई ९-१०',
      hindiText: 'अब बिलंब केहि कारन स्वामी। कृपा करहु उर अंतरयामी॥\nजय जय लखन प्रान के दाता। आतुर होइ दुख हरहु निपाता॥',
      transliteration: 'Ab Bilamb Kehi Karan Swami; Kripa Karahu Ur Antaryami;\nJai Jai Lakhan Pran Ke Data; Aatur Hoi Dukh Harahu Nipata.',
      meaning: 'हे घट-घट की जानने वाले अंतर्यामी स्वामी! अब मेरे संकट निवारण में किस कारण विलंब हो रहा है? हे लक्ष्मण जी के प्राणदाता! शीघ्र आकर मेरे समस्त कष्टों का नाश करें।',
      imageUrl: '/images/sankat_mochan_hanuman.jpg',
      audioTime: 60
    },
    {
      id: 6,
      type: 'chaupai',
      numberStr: 'चौपाई ११-१२',
      hindiText: 'जै गिरिधर जै जै सुख सागर। सुर समूह समरथ भटनागर॥\nॐ हनु हनु हनु हनुमंत हठीले। बैरिहि मारु बज्र की कीले॥',
      transliteration: 'Jai Giridhar Jai Jai Sukh Sagar; Sur Samooh Samrath Bhatnagar;\nOm Hanu Hanu Hanu Hanumant Hatheele; Bairihi Maru Bajra Ki Keele.',
      meaning: 'हे पर्वत को उठाने वाले, सुख के सागर, देवताओं के रक्षक समर्थ वीर! हे हठीले हनुमान! अपने वज्र रूपी प्रहार से मेरे शत्रुओं व संकटों का भेदन करें।',
      imageUrl: '/images/panchmukhi_hanuman.jpg',
      audioTime: 72
    },
    {
      id: 7,
      type: 'chaupai',
      numberStr: 'चौपाई १३-१४',
      hindiText: 'गदा बज्र लै बैरिहिं मारो। महाराज प्रभु दास उबारो॥\nओंकार हुंकार महाप्रभु धावो। बज्र गदा हनुमंत गदावो॥',
      transliteration: 'Gada Bajra Lai Bairihin Maro; Maharaj Prabhu Das Ubaro;\nOmkar Hunkar Mahaprabhu Dhavo; Bajra Gada Hanumant Gadavol.',
      meaning: 'अपनी वज्र गदा से शत्रुओं और व्याधियों का संहार कर अपने इस सेवक की रक्षा करें। ओंकार की प्रचंड हुंकार के साथ हे महाप्रभु दौड़कर पधारें।',
      imageUrl: '/images/veer_maruti_hanuman.jpg',
      audioTime: 84
    },
    {
      id: 8,
      type: 'chaupai',
      numberStr: 'चौपाई १५-१६',
      hindiText: 'ॐ ह्रीं ह्रीं ह्रीं हनुमंत कपीसा। ॐ हुं हुं हुं हनु अरि उर सीसा॥\nसत्य होहु हरि सपथ पायके। राम दूत धरु मारु धाय के॥',
      transliteration: 'Om Hreem Hreem Hreem Hanumant Kapeesa; Om Hum Hum Hum Hanu Ari Ur Seesa;\nSatya Hohu Hari Sapath Payke; Ram Doot Dharu Maru Dhay Ke.',
      meaning: 'तांत्रिक बीजाक्षरों से युक्त हे कपीश हनुमान जी! श्री राम की सौगंध को स्मरण कर सत्य सिद्ध हों और रामदूत बनकर दुष्ट शक्तियों का दमन करें।',
      imageUrl: '/images/ekadashmukhi_hanuman.jpg',
      audioTime: 96
    },
    {
      id: 9,
      type: 'chaupai',
      numberStr: 'चौपाई १७-१८',
      hindiText: 'जय जय जय हनुमंत अगाधा। दुख पावत जन केहि अपराधा॥\nपूजा जप तप नेम अचारा। नहिं जानत कछु दास तुम्हारा॥',
      transliteration: 'Jai Jai Jai Hanumant Agadha; Dukh Pavat Jan Kehi Apradha;\nPooja Jap Tap Nem Achara; Nahin Janat Kachhu Das Tumhara.',
      meaning: 'हे अगाध महिमा वाले हनुमान जी! आपकी सदा जय हो। आपका यह सेवक किस अपराध के कारण दुःख पा रहा है? मैं कोई कठोर पूजा, जप, तप या नियम-आचार नहीं जानता, केवल आपकी शरण में हूँ।',
      imageUrl: '/images/bhakta_hanuman.jpg',
      audioTime: 108
    },
    {
      id: 10,
      type: 'chaupai',
      numberStr: 'चौपाई १९-२०',
      hindiText: 'बन उपबन मग गिरि गृह माहीं। तुम्हरे बल हम डरपत नाहीं॥\nजनकसुता हरि दास कहावो। ताकी सपथ बिलंब न लावो॥',
      transliteration: 'Ban Upban Mag Giri Griha Maahin; Tumhre Bal Ham Darpat Naahin;\nJanaksuta Hari Das Kahavo; Taki Sapath Bilamb Na Lavo.',
      meaning: 'वन, उपवन, मार्ग, पर्वत या घर - आपके असीम बल के सहारे हमें किसी का भय नहीं है। आप माता सीता और श्री राम के अनन्य दास कहलाते हैं, उनकी सौगंध से अब देर न करें।',
      imageUrl: '/images/kapi_dhwaja_hanuman.jpg',
      audioTime: 120
    },
    {
      id: 11,
      type: 'chaupai',
      numberStr: 'चौपाई २१-२२',
      hindiText: 'जय जय जय धुनि होत अकासा। सुमिरत होत दुसह दुख नासा॥\nचरन पकरि कर जोरि मनावौं। यहि औसर केहि गोहरावौं॥',
      transliteration: 'Jai Jai Jai Dhuni Hot Akasa; Sumirat Hot Dusah Dukh Nasa;\nCharan Pakari Kar Jori Manavaun; Yahi Aosar Kehi Gohravaun.',
      meaning: 'आकाश में आपकी जय-जयकार की ध्वनि गूंज रही है। आपका स्मरण करते ही असहनीय दुःख भी नष्ट हो जाते हैं। मैं आपके चरण पकड़कर हाथ जोड़कर विनती करता हूँ।',
      imageUrl: '/images/prasanna_anjaneya.jpg',
      audioTime: 132
    },
    {
      id: 12,
      type: 'chaupai',
      numberStr: 'चौपाई २३-२४',
      hindiText: 'उठु उठु चलु तोहि राम दोहाई। पायँ परौं कर जोरि मनाई॥\nॐ चं चं चं चं चपल चलंता। ॐ हनु हनु हनु हनु हनुमंता॥',
      transliteration: 'Uthu Uthu Chalu Tohi Ram Dohai; Payan Paraun Kar Jori Manai;\nOm Cham Cham Cham Cham Chapal Chalanta; Om Hanu Hanu Hanu Hanu Hanumanta.',
      meaning: 'हे प्रभु! आपको श्री राम की दुहाई है, शीघ्र उठकर पधारिए। मैं आपके चरणों में नमन करता हूँ। चपलता से वेगपूर्वक आकर संकटों का शमन करें।',
      imageUrl: '/images/panchmukhi_hanuman.jpg',
      audioTime: 144
    },
    {
      id: 13,
      type: 'chaupai',
      numberStr: 'चौपाई २५-२६',
      hindiText: 'ॐ हं हं हांक देत कपि चंचल। ॐ सं सं सहमि पराने खल दल॥\nअपने जन को तुरत उबारो। सुमिरत होय आनंद अपारो॥',
      transliteration: 'Om Ham Ham Hank Det Kapi Chanchal; Om Sam Sam Sahami Parane Khal Dal;\nApne Jan Ko Turat Ubaro; Sumirat Hoy Anand Aparo.',
      meaning: 'आपकी प्रचंड हुंकार सुनते ही दुष्टों के दल भयभीत होकर भाग जाते हैं। अपने भक्त का तुरंत उद्धार करें, आपके स्मरण मात्र से अपार आनंद मिलता है।',
      imageUrl: '/images/lanka_dahan_hanuman.jpg',
      audioTime: 156
    },
    {
      id: 14,
      type: 'chaupai',
      numberStr: 'चौपाई २७-२८',
      hindiText: 'यह बजरंग बाण जेहि मारै। ताहि कहो फिर कौन उबारै॥\nपाठ करै बजरंग बाण की। हनुमत रक्षा करैं प्रान की॥',
      transliteration: 'Yah Bajrang Baan Jehi Marai; Tahi Kaho Phir Kaun Ubarai;\nPath Karai Bajrang Baan Ki; Hanumat Raksha Karain Pran Ki.',
      meaning: 'जिस पर यह बजरंग बाण चलाया जाए, उसे संसार में कोई नहीं बचा सकता। जो भी इस बजरंग बाण का पाठ करता है, हनुमान जी स्वयं उसके प्राणों की रक्षा करते हैं।',
      imageUrl: '/images/veer_maruti_hanuman.jpg',
      audioTime: 168
    },
    {
      id: 15,
      type: 'chaupai',
      numberStr: 'चौपाई २९-३०',
      hindiText: 'यह बजरंग बाण जो जापै। ताते भूत प्रेत सब कांपै॥\nधूप देय जो जपै हमेशा। ताके तन नहिं रहै कलेशा॥',
      transliteration: 'Yah Bajrang Baan Jo Japai; Tate Bhoot Pret Sab Kanpai;\nDhoop Dey Jo Japai Hamesha; Take Tan Nahin Rahai Kalesha.',
      meaning: 'जो भी इस बजरंग बाण का नित्य जप करता है, उससे भूत-प्रेत और नकारात्मक शक्तियां थर-थर कांपती हैं। जो धूप-दीप देकर इसका पाठ करता है, उसके जीवन में कोई क्लेश नहीं रहता।',
      imageUrl: '/images/panchmukhi_hanuman.jpg',
      audioTime: 180
    },
    {
      id: 16,
      type: 'doha',
      numberStr: 'अंतिम दोहा',
      hindiText: 'उर प्रतीति दृढ़, सरन ह्वै, पाठ करै धरि ध्यान।\nबाधा सब बैरी हरैं, सब काम सफल करैं हनुमान॥',
      transliteration: 'Ur Prateeti Dridh, Saran Hwai, Path Karai Dhari Dhyan;\nBadha Sab Bairi Harain, Sab Kam Saphal Karain Hanuman.',
      meaning: 'हृदय में दृढ़ विश्वास रखकर, हनुमान जी की शरण में जाकर जो ध्यानपूर्वक इस बाण का पाठ करता है, हनुमान जी उसके समस्त शत्रुओं और बाधाओं का हरण कर सभी कार्यों को सफल करते हैं।',
      imageUrl: '/images/prasanna_anjaneya.jpg',
      audioTime: 192
    }
  ]
};

// 3. श्री संकटमोचन हनुमानाष्टक (Complete 8 Chhandas + Doha)
export const SANKAT_MOCHAN_ASHTAK: ScriptureItem = {
  id: 'sankat_mochan',
  title: 'श्री संकटमोचन हनुमानाष्टक',
  subtitle: 'गोस्वामी तुलसीदास कृत संकट निवारक ८ पावन छंद',
  description: 'जीवन में आए किसी भी असाध्य संकट, रोग, ग्रह-दोष व विपत्ति के तुरंत निवारण हेतु परम सिद्ध अष्टक।',
  verses: [
    {
      id: 0,
      type: 'chhand',
      numberStr: 'छंद १',
      hindiText: 'बाल समय रबि भक्षि लियो तब, तीनहुं लोक भयो अंधियारों।\nताहि सों त्रास भयो जग को, यह संकट काहु सों जात न टारो॥\nदेवन आनि करी बिनती तब, छांड़ि दियो रबि कष्ट निवारो।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो॥',
      transliteration: 'Bal Samay Rabi Bhakshi Liyo Tab, Teenahun Lok Bhayo Andhiyaro;\nTahi Son Tras Bhayo Jag Ko, Yah Sankat Kahu Son Jat Na Taro;\nDevan Aani Kari Binati Tab, Chhandi Diyo Rabi Kasht Nivaro;\nKo Nahin Janat Hai Jag Mein Kapi, Sankatmochan Naam Tiharo.',
      meaning: 'बाल्यावस्था में आपने सूर्यदेव को मीठा फल समझकर निगल लिया, जिससे तीनों लोकों में अंधकार छा गया और कोई भी इस संकट को टाल न सका। देवताओं की प्रार्थना पर आपने सूर्य को मुक्त कर जगत का कष्ट दूर किया। हे कपीश! इस संसार में कौन नहीं जानता कि आपका नाम संकटमोचन है!',
      imageUrl: '/images/bal_maruti_hanuman.jpg',
      audioTime: 0
    },
    {
      id: 1,
      type: 'chhand',
      numberStr: 'छंद २',
      hindiText: 'बालि की त्रास बसैं गिरि पर, पंथ निहारैं सुकंठ बिचारो।\nसापि दियो मुनिनाथ तबै, लखि काहुं न जात तहां पग धारो॥\nसेवक जानि सुकंठ भले, प्रभु आय मिलाय महाबल भारो।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो॥',
      transliteration: 'Bali Ki Tras Basain Giri Par, Panth Niharain Sukanth Bicharo;\nSapi Diyo Muninath Tabai, Lakhi Kahun Na Jat Tahan Pag Dharo;\nSevak Jani Sukanth Bhale, Prabhu Aay Milay Mahabal Bharo;\nKo Nahin Janat Hai Jag Mein Kapi, Sankatmochan Naam Tiharo.',
      meaning: 'बाली के भय से जब सुग्रीव ऋष्यमूक पर्वत पर छिपे थे जहाँ मतंग मुनि के शापवश कोई नहीं जा सकता था, तब आपने सुग्रीव का सेवक भाव जानकर महाबली प्रभु श्री राम से उनकी मित्रता कराई और उन्हें भयमुक्त किया।',
      imageUrl: '/images/surya_shishya_hanuman.jpg',
      audioTime: 18
    },
    {
      id: 2,
      type: 'chhand',
      numberStr: 'छंद ३',
      hindiText: 'अंगद के संग लेन गए सिय, खोज कपीस यह बैन उचारो।\nजीवत ना बचिहौ हम सो जु, बिना सुधि लाये इहां पग धारो॥\nहेरि थके तट सिंधु सबै, तब लाय सिया सुधि प्रान उबारो।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो॥',
      transliteration: 'Angad Ke Sang Len Gaye Siya, Khoj Kapees Yah Bain Ucharo;\nJeevat Na Bachihau Ham So Ju, Bina Sudhi Laye Ihan Pag Dharo;\nHeri Thake Tat Sindhu Sabai, Tab Lay Siya Sudhi Pran Ubaro;\nKo Nahin Janat Hai Jag Mein Kapi, Sankatmochan Naam Tiharo.',
      meaning: 'माता सीता की खोज में गए वानर दल जब समुद्र तट पर निराश हो गए और सुग्रीव के दंड के भय से अपने प्राण त्यागने को तत्पर थे, तब आपने समुद्र लांघकर माता जानकी का पता लगाया और समस्त वानरों के प्राणों की रक्षा की।',
      imageUrl: '/images/bhakta_hanuman.jpg',
      audioTime: 36
    },
    {
      id: 3,
      type: 'chhand',
      numberStr: 'छंद ४',
      hindiText: 'रावण त्रास दई सिय को, सब राक्षसि सो कहि शोक निवारो।\nताहि समय हनुमान महाप्रभु, जाय महा रजनीचर मारो॥\nचाहत सीय असोक सों आगि सु, दै प्रभु मुद्रिका शोक निवारो।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो॥',
      transliteration: 'Ravan Tras Dai Siya Ko, Sab Rakshasi So Kahi Shok Nivaro;\nTahi Samay Hanuman Mahaprabhu, Jay Maha Rajneechar Maro;\nChahat Seeya Asok Son Aagi Su, Dai Prabhu Mudrika Shok Nivaro;\nKo Nahin Janat Hai Jag Mein Kapi, Sankatmochan Naam Tiharo.',
      meaning: 'जब रावण ने माता सीता को भयभीत किया और माता शोक में अशोक वृक्ष से अग्नि मांग रही थीं, तब आपने प्रभु की मुद्रिका डालकर उनका शोक दूर किया और राक्षसों का संहार किया।',
      imageUrl: '/images/lanka_dahan_hanuman.jpg',
      audioTime: 54
    },
    {
      id: 4,
      type: 'chhand',
      numberStr: 'छंद ५',
      hindiText: 'बान लग्यो उर लछिमन के तब, प्रान तजे सुत रावन मारो।\nलै गृह बैद्य सुषेन समेत, तबै गिरि द्रोण सुबीर उपारो॥\nआनि सजीवन हाथ दई तब, लछिमन के तुम प्रान उबारो।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो॥',
      transliteration: 'Baan Lagyo Ur Lachhiman Ke Tab, Pran Taje Sut Ravan Maro;\nLai Griha Baidya Sushen Samet, Tabai Giri Dron Subeer Uparo;\nAani Sjeevan Hath Dai Tab, Lachhiman Ke Tum Pran Ubaro;\nKo Nahin Janat Hai Jag Mein Kapi, Sankatmochan Naam Tiharo.',
      meaning: 'जब मेघनाद के शक्ति बाण से लक्ष्मण जी मूर्छित हो गए, तब आप लंका से वैद्य सुषेण को घर सहित ले आए और द्रोणाचल पर्वत से संजीवनी लाकर लक्ष्मण जी को जीवनदान दिया।',
      imageUrl: '/images/sankat_mochan_hanuman.jpg',
      audioTime: 72
    },
    {
      id: 5,
      type: 'chhand',
      numberStr: 'छंद ६',
      hindiText: 'रावन जुद्ध अजान कियो तब, नाग कि फांस सबै सिर डारो।\nश्रीरघुनाथ समेत सबै दल, मोह भयो यह संकट भारो॥\nआनि खगेस तबै हनुमान जु, बंधन काटि सुत्रास निवारो।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो॥',
      transliteration: 'Ravan Juddha Ajan Kiyo Tab, Nag Ki Phans Sabai Sir Daro;\nShriraghunath Samet Sabai Dal, Moh Bhayo Yah Sankat Bharo;\nAani Khages Tabai Hanuman Ju, Bandhan Kati Sutras Nivaro;\nKo Nahin Janat Hai Jag Mein Kapi, Sankatmochan Naam Tiharo.',
      meaning: 'जब युद्ध में मेघनाद ने नागपाश डालकर श्री राम, लक्ष्मण और समस्त वानर सेना को बांध दिया, तब आपने गरुड़ जी (खगेश) को बुलाकर नागपाश के बंधन को कटवाया और महासंकट से मुक्ति दिलाई।',
      imageUrl: '/images/panchmukhi_hanuman.jpg',
      audioTime: 90
    },
    {
      id: 6,
      type: 'chhand',
      numberStr: 'छंद ७',
      hindiText: 'बंधु समेत जबै अहिरावन, लै रघुनाथ पतार सिधारो।\nदेबिहिं पूजि भली बिधि सों बलि, देउ सबै मिलि मंत्र बिचारो॥\nजाय सहाय भयो तब ही, अहिरावन सैन्य समेत संहारो।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो॥',
      transliteration: 'Bandhu Samet Jabai Ahiravan, Lai Raghunath Patar Sidharo;\nDebihin Pooji Bhali Bidhi Son Bali, Deu Sabai Mili Mantra Bicharo;\nJay Sahay Bhayo Tab Hi, Ahiravan Sainya Samet Samharo;\nKo Nahin Janat Hai Jag Mein Kapi, Sankatmochan Naam Tiharo.',
      meaning: 'जब अहिरावण श्री राम और लक्ष्मण जी का हरण कर पाताल लोक में देवी को बलि देने ले गया, तब आपने पाताल पहुंचकर अहिरावण का सेना सहित वध किया और दोनों भाइयों को सकुशल वापस लाए।',
      imageUrl: '/images/ekadashmukhi_hanuman.jpg',
      audioTime: 108
    },
    {
      id: 7,
      type: 'chhand',
      numberStr: 'छंद ८',
      hindiText: 'काज किए बड़ देवन के तुम, बीर महाप्रभु देखि बिचारो।\nकौन सो संकट मोर गरीब को, जो तुमसों नहिं जात है टारो॥\nबेगि हरो हनुमान महाप्रभु, जो कछु संकट होय हमारो।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो॥',
      transliteration: 'Kaj Kiye Bad Devan Ke Tum, Beer Mahaprabhu Dekhi Bicharo;\nKaun So Sankat Mor Gareeb Ko, Jo Tumson Nahin Jat Hai Taro;\nBegi Haro Hanuman Mahaprabhu, Jo Kachhu Sankat Hoy Hamaro;\nKo Nahin Janat Hai Jag Mein Kapi, Sankatmochan Naam Tiharo.',
      meaning: 'हे वीर महाप्रभु! आपने देवताओं के बड़े-बड़े असाध्य कार्यों को सिद्ध किया है। मुझ दीन-हीन सेवक का ऐसा कौन सा संकट है जो आपसे नहीं टल सकता? हे प्रभु! मेरे समस्त संकटों का शीघ्र हरण करें।',
      imageUrl: '/images/prasanna_anjaneya.jpg',
      audioTime: 126
    },
    {
      id: 8,
      type: 'doha',
      numberStr: 'समापन दोहा',
      hindiText: 'लाल देह लाली लसे, अरु धरि लाल लंगूर।\nबज्र देह दानव दलन, जय जय जय कपि सूर॥',
      transliteration: 'Lal Deh Lali Lase, Aru Dhari Lal Langoor;\nVajra Deh Danav Dalan, Jai Jai Jai Kapi Soor.',
      meaning: 'जिनके लाल रंग के शरीर पर सिंदूर की लालिमा सुशोभित है, जिनकी लाल पूंछ है, जिनका शरीर वज्र के समान दृढ़ और दानवों का दलन करने वाला है, ऐसे शूरवीर हनुमान जी की सर्वदा जय हो!',
      imageUrl: '/images/veer_maruti_hanuman.jpg',
      audioTime: 144
    }
  ]
};

// 4. श्री हनुमान बाहुक (Shree Hanuman Bahuk - Comprehensive Divine Stotra)
export const HANUMAN_BAHUK: ScriptureItem = {
  id: 'hanuman_bahuk',
  title: 'श्री हनुमान बाहुक',
  subtitle: 'गोस्वामी तुलसीदास कृत असाध्य रोग एवं शारीरिक पीड़ा नाशक स्तोत्र',
  description: 'शारीरिक व्याधियों, जोड़ों के दर्द, वात-रोग, असाध्य कष्टों व तांत्रिक बाधाओं से आरोग्य प्रदाता महास्तोत्र।',
  verses: [
    {
      id: 0,
      type: 'pada',
      numberStr: 'छप्पय १ (बाल चरित्र व सूर्यग्रास)',
      hindiText: 'सिंधु तरण, सीय सोच हरण, कपि कटक प्रतारक।\nरक्षक राम समाज, महा-असुरन संहारक॥\nजुग सहस जोजन भानु, लील्यो बाल्य सुख पायो।\nअमित तेज बल धाम, सकल जग वंदन गायो॥\nतुलसीदास बाहु पीरा हरहु, कृपा करि संकट हरो।\nमारुति नंदन केसरी सुत, प्रभु आरति उर ते टरो॥',
      transliteration: 'Sindhu Taran, Seeya Soch Haran, Kapi Katak Pratarka;\nRakshak Ram Samaj, Maha-Asuran Samharka;\nJug Sahas Jojan Bhanu, Leelyo Balya Sukh Payo;\nAmit Tej Bal Dham, Sakal Jag Vandan Gayo;\nTulsidas Bahu Peera Harahu, Kripa Kari Sankat Haro;\nMaruti Nandan Kesari Sut, Prabhu Aarati Ur Te Taro.',
      meaning: 'समुद्र को लांघने वाले, माता जानकी के शोक को हरने वाले, राम दल के रक्षक और बाल्यकाल में सूर्य को निगलने वाले हे महावीर! तुलसीदास जी की असाध्य बाहु पीड़ा और समस्त शारीरिक व्याधियों का तुरंत निवारण करें।',
      imageUrl: '/images/bal_maruti_hanuman.jpg',
      audioTime: 0
    },
    {
      id: 1,
      type: 'pada',
      numberStr: 'घनाक्षरी २ (संजीवनी व बाहु बल)',
      hindiText: 'लषण-मूर्छा-मथन, द्रोण-उद्धरण धीरा।\nअतुलित बल-निधि, महा-रुद्र-रण-धीरा॥\nबाहु-बल विक्रम, सकल-कलि-मल-भंजन।\nदुष्ट-दलन, संत-पालक, जन-मन-रंजन॥\nरोग-दोष-जंजाल सब, हरहु महाबलवान।\nआरोग्य देहु मोहिं कृपा करि, जय जय जय हनुमान॥',
      transliteration: 'Lakhan-Moorchha-Mathan, Dron-Uddharan Dheera;\nAtulit Bal-Nidhi, Maha-Rudra-Ran-Dheera;\nBahu-Bal Vikram, Sakal-Kali-Mal-Bhanjan;\nDusht-Dalan, Sant-Palak, Jan-Man-Ranjan;\nRog-Dosh-Janjal Sab, Harahu Mahabalwan;\nAarogya Dehu Mohin Kripa Kari, Jai Jai Jai Hanuman.',
      meaning: 'लक्ष्मण जी की मूर्छा दूर करने हेतु द्रोणाचल पर्वत को अपनी भुजाओं पर उठाने वाले हे महाबली! अपने भक्तों के सभी शारीरिक रोगों, मांसपेशियों की पीड़ा और हड्डियों के कष्टों को मिटाकर पूर्ण आरोग्य प्रदान करें।',
      imageUrl: '/images/sankat_mochan_hanuman.jpg',
      audioTime: 18
    },
    {
      id: 2,
      type: 'pada',
      numberStr: 'सवैया ३ (महामारी व वात-व्याधि नाशन)',
      hindiText: 'भूत, प्रेत, पिशाच, निशाचर, डाकिनी, शाकिनी भागि परैं।\nसुमिरे हनुमंत महाबलशाली, रोग असाध्य सबै बिथरैं॥\nसंधि-वात, कटि-पीर, उदर-दुख, बाहु-पीर जर सों जरैं।\nतुलसी पर दयालु होइ कपि, सुख-शांति-आरोग्य भरैं॥',
      transliteration: 'Bhoot, Pret, Pishach, Nishachar, Dakini, Shakini Bhagi Parain;\nSumire Hanumant Mahabalshali, Rog Asadhya Sabai Bitharain;\nSandhi-Vat, Kati-Peer, Udar-Dukh, Bahu-Peer Jar Son Jarain;\nTulsi Par Dayalu Hoi Kapi, Sukh-Shanti-Aarogya Bharain.',
      meaning: 'महाबली हनुमान जी के नाम स्मरण मात्र से भूत-प्रेत, डाकिनी व नकारात्मक शक्तियां पलायन कर जाती हैं तथा गठिया (संधिवात), कमर दर्द, उदर रोग और भुजाओं की तीव्र पीड़ा जड़ से नष्ट हो जाती है।',
      imageUrl: '/images/panchmukhi_hanuman.jpg',
      audioTime: 36
    },
    {
      id: 3,
      type: 'pada',
      numberStr: 'छप्पय ४ (पंचमुखी कवच एवं रक्षण)',
      hindiText: 'पंच वदन, दस भुज, त्रिनेत्र, महा-उग्र स्वरूपा।\nशत्रु-मर्दन, ग्रह-दोष-हरण, त्रिभुवन के भूपा॥\nब्रह्मदंड, कुलिश-प्रहार, सकल बाधा विदारक।\nअंग-अंग के कष्ट-रोग, सब संकट तारक॥\nसेवक की विनती सुनहु, पावन पवन-कुमार।\nदीर्घायु आरोग्य देहु, मिटाहु पीरा अपार॥',
      transliteration: 'Panch Vadan, Das Bhuj, Trinetra, Maha-Ugra Swaroopa;\nShatru-Mardan, Grah-Dosh-Haran, Tribhuvan Ke Bhoopa;\nBrahmadand, Kulish-Prahar, Sakal Badha Vidarak;\nAng-Ang Ke Kasht-Rog, Sab Sankat Tarak;\nSevak Ki Vinati Sunahu, Pavan Pavan-Kumar;\nDeerghayu Aarogya Dehu, Mitahu Peera Apaar.',
      meaning: 'पंचमुखी रूप धारण करने वाले हे महाप्रभु! हमारे शरीर के प्रत्येक अंग, नस-नाड़ियों और जोड़ों की असाध्य पीड़ा का शमन कर हमें दीर्घायु और निरोगी काया का आशीर्वाद दें।',
      imageUrl: '/images/ekadashmukhi_hanuman.jpg',
      audioTime: 54
    },
    {
      id: 4,
      type: 'pada',
      numberStr: 'घनाक्षरी ५ (राम नाम रसायन)',
      hindiText: 'राम नाम जप दीप प्रगट करि, हृदय कमल उजियार करै।\nहनुमत कृपा दृष्टि जो पावै, ताके सब संताप टरै॥\nतन-मन की सब व्याधि मिटै, जन जीवन निर्मल होइ परै।\nसकल मनोरथ सिद्ध होहिं, भव-सिंधु सुगमता पार तरै॥',
      transliteration: 'Ram Naam Jap Deep Pragat Kari, Hriday Kamal Ujiyar Karai;\nHanumat Kripa Drishti Jo Pavai, Take Sab Santap Tarai;\nTan-Man Ki Sab Vyadhi Mitai, Jan Jeevan Nirmal Hoi Parai;\nSakal Manorath Siddha Hohin, Bhav-Sindhu Sugamta Paar Tarai.',
      meaning: 'हनुमान जी की कृपा दृष्टि होते ही तन और मन की समस्त व्याधियां मिट जाती हैं, जीवन पवित्र और रोगमुक्त बन जाता है और सभी मनोकामनाएं सिद्ध हो जाती हैं।',
      imageUrl: '/images/dhyan_hanuman.jpg',
      audioTime: 72
    },
    {
      id: 5,
      type: 'pada',
      numberStr: 'समापन पद ६ (आरोग्य फलश्रुति)',
      hindiText: 'जो यह बाहुक पाठ करै नित, श्रद्धा-भक्ति संजोय के।\nतुलसीदास प्रभु हनुमत ताके, अंग-कष्ट सब खोय के॥\nबल, बुद्धि, निरोग शरीर, सुख-संपदा देहिं अपार।\nसदा रहैं रघुपति के प्यारे, पावैं पद भव-पार॥',
      transliteration: 'Jo Yah Bahuk Path Karai Nit, Shraddha-Bhakti Sanjoy Ke;\nTulsidas Prabhu Hanumat Take, Ang-Kasht Sab Khoy Ke;\nBal, Buddhi, Nirog Shareer, Sukh-Sampada Dehin Apaar;\nSada Rahain Raghupati Ke Pyare, Pavain Pad Bhav-Paar.',
      meaning: 'जो भी श्रद्धालु नित्य श्रद्धापूर्वक इस हनुमान बाहुक का पाठ करता है, हनुमान जी उसके शरीर के सभी कष्टों को मिटाकर उसे बल, तीव्र बुद्धि, निरोगी शरीर और सुख-समृद्धि प्रदान करते हैं।',
      imageUrl: '/images/prasanna_anjaneya.jpg',
      audioTime: 90
    }
  ]
};

// 5. श्री हनुमान जी की आरती (Complete 13 Verses)
export const HANUMAN_AARTI: ScriptureItem = {
  id: 'aarti',
  title: 'श्री हनुमान जी की आरती',
  subtitle: 'आरती कीजै हनुमान लला की - संपूर्ण आरती पाठ',
  description: 'प्रातः एवं संध्याकाल में भगवान श्री हनुमान जी की प्रसन्नता एवं कृपा प्राप्ति हेतु पावन आरती।',
  verses: [
    {
      id: 0,
      type: 'doha',
      numberStr: 'आरंभिक टेक',
      hindiText: 'आरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की॥',
      transliteration: 'Aarti Keejai Hanuman Lala Ki;\nDusht Dalan Raghunath Kala Ki.',
      meaning: 'भगवान श्री राम के लाडले श्री हनुमान जी की आरती करें, जो दुष्टों का दलन (नाश) करने वाले और श्री रघुनाथ जी के दिव्य तेज के स्वरूप हैं।',
      imageUrl: '/images/hero_hanuman.jpg',
      audioTime: 0
    },
    {
      id: 1,
      type: 'chaupai',
      numberStr: 'पद १',
      hindiText: 'जाके बल से गिरिवर कांपै।\nरोग दोष जाके निकट न झांपै॥',
      transliteration: 'Jake Bal Se Girivar Kanpai;\nRog Dosh Jake Nikat Na Jhanpai.',
      meaning: 'जिनके अतुलित बाहुबल के आगे विशाल पर्वत भी थर-थर कांपते हैं, और जिनके नाम स्मरण से रोग, दोष और व्याधियां निकट भी नहीं फटकतीं।',
      imageUrl: '/images/sankat_mochan_hanuman.jpg',
      audioTime: 14
    },
    {
      id: 2,
      type: 'chaupai',
      numberStr: 'पद २',
      hindiText: 'अंजनि पुत्र महा बलदाई।\nसंतन के प्रभु सदा सहाई॥',
      transliteration: 'Anjani Putra Maha Baladai;\nSantan Ke Prabhu Sada Sahai.',
      meaning: 'माता अंजनी के तेजस्वी पुत्र महाबली हनुमान जी साधु-संतों और सच्चे भक्तों के सदा सहायक और रक्षक हैं।',
      imageUrl: '/images/bal_maruti_hanuman.jpg',
      audioTime: 28
    },
    {
      id: 3,
      type: 'chaupai',
      numberStr: 'पद ३',
      hindiText: 'दे बीरा रघुनाथ पठाए।\nलंका जारि सीय सुधि लाये॥',
      transliteration: 'De Beera Raghunath Pathaye;\nLanka Jari Seeya Sudhi Laye.',
      meaning: 'प्रभु श्री राम ने जिन्हें बीड़ा देकर माता सीता की खोज में भेजा, उन्होंने लंका को भस्म करके माता जानकी का शुभ समाचार लाकर दिया।',
      imageUrl: '/images/lanka_dahan_hanuman.jpg',
      audioTime: 42
    },
    {
      id: 4,
      type: 'chaupai',
      numberStr: 'पद ४',
      hindiText: 'लंका सो कोट समुद्र सी खाई।\nजात पवनसुत बार न लाई॥',
      transliteration: 'Lanka So Kot Samudra Si Khai;\nJat Pavansut Bar Na Lai.',
      meaning: 'लंका जैसा सुदृढ़ दुर्ग और समुद्र जैसी अथाह खाई को पार करने में पवनपुत्र हनुमान जी को क्षणभर का भी समय नहीं लगा।',
      imageUrl: '/images/sankat_mochan_hanuman.jpg',
      audioTime: 56
    },
    {
      id: 5,
      type: 'chaupai',
      numberStr: 'पद ५',
      hindiText: 'लंका जारि असुर संहारे।\nसियारामजी के काज संवारे॥',
      transliteration: 'Lanka Jari Asur Samhare;\nSiyaramji Ke Kaj Samvare.',
      meaning: 'सोने की लंका को जलाकर राक्षसों का संहार किया और प्रभु श्री सियाराम चंद्र जी के समस्त कठिन कार्यों को संवारा।',
      imageUrl: '/images/lanka_dahan_hanuman.jpg',
      audioTime: 70
    },
    {
      id: 6,
      type: 'chaupai',
      numberStr: 'पद ६',
      hindiText: 'लक्ष्मण मूर्छित पड़े सकारे।\nआनि संजीवन प्रान उबारे॥',
      transliteration: 'Lakshman Moorchhit Pade Sakare;\nAani Sanjeevan Pran Ubare.',
      meaning: 'युद्धभूमि में जब लक्ष्मण जी शक्ति बाण से मूर्छित हो गए, तब आप द्रोणाचल पर्वत से संजीवनी बूटी लाकर उनके प्राणों की रक्षा की।',
      imageUrl: '/images/sankat_mochan_hanuman.jpg',
      audioTime: 84
    },
    {
      id: 7,
      type: 'chaupai',
      numberStr: 'पद ७',
      hindiText: 'पैठि पताल तोरि जम-कारे।\nअहिरावन की भुजा उखारे॥',
      transliteration: 'Paithi Patal Tori Jam-Kare;\nAhiravan Ki Bhuja Ukhare.',
      meaning: 'पाताल लोक में प्रवेश करके यमराज समान कारागार को तोड़ डाला और मायावी अहिरावण की भुजाओं को उखाड़कर उसका वध किया।',
      imageUrl: '/images/ekadashmukhi_hanuman.jpg',
      audioTime: 98
    },
    {
      id: 8,
      type: 'chaupai',
      numberStr: 'पद ८',
      hindiText: 'बाएं भुजा असुर दल मारे।\nदाहिने भुजा संतजन तारे॥',
      transliteration: 'Baen Bhuja Asur Dal Mare;\nDahine Bhuja Santjan Tare.',
      meaning: 'अपनी बाईं भुजा से दुष्ट असुरों के दलों का संहार करते हैं और दाहिनी भुजा उठाकर साधु-संतों व भक्तों को अभयदान देकर तारते हैं।',
      imageUrl: '/images/veer_maruti_hanuman.jpg',
      audioTime: 112
    },
    {
      id: 9,
      type: 'chaupai',
      numberStr: 'पद ९',
      hindiText: 'सुर नर मुनि जन आरती उतारें।\nजय जय जय हनुमान उचारें॥',
      transliteration: 'Sur Nar Muni Jan Aarti Utarain;\nJai Jai Jai Hanuman Ucharain.',
      meaning: 'देवता, मनुष्य और मुनिजन मिलकर आपकी आरती उतारते हैं और तीनों लोकों में जय जय जय हनुमान जी का जयघोष करते हैं।',
      imageUrl: '/images/prasanna_anjaneya.jpg',
      audioTime: 126
    },
    {
      id: 10,
      type: 'chaupai',
      numberStr: 'पद १०',
      hindiText: 'कंचन थार कपूर लौ छाई।\nआरति करत अंजना माई॥',
      transliteration: 'Kanchan Thar Kapoor Lau Chhai;\nAarati Karat Anjana Mai.',
      meaning: 'सुवर्ण की थाली में कपूर की दिव्य ज्योति सजाकर स्वयं माता अंजना अपने लाडले हनुमान जी की आरती उतारती हैं।',
      imageUrl: '/images/bal_maruti_hanuman.jpg',
      audioTime: 140
    },
    {
      id: 11,
      type: 'chaupai',
      numberStr: 'पद ११',
      hindiText: 'जो हनुमान जी की आरति गावै।\nबसि बैकुंठ परम पद पावै॥',
      transliteration: 'Jo Hanuman Ji Ki Aarti Gavai;\nBasi Baikuntha Param Pad Pavai.',
      meaning: 'जो भी श्रद्धालु नित्य श्रद्धापूर्वक श्री हनुमान जी की यह आरती गाता है, वह वैकुंठ धाम में वास कर परम पद को प्राप्त करता है।',
      imageUrl: '/images/bhakta_hanuman.jpg',
      audioTime: 154
    },
    {
      id: 12,
      type: 'doha',
      numberStr: 'समापन दोहा',
      hindiText: 'लंक विध्वंस किए रघुराई।\nतुलसीदास स्वामी कीर्ति गाई॥\nआरती कीजै हनुमान लला की। दुष्ट दलन रघुनाथ कला की॥',
      transliteration: 'Lanka Vidhwans Kiye Raghurai;\nTulsidas Swami Keerti Gai;\nAarti Keejai Hanuman Lala Ki; Dusht Dalan Raghunath Kala Ki.',
      meaning: 'श्री रघुनाथ जी के आशीर्वाद से लंका का विध्वंस करने वाले स्वामी हनुमान जी का यश गोस्वामी तुलसीदास जी गाते हैं। हनुमान लला की आरती दुष्टों का नाश करने वाली है।',
      imageUrl: '/images/hero_hanuman.jpg',
      audioTime: 168
    }
  ]
};

// Map of all 5 Stotras
export const SCRIPTURES: Record<string, ScriptureItem> = {
  chalisa: HANUMAN_CHALISA,
  bajrang_baan: BAJRANG_BAAN,
  sankat_mochan: SANKAT_MOCHAN_ASHTAK,
  hanuman_bahuk: HANUMAN_BAHUK,
  aarti: HANUMAN_AARTI
};

// भगवान हनुमान जी के समस्त ११ एकादश रुद्र स्वरूप (Unique Relevant Images for all 11)
export const HANUMAN_SWAROOPS: HanumanSwaroop[] = [
  {
    id: 'panchmukhi',
    name: 'Panchmukhi Hanuman',
    hindiName: '१. श्री पंचमुखी हनुमान स्वरूप',
    title: 'पाताल विजय एवं सर्वदिशारक्षक स्वरूप',
    description: 'भगवान हनुमान जी का यह दिव्य स्वरूप पांच मुखों (पूर्व में कपि मुख, दक्षिण में नरसिंह मुख, पश्चिम में गरुड़ मुख, उत्तर में वराह मुख और ऊर्ध्व में हयग्रीव मुख) और दस अस्त्र-शस्त्रों से सुशोभित है।',
    purpose: 'पाताल लोक में अहिरावण द्वारा पांच दिशाओं में जलाए गए पांच दीपकों को एक ही क्षण में बुझाने, अहिरावण का वध करने तथा भक्तों को पांचों दिशाओं के तांत्रिक व नकारात्मक दोषों से रक्षा प्रदान करने हेतु।',
    significance: 'समस्त दिशाओं के वास्तु दोष, भूत-प्रेत बाधा, शत्रु षड्यंत्र और असाध्य रोगों का एक साथ शमन।',
    imageUrl: '/images/panchmukhi_hanuman.jpg',
    category: 'rudra',
    mantra: 'ॐ नमो भगवते पञ्चवदनाय पूर्वमुखाय सकलशत्रुसंहारकाय स्वाहा॥'
  },
  {
    id: 'ekadashmukhi',
    name: 'Ekadashmukhi Hanuman',
    hindiName: '२. श्री एकादशमुखी हनुमान स्वरूप',
    title: '११ रुद्र शक्तियों का महासमन्वय',
    description: 'ग्यारह मुखों और बाइस भुजाओं से युक्त यह स्वरूप भगवान शिव के एकादश रुद्रों के संपूर्ण तेज, अमोघ अस्त्रों और सर्वशक्तिमान सामर्थ्य का साक्षात् प्रतीक है।',
    purpose: 'ब्रह्मांड के सबसे भयंकर दुर्दांत राक्षसों (कालकार्तवीर्य आदि) के संहार, महाविनाशक विपत्तियों से सृष्टि की रक्षा और साधकों को एकादश रुद्रों की सामूहिक सिद्धि देने हेतु।',
    significance: 'महाविपत्तियों, अकाल मृत्यु भय और घोर ग्रहों (शनि-राहु-केतु) के संयुक्त दुष्प्रभावों का समूल नाश।',
    imageUrl: '/images/ekadashmukhi_hanuman.jpg',
    category: 'rudra',
    mantra: 'ॐ श्रीं ह्रीं क्लीं ॐ नमो भगवते एकादशमुखाय सकलसिद्धिप्रदाय स्वाहा॥'
  },
  {
    id: 'sankatmochan',
    name: 'Sankat Mochan Hanuman',
    hindiName: '३. श्री संकटमोचन द्रोणाचलधारी स्वरूप',
    title: 'संजीवनी बूटी पर्वतधारक एवं प्राणदाता',
    description: 'अपनी बाईं हथेली पर विशाल द्रोणागिरि (संजीवनी) पर्वत को उठाए गगनमार्ग से तीव्र गति से उड़ने वाला तेजस्वी एवं स्वर्णिम आभामंडल युक्त रूप।',
    purpose: 'युद्धभूमि में शक्तिबाण से मूर्छित लक्ष्मण जी के प्राणों की रक्षा करने तथा भक्तों के जीवन में आए ऐसे संकटों को मिटाने हेतु जिनका कोई अन्य समाधान न हो।',
    significance: 'गंभीर रोग, आईसीयू व असाध्य बीमारियों से प्राण रक्षा तथा जीवन में अचानक आए भीषण संकटों से मुक्ति।',
    imageUrl: '/images/sankat_mochan_hanuman.jpg',
    category: 'rudra',
    mantra: 'ॐ नमो हनुमते भय भञ्जनाय सुखं कुरु फट् स्वाहा॥'
  },
  {
    id: 'veer-maruti',
    name: 'Mahavir Veer Maruti',
    hindiName: '४. श्री वीर मारुति / महावीर स्वरूप',
    title: 'अतुलित पराक्रम एवं विजयप्रद महायोद्धा',
    description: 'कंधे पर सुवर्ण गदा, हाथ में धर्म ध्वजा, वज्र के समान सुदृढ़ मांसपेशियां और युद्ध मुद्रा में खड़े परम प्रतापी महायोद्धा रूप।',
    purpose: 'धर्म की पुनर्स्थापना, राक्षसी सेनाओं के मानमर्दन, सुग्रीव को उनका राज्यपद पुनः दिलाने और भक्तों में असीम साहस व आत्मबल का संचार करने हेतु।',
    significance: 'शत्रु पराजय, कोर्ट-कचहरी मुकदमों में विजय, प्रतियोगी परीक्षाओं में सफलता और हीनभावना का नाश।',
    imageUrl: '/images/veer_maruti_hanuman.jpg',
    category: 'rudra',
    mantra: 'ॐ महावीराय नमः, ॐ हं हनुमते रुद्रात्मकाय हुं फट्॥'
  },
  {
    id: 'bhakta-hanuman',
    name: 'Bhakta Hanuman',
    hindiName: '५. श्री भक्त हनुमान / दास्य स्वरूप',
    title: 'परम दास्य भाव एवं राम सेवा लीन रूप',
    description: 'दोनों हाथ जोड़कर, नतमस्तक होकर प्रभु श्री राम और माता सीता के युगल चरणों में ध्यानमग्न समर्पित अत्यंत विनीत व सौम्य स्वरूप।',
    purpose: 'संसार को सच्ची निष्काम भक्ति, अहंकार शून्यता और गुरु व ईश्वर के प्रति अगाध समर्पण का सनातन आदर्श सिखाने हेतु।',
    significance: 'हृदय की शुद्धि, मानसिक चंचलता का शमन, भक्ति का प्राकट्य और प्रभु श्री राम की साक्षात् कृपा प्राप्ति।',
    imageUrl: '/images/bhakta_hanuman.jpg',
    category: 'bhakti',
    mantra: 'ॐ रामदूताय नमः, ॐ श्री दास्यप्रियाय नमः॥'
  },
  {
    id: 'dhyan-hanuman',
    name: 'Dhyan Hanuman / Yogeshwar',
    hindiName: '६. श्री ध्यान हनुमान / योगेश्वर रूप',
    title: 'समाधिस्थ शांत चिन्मय योगेश्वर स्वरूप',
    description: 'पद्मासन में स्थित, नेत्र अर्ध-निमीलित, नासिकाग्र दृष्टि और अनाहत चक्र में ॐकार का अनवरत ध्यान करते हुए शांत मुनि रूप।',
    purpose: 'साधकों को ध्यान, प्राणायाम, कुंडलिनी जागरण, इंद्रिय निग्रह और आत्मज्ञान की प्राप्ति का मार्गदर्शन करने हेतु।',
    significance: 'तनाव, अवसाद, अनिद्रा और मानसिक विकारों से पूर्ण मुक्ति एवं आध्यात्मिक शांति।',
    imageUrl: '/images/dhyan_hanuman.jpg',
    category: 'bhakti',
    mantra: 'ॐ शान्ताय नमः, ॐ योगेश्वराय हनूमते नमः॥'
  },
  {
    id: 'surya-shishya',
    name: 'Surya Shishya Gyan Hanuman',
    hindiName: '७. श्री सूर्यशिष्य / ज्ञान स्वरूप',
    title: 'समस्त वेद-वेदांगों के परम ज्ञाता',
    description: 'हाथ में वेद-शास्त्र की पोथी, मुख पर अलौकिक ब्राह्म तेज और विद्यावान व चतुराई के साक्षात् विग्रह स्वरूप।',
    purpose: 'सूर्यदेव के रथ के सम्मुख निरंतर गतिमान रहकर चारों वेद, छहों वेदांग और समस्त चौंसठ कलाओं में पारंगत होकर विद्या की सर्वोच्च महिमा स्थापित करने हेतु।',
    significance: 'विद्यार्थियों की तीव्र स्मरण शक्ति, बुद्धिमत्ता, वाकपटुता और उच्च शिक्षा में सफलता।',
    imageUrl: '/images/surya_shishya_hanuman.jpg',
    category: 'bhakti',
    mantra: 'ॐ तत्त्वज्ञानप्रदाय नमः, ॐ बुद्धिमतां वरिष्ठाय नमः॥'
  },
  {
    id: 'lanka-dahan',
    name: 'Lanka Dahan Rudra Roop',
    hindiName: '८. श्री लंकादहन / विकट रुद्र रूप',
    title: 'अहंकार भंजक एवं अग्नि-तेज स्वरूप',
    description: 'विराट देह, जलती हुई पूंछ से पूरी स्वर्ण लंका में अग्नि प्रज्वलित करते हुए आकाश में अट्टहास करते हुए भयानक रुद्र रूप।',
    purpose: 'रावण के स्वर्ण और शक्ति के अहंकार को धूल में मिलाने, माता सीता को प्रभु के आगमन का विश्वास दिलाने और असुरों में धर्म का भय उत्पन्न करने हेतु।',
    significance: 'शत्रुओं के अहंकार का दमन, तंत्र-मंत्र और काले जादू के बंधनों को भस्म करना।',
    imageUrl: '/images/lanka_dahan_hanuman.jpg',
    category: 'rudra',
    mantra: 'ॐ ऐं भ्रीं हनुमते लंकाप्रासादभञ्जकाय हुं फट्॥'
  },
  {
    id: 'kapi-dhwaja',
    name: 'Kapidhwaja Hanuman',
    hindiName: '९. श्री कपिध्वज / महाभारत रक्षक स्वरूप',
    title: 'धर्म रथ रक्षक एवं महाभारत विजयी स्वरूप',
    description: 'अर्जुन के नंदीघोष रथ के ध्वज पर सूक्ष्म एवं प्रचंड रूप में विराजमान, अपनी गर्जना से कौरव सेना में कंपकंपी पैदा करने वाला रूप।',
    purpose: 'कुरुक्षेत्र के धर्मयुद्ध में भीष्म, द्रोण व कर्ण के महाविनाशक दिव्यास्त्रों के प्रचंड ताप से अर्जुन और रथ की अखंड रक्षा करने हेतु।',
    significance: 'जीवन के कठिन संघर्षों में रक्षा, व्यापारिक व पारिवारिक प्रतिस्पर्धा में अभेद्य कवच।',
    imageUrl: '/images/kapi_dhwaja_hanuman.jpg',
    category: 'kalyan',
    mantra: 'ॐ कपिध्वजाय नमः, ॐ विजयप्रदाय नमः॥'
  },
  {
    id: 'bal-maruti',
    name: 'Bal Maruti / Suryagrasi',
    hindiName: '१०. श्री बाल मारुति / बाल सूर्यग्रासी रूप',
    title: 'निडरता एवं बाल्य तेज के अधिपति',
    description: 'बाल्यकाल में लाल सिंदूरी छवि, हाथ में लड्डू, आकाश में क्रीड़ा करते हुए और सूर्य को निगलने की बाल सुलभ चेष्टा करने वाला मनमोहक रूप।',
    purpose: 'देवताओं द्वारा दिए गए समस्त वरदानों (इंद्र का वज्र, ब्रह्मा का ब्रह्मदंड, वरुण का पाश आदि की अभेद्यता) को प्राप्त कर संसार में असीम निडरता का संचार करने हेतु।',
    significance: 'बच्चों के स्वास्थ्य, नजर दोष, भय मुक्ति, तीव्र बुद्धि और बाल सुरक्षा।',
    imageUrl: '/images/bal_maruti_hanuman.jpg',
    category: 'kalyan',
    mantra: 'ॐ मारुतात्मजाय नमः, ॐ बालरूपाय हनूमते नमः॥'
  },
  {
    id: 'prasanna-anjaneya',
    name: 'Prasanna Anjaneya Varada Roop',
    hindiName: '११. श्री प्रसन्नाञ्जनेय / सौम्य वरद स्वरूप',
    title: 'अष्ट सिद्धि-नवनिधि प्रदाता एवं कल्याणकारी रूप',
    description: 'दाहिने हाथ से अभय मुद्रा, बाएं हाथ से वरद मुद्रा में भक्तों की ओर अमृतमयी दृष्टि से देखते हुए कमल के आसन पर विराजमान प्रसन्नचित्त रूप।',
    purpose: 'माता जानकी द्वारा दिए गए "अष्ट सिद्धि नौ निधि के दाता" वरदान के माध्यम से अपने शरणागत भक्तों को धर्म, अर्थ, काम और मोक्ष चारों फल प्रदान करने हेतु।',
    significance: 'गृह शांति, सुख-समृद्धि, व्यापार वृद्धि, अखंड सौभाग्य और मोक्ष की प्राप्ति।',
    imageUrl: '/images/prasanna_anjaneya.jpg',
    category: 'kalyan',
    mantra: 'ॐ प्रसन्नाञ्जनेयाय नमः, ॐ अष्टसिद्धिप्रदाय नमः स्वाहा॥'
  }
];

// Temples Live Darshan Data
export const TEMPLES: Temple[] = [
  {
    id: 'salasar',
    name: 'सालासर बालाजी मंदिर',
    location: 'चूरू',
    state: 'राजस्थान',
    description: 'राजस्थान के चूरू जिले में स्थित दाढ़ी-मूंछ वाले हनुमान जी का प्रसिद्ध सिद्धपीठ, जहाँ लाखों भक्त मन्नत माँगने आते हैं।',
    streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UC_SalasarBalajiOfficial',
    timings: 'प्रातः 05:00 - रात्रि 10:00',
    imageUrl: '/images/prasanna_anjaneya.jpg',
    isLive: true
  },
  {
    id: 'mehendipur',
    name: 'महंदीपुर बालाजी मंदिर',
    location: 'दौसा',
    state: 'राजस्थान',
    description: 'तंत्र-बाधा, प्रेत-बाधा व संकटों से मुक्ति हेतु विश्व प्रसिद्ध अलौकिक धाम।',
    streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UC_MehendipurBalaji',
    timings: 'प्रातः 06:00 - रात्रि 09:00',
    imageUrl: '/images/panchmukhi_hanuman.jpg',
    isLive: true
  },
  {
    id: 'hanumangarhi',
    name: 'हनुमान गढ़ी',
    location: 'अयोध्या जी',
    state: 'उत्तर प्रदेश',
    description: 'प्रभु श्री राम की जन्मभूमि अयोध्या का मुख्य द्वार जहाँ हनुमान जी राजा के रूप में विराजमान हैं।',
    streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UC_HanumanGarhiAyodhya',
    timings: 'प्रातः 04:00 - रात्रि 11:00',
    imageUrl: '/images/veer_maruti_hanuman.jpg',
    isLive: true
  },
  {
    id: 'sankatmochan_vns',
    name: 'संकट मोचन मंदिर',
    location: 'वाराणसी',
    state: 'उत्तर प्रदेश',
    description: 'गोस्वामी तुलसीदास जी द्वारा स्थापित काशी का अत्यंत पवित्र संकट मोचन हनुमान धाम।',
    streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UC_SankatMochanVaranasi',
    timings: 'प्रातः 05:00 - रात्रि 10:00',
    imageUrl: '/images/sankat_mochan_hanuman.jpg',
    isLive: true
  },
  {
    id: 'jakhoo',
    name: 'जाखू मंदिर',
    location: 'शिमला',
    state: 'हिमाचल प्रदेश',
    description: 'शिमला की ऊँची पहाड़ी पर स्थित 108 फीट ऊँची श्री हनुमान जी की गगनचुंबी भव्य प्रतिमा धाम।',
    streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UC_JakhooTempleShimla',
    timings: 'प्रातः 06:00 - संध्या 08:00',
    imageUrl: '/images/sankat_mochan_hanuman.jpg',
    isLive: false
  }
];

// Festivals & Muhurat
export const FESTIVALS: Festival[] = [
  {
    id: 'jayanti',
    name: 'Hanuman Jayanti',
    hindiName: 'श्री हनुमान जयंती उत्सव',
    date: 'चैत्र पूर्णिमा (वार्षिक उत्सव)',
    description: 'भगवान हनुमान जी का पावन प्राकट्य दिवस। इस दिन उपवास, सुंदरकांड पाठ और ध्वजारोहण का विशेष महत्व है।',
    significance: 'इस दिन हनुमान जी का पूजन करने से 100 गुना अधिक पुण्य फल प्राप्त होता है।',
    rituals: [
      'प्रातःकाल ब्राह्ममुहूर्त में स्नान कर लाल वस्त्र धारण करें।',
      'हनुमान जी को चमेली के तेल में मिला सिंदूर व लाल लंगोट/चोला अर्पित करें।',
      'बूंदी या बेसन के मोदक/लड्डू का भोग लगाएं।',
      'हनुमान चालीसा का 100 बार या 7 बार श्रद्धा से पाठ करें।'
    ],
    imageUrl: '/images/prasanna_anjaneya.jpg'
  },
  {
    id: 'budhwa_mangal',
    name: 'Budhwa Mangal',
    hindiName: 'बड़ा (बुढ़वा) मंगलवार',
    date: 'ज्येष्ठ माह के सभी मंगलवार',
    description: 'लंका विजय के पश्चात् हनुमान जी एवं भगवान राम के महामिलन का स्मरण उत्सव।',
    significance: 'असाध्य संकटों के निवारण हेतु बुढ़वा मंगलवार का व्रत एवं गुड़-चने का प्रसाद वितरण अत्यंत शुभ माना जाता है।',
    rituals: [
      'गुड़, भुने चने और केवड़े का इत्र हनुमान जी को अर्पित करें।',
      'सुंदरकांड पाठ और हनुमान बाहुक का पाठ करें।'
    ],
    imageUrl: '/images/sankat_mochan_hanuman.jpg'
  },
  {
    id: 'saturday_vrat',
    name: 'Shanichari Hanuman Vrat',
    hindiName: 'शनिवारीय संकटमोचन व्रत',
    date: 'प्रत्येक शनिवार',
    description: 'शनिदेव के कोप और साढ़ेसाती/ढैया के दुष्प्रभावों से मुक्ति दिलाने वाला पावन दिन।',
    significance: 'शनिदेव ने हनुमान जी के भक्तों को कभी पीड़ा न देने का वचन दिया था।',
    rituals: [
      'पीपल के वृक्ष के नीचे सरसों के तेल का दीपक जलाएं।',
      'हनुमान जी को काले तिल और उड़द चढ़ाएं।',
      'बजरंग बाण का 7 बार पाठ करें।'
    ],
    imageUrl: '/images/panchmukhi_hanuman.jpg'
  }
];

// Devotee FAQs
export const FAQS: FAQ[] = [
  {
    question: 'हनुमान चालीसा का पाठ 7 या 100 बार करने का क्या महत्व है?',
    answer: 'हनुमान चालीसा में लिखा है: "जो सत बार पाठ कर कोई, छूटहि बंदि महा सुख होई"। सौ बार पाठ करने से कठिन से कठिन बंधन और संकट समाप्त हो जाते हैं। यदि समय कम हो, तो रोजाना कम से कम 7 बार पाठ करने से भी मन वांछित फल प्राप्त होता है।',
    category: 'पाठ नियम'
  },
  {
    question: 'हनुमान जी को चोला (सिंदूर) चढ़ाने की सही विधि क्या है?',
    answer: 'हनुमान जी को केवल शुद्ध चमेली के तेल में गाय के घी अथवा शुद्ध तिल्ली तेल में सिंदूर मिलाकर चोला चढ़ाया जाता है। मंगलवार या शनिवार को स्नान के बाद स्वच्छ लाल वस्त्र पहनकर पूर्व या उत्तर दिशा की ओर मुख करके चोला अर्पण करना चाहिए।',
    category: 'पूजा विधि'
  },
  {
    question: 'संकटमोचन हनुमानाष्टक का पाठ कब करना चाहिए?',
    answer: 'संकटमोचन हनुमानाष्टक का पाठ जीवन में अचानक आए भारी संकट, कोर्ट-कचहरी, भय, शत्रु बाधा और रोग निवारण के लिए अत्यंत फलदायी है। संकट के समय इसके ८ पाठ करने से तुरंत राहत मिलती है।',
    category: 'हनुमानाष्टक'
  },
  {
    question: 'हनुमान बाहुक का पाठ किस प्रकार के रोगों को शांत करता है?',
    answer: 'गोस्वामी तुलसीदास जी ने असहनीय बाहु व शारीरिक पीड़ा के समय हनुमान बाहुक की रचना की थी। यह जोड़ों के दर्द (वात-व्याधि), पुराने असाध्य रोगों और शारीरिक पीड़ा से मुक्ति हेतु रामबाण माना जाता है।',
    category: 'हनुमान बाहुक'
  },
  {
    question: 'बजरंग बाण का पाठ कब और कैसे करना चाहिए?',
    answer: 'बजरंग बाण का पाठ केवल गंभीर संकटों, शत्रु भय, या असाध्य बीमारियों के समय ही करना चाहिए। इसमें हनुमान जी को प्रभु श्री राम की सौगंध दी जाती है, इसलिए बिना कारण इसका नित्य पाठ नहीं करना चाहिए।',
    category: 'बजरंग बाण'
  },
  {
    question: 'हनुमान जी के दर्शन या पाठ से शनि दोष कैसे शांत होता है?',
    answer: 'पौराणिक मान्यता के अनुसार हनुमान जी ने शनिदेव को रावण के कारागार से मुक्त कराया था। तब प्रसन्न होकर शनिदेव ने वचन दिया था कि जो भी हनुमान जी का ध्यान करेगा, उसे शनि ग्रह कभी कष्ट नहीं पहुंचाएंगे।',
    category: 'ग्रह शांति'
  }
];

// Daily Suvichars Collection
export const SUVICHARS: Suvichar[] = [
  {
    id: 1,
    shloka: 'दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हारे तेते॥',
    hindiMeaning: 'संसार का कितना भी कठिन कार्य क्यों न हो, हनुमान जी की कृपा दृष्टि होते ही वह अत्यंत सरल और सुगम हो जाता है।',
    author: 'श्री हनुमान चालीसा'
  },
  {
    id: 2,
    shloka: 'निश्चय प्रेम प्रतीति ते, बिनय करैं सनमान। तेहि के कारज सकल शुभ, सिद्ध करैं हनुमान॥',
    hindiMeaning: 'सच्चे प्रेम और अटूट विश्वास से की गई प्रार्थना को हनुमान जी कभी खाली नहीं जाने देते।',
    author: 'श्री बजरंग बाण'
  },
  {
    id: 3,
    shloka: 'को नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो॥',
    hindiMeaning: 'तीनों लोकों में कोई भी ऐसा संकट नहीं है जो हनुमान जी के स्मरण मात्र से दूर न हो सके।',
    author: 'श्री संकटमोचन हनुमानाष्टक'
  },
  {
    id: 4,
    shloka: 'सब सुख लहै तुम्हारी सरना। तुम रच्छक काहू को डर ना॥',
    hindiMeaning: 'जब महाबली हनुमान जी हमारे रक्षक हों, तो जीवन में किसी भी प्रकार का भय या चिंता करने की आवश्यकता नहीं है।',
    author: 'श्री हनुमान चालीसा'
  },
  {
    id: 5,
    shloka: 'अष्ट सिध्दि नौ निधि के दाता। अस बर दीन्ह जानकी माता॥',
    hindiMeaning: 'हनुमान जी अपने भक्तों को जीवन की हर समृद्धि, ज्ञान और सिद्धि प्रदान करने में समर्थ हैं।',
    author: 'श्री हनुमान चालीसा'
  }
];
