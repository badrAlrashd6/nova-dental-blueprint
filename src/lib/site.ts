import type { L } from "./i18n";

/** Demo Portfolio Content — fictional clinic details for presentation purposes. */
export const site = {
  name: { ar: "مركز بيرل لطب الأسنان", en: "Pearl Dental Center" } as L,
  short: { ar: "بيرل", en: "Pearl" } as L,
  phone: "+965 2222 8899",
  phoneHref: "tel:+96522228899",
  whatsapp: "+965 9900 8899",
  whatsappHref: "https://wa.me/96599008899",
  email: "hello@pearldental.kw",
  emailHref: "mailto:hello@pearldental.kw",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Salem+Al+Mubarak+Street+Salmiya+Kuwait",
  address: {
    ar: "شارع سالم المبارك، مجمع بيرل، الدور الثالث، السالمية، الكويت",
    en: "Salem Al Mubarak Street, Pearl Complex, 3rd Floor, Salmiya, Kuwait",
  } as L,
  city: { ar: "السالمية، الكويت", en: "Salmiya, Kuwait" } as L,
  hours: {
    ar: "السبت - الخميس · ٩ صباحاً - ٩ مساءً",
    en: "Sat – Thu · 9:00 AM – 9:00 PM",
  } as L,
  hoursList: [
    {
      day: { ar: "السبت - الأربعاء", en: "Saturday – Wednesday" } as L,
      time: { ar: "٩:٠٠ ص - ٩:٠٠ م", en: "9:00 AM – 9:00 PM" } as L,
    },
    {
      day: { ar: "الخميس", en: "Thursday" } as L,
      time: { ar: "٩:٠٠ ص - ٦:٠٠ م", en: "9:00 AM – 6:00 PM" } as L,
    },
    {
      day: { ar: "الجمعة", en: "Friday" } as L,
      time: { ar: "مغلق", en: "Closed" } as L,
    },
  ],
  emergency: {
    ar: "طوارئ الأسنان على مدار الساعة",
    en: "24/7 dental emergency line",
  } as L,
  social: {
    instagram: "https://instagram.com/pearldental.kw",
    facebook: "https://facebook.com/pearldental.kw",
    x: "https://x.com/pearldentalkw",
  },
};

export const navLinks: { to: string; label: L }[] = [
  { to: "/", label: { ar: "الرئيسية", en: "Home" } },
  { to: "/about", label: { ar: "من نحن", en: "About" } },
  { to: "/services", label: { ar: "الخدمات", en: "Services" } },
  { to: "/doctors", label: { ar: "الأطباء", en: "Doctors" } },
  { to: "/testimonials", label: { ar: "آراء المرضى", en: "Testimonials" } },
  { to: "/faq", label: { ar: "الأسئلة الشائعة", en: "FAQ" } },
  { to: "/contact", label: { ar: "تواصل معنا", en: "Contact" } },
];

/**
 * Centralized bilingual UI dictionary.
 * Every visible string in the app resolves through this object (or the
 * bilingual content library in src/content/clinic.ts).
 */
