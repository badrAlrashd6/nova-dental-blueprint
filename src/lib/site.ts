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

/** Shared UI copy. */
export const ui = {
  book: { ar: "احجز موعد", en: "Book Appointment" } as L,
  call: { ar: "اتصل الآن", en: "Call Now" } as L,
  whatsapp: { ar: "واتساب", en: "WhatsApp" } as L,
  learnMore: { ar: "اعرف المزيد", en: "Learn More" } as L,
  viewAll: { ar: "عرض الكل", en: "View All" } as L,
  demo: { ar: "محتوى تجريبي لأغراض العرض", en: "Demo content for presentation purposes" } as L,
  demoLogos: { ar: "شعارات تجريبية", en: "Demo logos" } as L,
  quickLinks: { ar: "روابط سريعة", en: "Quick Links" } as L,
  workingHours: { ar: "ساعات العمل", en: "Working Hours" } as L,
  contactUs: { ar: "تواصل معنا", en: "Contact" } as L,
  directions: { ar: "الاتجاهات", en: "Get Directions" } as L,
  services: { ar: "الخدمات", en: "Services" } as L,
  rights: {
    ar: "© ٢٠٢٦ مركز بيرل لطب الأسنان. جميع الحقوق محفوظة.",
    en: "© 2026 Pearl Dental Center. All rights reserved.",
  } as L,
  licensed: {
    ar: "مرخّص من وزارة الصحة - دولة الكويت (بيانات تجريبية)",
    en: "Licensed by the Ministry of Health, State of Kuwait (demo data)",
  } as L,
};
