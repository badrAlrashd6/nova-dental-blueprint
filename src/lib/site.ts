import type { L } from "./i18n";
import { contactConfig, contactLinks, pendingLabel } from "@/config/contact";

/**
 * Clinic identity. Contact details live in src/config/contact.ts and are
 * placeholders until the real information is provided.
 */
export const site = {
  name: { ar: "عيادة نوفا لطب الأسنان", en: "Nova Dental Clinic" } as L,
  short: { ar: "نوفا", en: "Nova" } as L,
  city: { ar: "دمشق، سوريا", en: "Damascus, Syria" } as L,
  currency: "SYP",
  phone: contactConfig.phone,
  phoneHref: contactLinks.phoneHref,
  whatsapp: contactConfig.whatsapp,
  whatsappHref: contactLinks.whatsappHref,
  email: contactConfig.email,
  emailHref: contactLinks.emailHref,
  mapsHref: contactConfig.mapUrl,
  address: contactConfig.address,
  hoursList: contactConfig.businessHours,
  social: contactConfig.social,
  pending: pendingLabel,
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
  demoClaims: { ar: "محتوى خيالي للعرض الأكاديمي فقط؛ الشخصيات والمؤهلات والسنوات والمرافق والإحصاءات والمراجعات والنتائج ليست حقائق موثقة. الصور توضيحية وليست لمرضى حقيقيين، ولا تُقدم خدمات علاجية.", en: "Fictional academic content only: people, credentials, years, facilities, statistics, reviews and outcomes are not verified facts. Images are illustrative, not real patients; no treatment services are offered." } as L,
  demoItem: { ar: "بيانات خيالية للعرض فقط", en: "Fictional demonstration data" } as L,
  demoImage: { ar: "صورة توضيحية — ليست لعيادة أو مريض حقيقي", en: "Illustrative image — not a real clinic or patient" } as L,
  demoService: { ar: "مثال خيالي؛ الأوقات والنتائج ليست نصيحة طبية أو ضماناً للعلاج", en: "Fictional example; timings and outcomes are not medical advice or treatment guarantees" } as L,
  heroTitle: { ar: "عيادة نوفا لطب الأسنان", en: "Nova Dental Clinic" } as L,
  heroDesc: { ar: "تصور أكاديمي لعيادة أسنان خيالية في دمشق، سوريا؛ لا يمثل عيادة عاملة أو رعاية طبية فعلية.", en: "An academic concept for a fictional dental clinic in Damascus, Syria; not an operating clinic or a real healthcare service." } as L,
  demoRating: { ar: "٤.٩ من ٥ — تقييم خيالي", en: "4.9/5 — fictional rating" } as L,
  errorTitle: { ar: "تعذر تحميل الصفحة", en: "This page didn't load" } as L,
  errorDesc: { ar: "حدث خطأ. يمكنك المحاولة مجدداً أو العودة للرئيسية.", en: "Something went wrong. Try again or return home." } as L,
  retry: { ar: "حاول مجدداً", en: "Try again" } as L,
  notFound: { ar: "الصفحة غير موجودة", en: "Page not found" } as L,
  notFoundDesc: { ar: "الصفحة المطلوبة غير موجودة أو تم نقلها.", en: "The requested page does not exist or has moved." } as L,
  primaryNav: { ar: "التنقل الرئيسي", en: "Primary navigation" } as L,
  mobileNav: { ar: "التنقل على الهاتف", en: "Mobile navigation" } as L,
  breadcrumb: { ar: "مسار التنقل", en: "Breadcrumb" } as L,

  demo: { ar: "محتوى تجريبي لأغراض العرض", en: "Demo content for presentation purposes" } as L,
  demoBadge: { ar: "مشروع أكاديمي تجريبي", en: "Academic demo project" } as L,
  demoPeople: { ar: "الشخصيات والمؤهلات والمراجعات والإحصاءات خيالية. الصور توضيحية وليست لمرضى حقيقيين.", en: "People, credentials, reviews and statistics are fictional. Images are illustrative, not real patients." } as L,
  contactPendingNote: { ar: "بيانات التواصل غير متاحة. النموذج تجريبي فقط ولا يرسل أي طلب.", en: "Contact details are unavailable. The form is a demonstration and does not send a request." } as L,
  demoLogos: { ar: "أسماء تجريبية فقط — لا شراكات فعلية", en: "Demo names only — no real partnerships" } as L,
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
    ar: "© ٢٠٢٦ عيادة نوفا لطب الأسنان. جميع الحقوق محفوظة.",
    en: "© 2026 Nova Dental Clinic. All rights reserved.",
  } as L,
  licensed: {
    ar: "مشروع أكاديمي تجريبي — ليست عيادة عاملة فعلياً",
    en: "Academic demonstration project — not an operating clinic",
  } as L,

  // Home sections
  homeStatsEyebrow: { ar: "بالأرقام", en: "By the numbers" } as L,
  homeStatsTitle: {
    ar: "ثقة تُبنى مع كل ابتسامة",
    en: "Trust built one smile at a time",
  } as L,
  homeStatsDesc: { ar: "أرقام خيالية للعرض فقط وليست إحصاءات عيادة حقيقية.", en: "Fictional demonstration figures, not real clinic statistics." } as L,
  whyEyebrow: { ar: "لماذا نوفا", en: "Why Nova" } as L,
  whyTitle: { ar: "تصور خيالي للرعاية", en: "A fictional care concept" } as L,
  whyDesc: {
    ar: "تفاصيل صغيرة كثيرة تصنع الفرق بين زيارة أسنان عادية وتجربة علاجية مريحة.",
    en: "Many small details separate an ordinary dental visit from a genuinely comfortable one.",
  } as L,
  servicesEyebrow: { ar: "خدماتنا", en: "Our Services" } as L,
  servicesTitle: { ar: "علاجات تغطي كل احتياجات ابتسامتك", en: "Treatments for every smile" } as L,
  servicesDesc: { ar: "أمثلة خيالية لعلاجات الأسنان للعرض الأكاديمي، وليست خدمات متاحة فعلياً.", en: "Fictional dental treatment examples for the academic demonstration, not available services." } as L,
  doctorsEyebrow: { ar: "الفريق الطبي", en: "The Team" } as L,
  doctorsTitle: { ar: "شخصيات طبية خيالية", en: "Fictional clinician profiles" } as L,
  doctorsDesc: { ar: "شخصيات ومؤهلات وخبرات خيالية للعرض الأكاديمي فقط.", en: "Fictional people, credentials and experience for the academic demonstration only." } as L,
  baEyebrow: { ar: "قبل وبعد", en: "Before & After" } as L,
  baTitle: { ar: "مقارنة ابتسامة توضيحية", en: "Illustrative smile comparison" } as L,
  baDesc: { ar: "صور توضيحية فقط وليست صور مريض أو نتيجة علاج حقيقية. لا تمثل ضماناً للنتائج.", en: "Illustrative images only, not a real patient or treatment outcome. Results are not guaranteed." } as L,
  testiEyebrow: { ar: "آراء المرضى", en: "Patient Stories" } as L,
  testiTitle: { ar: "قصص مرضى خيالية", en: "Fictional patient stories" } as L,
  testiDesc: { ar: "قصص وتقييمات مكتوبة للعرض الأكاديمي وليست شهادات مرضى حقيقيين.", en: "Stories and ratings written for the academic demonstration, not real patient testimonials." } as L,
  insurersEyebrow: { ar: "شركاء التأمين", en: "Insurance Partners" } as L,
  insurersTitle: { ar: "أسماء تأمين تجريبية", en: "Demo insurance names" } as L,
  insurersDesc: { ar: "الأسماء للعرض فقط؛ لا توجد شراكات أو تغطية تأمين فعلية.", en: "Names are illustrative only; no insurance partnerships or coverage are offered." } as L,
  ctaTitle: {
    ar: "جاهز لابتسامة تستحقها؟",
    en: "Ready for the smile you deserve?",
  } as L,
  ctaDesc: { ar: "نموذج حجز أكاديمي فقط؛ لا تُرسل البيانات ولا تُحفظ ولا يُؤكد أي موعد.", en: "Academic booking demonstration only; data is not sent or stored and no appointment is confirmed." } as L,
  experienceEyebrow: { ar: "تجربة المريض", en: "Patient Experience" } as L,
  experienceTitle: {
    ar: "زيارة تشبه الضيافة أكثر من العيادة",
    en: "A visit that feels more like hospitality",
  } as L,
  experienceDesc: { ar: "غرف وخدمات متخيلة ضمن قصة المشروع، وليست مرافق أو خدمات متاحة فعلياً.", en: "Imagined rooms and services within the project story, not actual available facilities or services." } as L,

  // About page
  aboutHeroEyebrow: { ar: "من نحن", en: "About Us" } as L,
  aboutHeroTitle: { ar: "تصور عيادة نوفا في دمشق", en: "The Nova clinic concept in Damascus" } as L,
  aboutHeroDesc: { ar: "قصة ومرافق خيالية لعيادة نوفا، لأغراض العرض الأكاديمي فقط.", en: "A fictional story and facilities for Nova, for academic demonstration only." } as L,
  storyTitle: { ar: "قصتنا", en: "Our Story" } as L,
  storyP1: { ar: "في القصة الخيالية بدأ المشروع عام ٢٠١٤ بغرفتي علاج ثم توسع إلى مساحة ١٢٠٠ متر مربع وثماني غرف. السنوات والمساحات والمرافق مختلقة للعرض فقط.", en: "In the fictional story, the clinic began in 2014 with two rooms and expanded to 1,200 m² with eight suites. Dates, dimensions and facilities are invented demonstration data." } as L,
  storyP2: { ar: "تعرض القصة قيماً تصورية مثل التشخيص الأمين وخطة العلاج الواضحة، ولا تمثل التزامات عيادة فعلية.", en: "The story illustrates values such as honest diagnosis and clear treatment planning, not commitments from an actual clinic." } as L,
  valuesEyebrow: { ar: "قيمنا", en: "Our Values" } as L,
  valuesTitle: { ar: "ما نلتزم به مع كل مريض", en: "What we commit to with every patient" } as L,
  timelineEyebrow: { ar: "مسيرتنا", en: "Milestones" } as L,
  timelineTitle: { ar: "محطات في طريق نوفا", en: "Milestones along the way" } as L,
  facilityEyebrow: { ar: "المركز", en: "The Centre" } as L,
  facilityTitle: {
    ar: "بيئة علاجية مصممة بعناية",
    en: "A carefully designed clinical environment",
  } as L,
  facilityDesc: { ar: "صور توضيحية لمرافق متخيلة، وليست توثيقاً لمقر عيادة حقيقية.", en: "Illustrative images of imagined facilities, not documentation of an actual clinic." } as L,
  facilitySuite: { ar: "غرفة علاج خاصة", en: "Private treatment suite" } as L,
  facilityTech: { ar: "قسم التصوير الرقمي", en: "Digital imaging department" } as L,
  facilityTeam: { ar: "الفريق الطبي والتمريضي", en: "Clinical and nursing team" } as L,
  facilityCare: { ar: "رعاية المريض", en: "Patient care" } as L,

  // Services page
  servicesHeroEyebrow: { ar: "العلاجات", en: "Treatments" } as L,
  servicesHeroTitle: {
    ar: "خدماتنا العلاجية والتجميلية",
    en: "Our clinical and cosmetic services",
  } as L,
  servicesHeroDesc: { ar: "عشر خدمات في تصور خيالي؛ الأوقات والنتائج أمثلة وليست نصيحة طبية.", en: "Ten services in a fictional concept; timings and outcomes are examples, not medical advice." } as L,
  benefitsLabel: { ar: "أبرز المزايا", en: "Key benefits" } as L,

  // Doctors page
  doctorsHeroEyebrow: { ar: "الأطباء", en: "Doctors" } as L,
  doctorsHeroTitle: { ar: "الفريق الطبي في نوفا", en: "The Nova clinical team" } as L,
  doctorsHeroDesc: { ar: "أربعة ملفات لشخصيات طبية خيالية؛ المؤهلات والخبرة ليست حقائق موثقة.", en: "Four fictional clinician profiles; qualifications and experience are not verified facts." } as L,

  // Testimonials page
  testiHeroEyebrow: { ar: "تجارب المرضى", en: "Patient Stories" } as L,
  testiHeroTitle: { ar: "قصص ابتسامة خيالية", en: "Fictional smile stories" } as L,
  testiHeroDesc: { ar: "أسماء وصور وقصص وتقييمات توضيحية فقط، وليست مراجعات مرضى حقيقيين.", en: "Illustrative names, images, stories and ratings only, not real patient reviews." } as L,

  // FAQ page
  faqHeroEyebrow: { ar: "الأسئلة الشائعة", en: "FAQ" } as L,
  faqHeroTitle: {
    ar: "إجابات لأكثر الأسئلة تكراراً",
    en: "Answers to the questions we hear most",
  } as L,
  faqHeroDesc: { ar: "إجابات توضيحية عن مشروع خيالي، وليست معلومات عن عيادة عاملة أو نصيحة طبية.", en: "Illustrative answers about a fictional project, not operating-clinic information or medical advice." } as L,
  faqStillQuestion: { ar: "لديك سؤال آخر؟", en: "Still have a question?" } as L,
  faqStillDesc: { ar: "هذا مشروع أكاديمي دون خدمة تواصل أو رعاية فعلية. بيانات التواصل غير متاحة.", en: "This academic project provides no real contact or care service. Contact details are unavailable." } as L,

  // Contact page
  contactHeroEyebrow: { ar: "تواصل معنا", en: "Contact" } as L,
  contactHeroTitle: {
    ar: "تواصل مع عيادة نوفا في دمشق",
    en: "Get in touch with Nova in Damascus",
  } as L,
  contactHeroDesc: { ar: "عيادة خيالية في دمشق، سوريا. بيانات التواصل وساعات العمل غير متاحة، والصور توضيحية فقط.", en: "A fictional clinic in Damascus, Syria. Contact details and hours are unavailable; images are illustrative only." } as L,
  contactInfo: { ar: "معلومات التواصل", en: "Contact information" } as L,
  addressLabel: { ar: "العنوان", en: "Address" } as L,
  phoneLabel: { ar: "الهاتف", en: "Phone" } as L,
  emailLabel: { ar: "البريد الإلكتروني", en: "Email" } as L,
  emergencyLabel: { ar: "الطوارئ", en: "Emergency" } as L,
  mapTitle: { ar: "موقع المركز على الخريطة", en: "Clinic location on the map" } as L,

  // Booking form
  bookHeroEyebrow: { ar: "حجز موعد", en: "Booking" } as L,
  bookHeroTitle: { ar: "احجز موعدك في عيادة نوفا", en: "Book your appointment at Nova" } as L,
  bookHeroDesc: { ar: "جرّب النموذج ببيانات خيالية فقط. لا يتم إرسال أو حفظ البيانات أو إنشاء موعد.", en: "Try the form with fictional details only. Nothing is sent or stored and no appointment is created." } as L,
  formTitle: { ar: "بيانات الحجز", en: "Appointment details" } as L,
  fullName: { ar: "الاسم الكامل", en: "Full name" } as L,
  fullNamePh: { ar: "مثال: نورة العنزي", en: "e.g. Noura Al-Anzi" } as L,
  phoneField: { ar: "رقم الهاتف", en: "Phone number" } as L,
  phonePh: { ar: "أدخل رقم الهاتف للتجربة", en: "Enter a phone number for the demo" } as L,
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
  successTitle: { ar: "اكتملت تجربة النموذج", en: "Form demonstration complete" } as L,
  successDesc: { ar: "تم التحقق من البيانات في هذه الصفحة فقط. لم تُرسل أو تُحفظ ولا يوجد موعد أو متابعة فعلية.", en: "Details were validated on this page only. Nothing was sent or stored; there is no appointment or follow-up." } as L,
  bookAnother: { ar: "حجز موعد آخر", en: "Book another appointment" } as L,
  bookAside1: { ar: "نموذج تجريبي دون تأكيد موعد", en: "Demo form; no appointment confirmation" } as L,
  bookAside2: { ar: "استخدم بيانات خيالية فقط", en: "Use fictional details only" } as L,
  bookAside3: { ar: "لا تُرسل البيانات أو تُحفظ", en: "Nothing is sent or stored" } as L,
  bookAside4: { ar: "لا توجد خدمة علاجية فعلية", en: "No real treatment service is offered" } as L,
  prefer: { ar: "تفضل الحجز مباشرة؟", en: "Prefer to book directly?" } as L,
};

/** Fictional options for the demo form, not opening hours or real availability. */
export const timeSlots: L[] = [
  { ar: "٩:٠٠ صباحاً", en: "9:00 AM" },
  { ar: "١٠:٣٠ صباحاً", en: "10:30 AM" },
  { ar: "١٢:٠٠ ظهراً", en: "12:00 PM" },
  { ar: "٢:٠٠ مساءً", en: "2:00 PM" },
  { ar: "٤:٠٠ مساءً", en: "4:00 PM" },
  { ar: "٦:٠٠ مساءً", en: "6:00 PM" },
  { ar: "٨:٠٠ مساءً", en: "8:00 PM" },
];