export const ui = {
  // Actions
  book: { ar: "احجز موعد", en: "Book Appointment" } as L,
  bookNow: { ar: "احجز موعدك الآن", en: "Book Your Appointment" } as L,
  call: { ar: "اتصل الآن", en: "Call Now" } as L,
  whatsapp: { ar: "واتساب", en: "WhatsApp" } as L,
  learnMore: { ar: "اعرف المزيد", en: "Learn More" } as L,
  viewAll: { ar: "عرض الكل", en: "View All" } as L,
  allServices: { ar: "كل الخدمات", en: "All Services" } as L,
  allDoctors: { ar: "تعرّف على الفريق", en: "Meet the Team" } as L,
  readMore: { ar: "التفاصيل", en: "Details" } as L,
  back: { ar: "رجوع", en: "Back" } as L,
  home: { ar: "الرئيسية", en: "Home" } as L,
  send: { ar: "إرسال الطلب", en: "Send Request" } as L,
  sending: { ar: "جاري الإرسال...", en: "Sending..." } as L,

  // Generic labels
  demo: { ar: "محتوى تجريبي لأغراض العرض", en: "Demo content for presentation purposes" } as L,
  demoLogos: { ar: "شعارات تجريبية", en: "Demo logos" } as L,
  quickLinks: { ar: "روابط سريعة", en: "Quick Links" } as L,
  workingHours: { ar: "ساعات العمل", en: "Working Hours" } as L,
  contactUs: { ar: "تواصل معنا", en: "Contact" } as L,
  directions: { ar: "الاتجاهات", en: "Get Directions" } as L,
  services: { ar: "الخدمات", en: "Services" } as L,
  duration: { ar: "مدة العلاج", en: "Treatment time" } as L,
  recovery: { ar: "فترة التعافي", en: "Recovery" } as L,
  languagesLabel: { ar: "اللغات", en: "Languages" } as L,
  educationLabel: { ar: "المؤهلات", en: "Education" } as L,
  certificatesLabel: { ar: "الشهادات", en: "Certifications" } as L,
  menu: { ar: "القائمة", en: "Menu" } as L,
  openMenu: { ar: "فتح القائمة", en: "Open menu" } as L,
  closeMenu: { ar: "إغلاق القائمة", en: "Close menu" } as L,
  language: { ar: "اللغة", en: "Language" } as L,
  before: { ar: "قبل", en: "Before" } as L,
  after: { ar: "بعد", en: "After" } as L,
  dragToCompare: { ar: "اسحب للمقارنة", en: "Drag to compare" } as L,
  previous: { ar: "السابق", en: "Previous" } as L,
  next: { ar: "التالي", en: "Next" } as L,
  optional: { ar: "اختياري", en: "optional" } as L,
  rights: {
    ar: "© ٢٠٢٦ مركز بيرل لطب الأسنان. جميع الحقوق محفوظة.",
    en: "© 2026 Pearl Dental Center. All rights reserved.",
  } as L,
  licensed: {
    ar: "مرخّص من وزارة الصحة - دولة الكويت (بيانات تجريبية)",
    en: "Licensed by the Ministry of Health, State of Kuwait (demo data)",
  } as L,

  // Home sections
  homeStatsEyebrow: { ar: "بالأرقام", en: "By the numbers" } as L,
  homeStatsTitle: {
    ar: "ثقة تُبنى مع كل ابتسامة",
    en: "Trust built one smile at a time",
  } as L,
  homeStatsDesc: {
    ar: "أرقام تعكس ما بناه فريق بيرل خلال أكثر من عشر سنوات من العمل في السالمية.",
    en: "Figures that reflect what the Pearl team has built over more than a decade in Salmiya.",
  } as L,
  whyEyebrow: { ar: "لماذا بيرل", en: "Why Pearl" } as L,
  whyTitle: {
    ar: "لماذا يختارنا المرضى في الكويت",
    en: "Why patients across Kuwait choose us",
  } as L,
  whyDesc: {
    ar: "تفاصيل صغيرة كثيرة تصنع الفرق بين زيارة أسنان عادية وتجربة علاجية مريحة.",
    en: "Many small details separate an ordinary dental visit from a genuinely comfortable one.",
  } as L,
  servicesEyebrow: { ar: "خدماتنا", en: "Our Services" } as L,
  servicesTitle: { ar: "علاجات تغطي كل احتياجات ابتسامتك", en: "Treatments for every smile" } as L,
  servicesDesc: {
    ar: "من الزراعة الرقمية إلى القشور الخزفية المصنوعة يدوياً، كل علاج يُخطط رقمياً وينفذه أخصائي.",
    en: "From digitally guided implants to hand-layered veneers, every treatment is planned digitally and delivered by a specialist.",
  } as L,
  doctorsEyebrow: { ar: "الفريق الطبي", en: "The Team" } as L,
  doctorsTitle: { ar: "أطباء تثق بهم", en: "Specialists you can trust" } as L,
  doctorsDesc: {
    ar: "كل طبيب في بيرل يحمل شهادة تخصص دولية ويواصل تدريبه سنوياً مع أكاديميات عالمية.",
    en: "Every Pearl clinician holds an international specialist qualification and trains annually with global academies.",
  } as L,
  baEyebrow: { ar: "قبل وبعد", en: "Before & After" } as L,
  baTitle: { ar: "نتائج حقيقية بمعايير طبيعية", en: "Real results, natural standards" } as L,
  baDesc: {
    ar: "حرّك الفاصل لمشاهدة الفرق في حالة تصميم ابتسامة كاملة داخل مركز بيرل. (صور توضيحية)",
    en: "Drag the divider to see the difference on a complete smile design at Pearl. (Illustrative imagery)",
  } as L,
  testiEyebrow: { ar: "آراء المرضى", en: "Patient Stories" } as L,
  testiTitle: { ar: "ما يقوله مرضانا", en: "What our patients say" } as L,
  testiDesc: {
    ar: "تجارب حقيقية من كرسي بيرل: زراعة، تقويم، تبييض وتصميم ابتسامة.",
    en: "Real experiences from the Pearl chair: implants, orthodontics, whitening and smile design.",
  } as L,
  insurersEyebrow: { ar: "شركاء التأمين", en: "Insurance Partners" } as L,
  insurersTitle: { ar: "نتعامل مع أبرز شركات التأمين", en: "We work with leading insurers" } as L,
  insurersDesc: {
    ar: "أحضر بطاقة التأمين في زيارتك الأولى وسنتحقق من التغطية نيابةً عنك.",
    en: "Bring your insurance card to your first visit and we'll verify coverage for you.",
  } as L,
  ctaTitle: {
    ar: "جاهز لابتسامة تستحقها؟",
    en: "Ready for the smile you deserve?",
  } as L,
  ctaDesc: {
    ar: "احجز استشارتك اليوم، ويتواصل معك منسق المرضى لتأكيد الموعد خلال ساعة عمل واحدة.",
    en: "Book your consultation today and a patient coordinator will confirm within one working hour.",
  } as L,
  experienceEyebrow: { ar: "تجربة المريض", en: "Patient Experience" } as L,
  experienceTitle: {
    ar: "زيارة تشبه الضيافة أكثر من العيادة",
    en: "A visit that feels more like hospitality",
  } as L,
  experienceDesc: {
    ar: "غرف خاصة، منسق مرضى يرافقك، ومواعيد تحترم وقتك من لحظة الوصول حتى المغادرة.",
    en: "Private suites, a coordinator by your side, and appointments that respect your time from arrival to departure.",
  } as L,

  // About page
  aboutHeroEyebrow: { ar: "من نحن", en: "About Us" } as L,
  aboutHeroTitle: { ar: "طب أسنان بمعايير عالمية في قلب السالمية", en: "World-class dentistry in the heart of Salmiya" } as L,
  aboutHeroDesc: {
    ar: "تأسس مركز بيرل ليجمع بين الدقة الطبية والتقنيات الرقمية وتجربة إنسانية هادئة لكل مريض.",
    en: "Pearl was founded to bring together clinical precision, digital technology and a calm, human experience for every patient.",
  } as L,
  storyTitle: { ar: "قصتنا", en: "Our Story" } as L,
  storyP1: {
    ar: "بدأنا عام ٢٠١٤ بغرفتي علاج وفريق صغير يؤمن بأن زيارة الأسنان يمكن أن تكون تجربة مريحة. اليوم نعمل في مقر بمساحة ١٢٠٠ متر مربع بثمانِ غرف علاج خاصة ومختبر رقمي داخلي.",
    en: "We began in 2014 with two treatment rooms and a small team convinced that a dental visit could feel calm. Today we work from a 1,200 m² flagship with eight private suites and an in-house digital lab.",
  } as L,
  storyP2: {
    ar: "ما لم يتغير هو المبدأ: تشخيص أمين، خطة علاج مكتوبة، وتكلفة واضحة قبل أي إجراء.",
    en: "What hasn't changed is the principle: an honest diagnosis, a written treatment plan and a clear cost before any procedure.",
  } as L,
  valuesEyebrow: { ar: "قيمنا", en: "Our Values" } as L,
  valuesTitle: { ar: "ما نلتزم به مع كل مريض", en: "What we commit to with every patient" } as L,
  timelineEyebrow: { ar: "مسيرتنا", en: "Milestones" } as L,
  timelineTitle: { ar: "محطات في طريق بيرل", en: "Milestones along the way" } as L,
  facilityEyebrow: { ar: "المركز", en: "The Centre" } as L,
  facilityTitle: { ar: "بيئة علاجية مصممة بعناية", en: "A carefully designed clinical environment" } as L,
  facilityDesc: {
    ar: "من غرف العلاج الخاصة إلى قسم التصوير الرقمي، كل مساحة في بيرل مصممة لتقليل التوتر ورفع دقة العلاج.",
    en: "From private treatment suites to the digital imaging department, every space at Pearl is designed to reduce anxiety and raise clinical precision.",
  } as L,
  facilitySuite: { ar: "غرفة علاج خاصة", en: "Private treatment suite" } as L,
  facilityTech: { ar: "قسم التصوير الرقمي", en: "Digital imaging department" } as L,
  facilityTeam: { ar: "الفريق الطبي والتمريضي", en: "Clinical and nursing team" } as L,
  facilityCare: { ar: "رعاية المريض", en: "Patient care" } as L,

  // Services page
  servicesHeroEyebrow: { ar: "العلاجات", en: "Treatments" } as L,
  servicesHeroTitle: { ar: "خدماتنا العلاجية والتجميلية", en: "Our clinical and cosmetic services" } as L,
  servicesHeroDesc: {
    ar: "عشر خدمات متخصصة تغطي الوقاية والعلاج والتجميل، ينفذها فريق من الاستشاريين داخل بيرل.",
    en: "Ten specialist services spanning prevention, treatment and aesthetics, delivered by Pearl's consultant team.",
  } as L,
  benefitsLabel: { ar: "أبرز المزايا", en: "Key benefits" } as L,

  // Doctors page
  doctorsHeroEyebrow: { ar: "الأطباء", en: "Doctors" } as L,
  doctorsHeroTitle: { ar: "الفريق الطبي في بيرل", en: "The Pearl clinical team" } as L,
  doctorsHeroDesc: {
    ar: "أربعة استشاريين وأخصائيين يجمعون بين التدريب الأوروبي والأمريكي والخبرة الطويلة في الكويت.",
    en: "Four consultants and specialists combining European and North American training with long experience in Kuwait.",
  } as L,

  // Testimonials page
  testiHeroEyebrow: { ar: "تجارب المرضى", en: "Patient Stories" } as L,
  testiHeroTitle: { ar: "قصص ابتسامة من مرضانا", en: "Smile stories from our patients" } as L,
  testiHeroDesc: {
    ar: "مجموعة من تجارب المرضى في بيرل، من الزراعة والتقويم إلى التبييض وتصميم الابتسامة.",
    en: "A collection of patient experiences at Pearl — from implants and orthodontics to whitening and smile design.",
  } as L,

  // FAQ page
  faqHeroEyebrow: { ar: "الأسئلة الشائعة", en: "FAQ" } as L,
  faqHeroTitle: { ar: "إجابات لأكثر الأسئلة تكراراً", en: "Answers to the questions we hear most" } as L,
  faqHeroDesc: {
    ar: "كل ما تحتاج معرفته قبل زيارتك الأولى: المواعيد، التأمين، الألم، الدفع وساعات العمل.",
    en: "Everything you need before your first visit: appointments, insurance, comfort, payment and clinic hours.",
  } as L,
  faqStillQuestion: { ar: "لديك سؤال آخر؟", en: "Still have a question?" } as L,
  faqStillDesc: {
    ar: "فريق خدمة المرضى متاح للرد عليك عبر الهاتف أو واتساب خلال ساعات العمل.",
    en: "Our patient services team is available by phone or WhatsApp during clinic hours.",
  } as L,

  // Contact page
  contactHeroEyebrow: { ar: "تواصل معنا", en: "Contact" } as L,
  contactHeroTitle: { ar: "نحن في شارع سالم المبارك", en: "Find us on Salem Al Mubarak Street" } as L,
  contactHeroDesc: {
    ar: "مواقف مخصصة، خدمة صف السيارات، وغرف استشارة خاصة لاستقبال هادئ لكل مريض.",
    en: "Dedicated parking, valet service and private consultation rooms for a calm welcome.",
  } as L,
  contactInfo: { ar: "معلومات التواصل", en: "Contact information" } as L,
  addressLabel: { ar: "العنوان", en: "Address" } as L,
  phoneLabel: { ar: "الهاتف", en: "Phone" } as L,
  emailLabel: { ar: "البريد الإلكتروني", en: "Email" } as L,
  emergencyLabel: { ar: "الطوارئ", en: "Emergency" } as L,
  mapTitle: { ar: "موقع المركز على الخريطة", en: "Clinic location on the map" } as L,

  // Booking form
  bookHeroEyebrow: { ar: "حجز موعد", en: "Booking" } as L,
  bookHeroTitle: { ar: "احجز موعدك في مركز بيرل", en: "Book your appointment at Pearl" } as L,
  bookHeroDesc: {
    ar: "املأ النموذج وسيتواصل معك منسق المرضى لتأكيد الموعد خلال ساعة عمل واحدة.",
    en: "Fill in the form and a patient coordinator will confirm your slot within one working hour.",
  } as L,
  formTitle: { ar: "بيانات الحجز", en: "Appointment details" } as L,
  fullName: { ar: "الاسم الكامل", en: "Full name" } as L,
  fullNamePh: { ar: "مثال: نورة العنزي", en: "e.g. Noura Al-Anzi" } as L,
  phoneField: { ar: "رقم الهاتف", en: "Phone number" } as L,
  phonePh: { ar: "٩٦٥ ٠٠٠٠ ٠٠٠٠+", en: "+965 0000 0000" } as L,
  emailField: { ar: "البريد الإلكتروني", en: "Email address" } as L,
  emailPh: { ar: "name@example.com", en: "name@example.com" } as L,
  serviceField: { ar: "الخدمة المطلوبة", en: "Treatment" } as L,
  servicePh: { ar: "اختر الخدمة", en: "Select a treatment" } as L,
  doctorField: { ar: "الطبيب المفضل", en: "Preferred doctor" } as L,
  doctorAny: { ar: "أي طبيب متاح", en: "Any available doctor" } as L,
  dateField: { ar: "التاريخ المفضل", en: "Preferred date" } as L,
  timeField: { ar: "الوقت المفضل", en: "Preferred time" } as L,
  timePh: { ar: "اختر الوقت", en: "Select a time" } as L,
  notesField: { ar: "ملاحظات إضافية", en: "Additional notes" } as L,
  notesPh: {
    ar: "أخبرنا عن أي ألم أو قلق أو موعد سابق...",
    en: "Tell us about any pain, concerns or previous treatment...",
  } as L,
  errName: { ar: "يرجى إدخال الاسم الكامل", en: "Please enter your full name" } as L,
  errPhone: { ar: "يرجى إدخال رقم هاتف صحيح", en: "Please enter a valid phone number" } as L,
  errEmail: { ar: "يرجى إدخال بريد إلكتروني صحيح", en: "Please enter a valid email address" } as L,
  errService: { ar: "يرجى اختيار الخدمة", en: "Please select a treatment" } as L,
  errDate: { ar: "يرجى اختيار التاريخ", en: "Please choose a date" } as L,
  errTime: { ar: "يرجى اختيار الوقت", en: "Please choose a time" } as L,
  successTitle: { ar: "تم استلام طلبك", en: "Your request has been received" } as L,
  successDesc: {
    ar: "شكراً لك. سيتواصل معك منسق المرضى خلال ساعة عمل واحدة لتأكيد الموعد. (نموذج تجريبي — لا يتم إرسال بيانات فعلية.)",
    en: "Thank you. A patient coordinator will contact you within one working hour to confirm. (Demo form — no data is actually sent.)",
  } as L,
  bookAnother: { ar: "حجز موعد آخر", en: "Book another appointment" } as L,
  bookAside1: { ar: "تأكيد خلال ساعة عمل واحدة", en: "Confirmation within one working hour" } as L,
  bookAside2: { ar: "استشارة أولى شاملة مع أشعة رقمية", en: "Comprehensive first consultation with digital X-rays" } as L,
  bookAside3: { ar: "خطة علاج مكتوبة بتكلفة واضحة", en: "A written treatment plan with clear pricing" } as L,
  bookAside4: { ar: "إمكانية التعديل أو الإلغاء بسهولة", en: "Easy rescheduling or cancellation" } as L,
  prefer: { ar: "تفضل الحجز مباشرة؟", en: "Prefer to book directly?" } as L,
};

/** Time slots offered in the booking form. */
export const timeSlots: L[] = [
  { ar: "٩:٠٠ صباحاً", en: "9:00 AM" },
  { ar: "١٠:٣٠ صباحاً", en: "10:30 AM" },
  { ar: "١٢:٠٠ ظهراً", en: "12:00 PM" },
  { ar: "٢:٠٠ مساءً", en: "2:00 PM" },
  { ar: "٤:٠٠ مساءً", en: "4:00 PM" },
  { ar: "٦:٠٠ مساءً", en: "6:00 PM" },
  { ar: "٨:٠٠ مساءً", en: "8:00 PM" },
];

