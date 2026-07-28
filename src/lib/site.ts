export const site = {
  name: "Nova Dental Clinic",
  tagline: "Precision dentistry, refined for Kuwait.",
  phone: "+965 2222 8899",
  phoneHref: "tel:+96522228899",
  email: "hello@novadental.kw",
  emailHref: "mailto:hello@novadental.kw",
  address: {
    line1: "Salem Al Mubarak Street",
    line2: "Al Salhiya Complex, 3rd Floor",
    city: "Salmiya, Kuwait",
  },
  hours: [
    { day: "Saturday – Thursday", time: "9:00 AM – 9:00 PM" },
    { day: "Friday", time: "Closed" },
  ],
  social: {
    instagram: "https://instagram.com/novadental.kw",
    facebook: "https://facebook.com/novadental.kw",
    tiktok: "https://tiktok.com/@novadental.kw",
    x: "https://x.com/novadentalkw",
  },
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/testimonials", label: "Stories" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;
