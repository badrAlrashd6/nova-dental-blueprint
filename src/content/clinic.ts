/**
 * Demo Portfolio Content
 * All clinic data below is fictional and used for presentation purposes only.
 */
import type { L } from "@/lib/i18n";
import {
  Baby,
  Bluetooth,
  Brush,
  HeartPulse,
  Microscope,
  Shield,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  Timer,
  Wallet,
  Wand2,
  type LucideIcon,
} from "lucide-react";

import implants from "@/assets/service-implants.jpg";
import ortho from "@/assets/service-ortho.jpg";
import hollywood from "@/assets/service-hollywood.jpg";
import whitening from "@/assets/service-whitening.jpg";
import general from "@/assets/service-general.jpg";
import pediatric from "@/assets/service-pediatric.jpg";
import veneersImg from "@/assets/service-veneers.jpg";
import rootcanalImg from "@/assets/service-rootcanal.jpg";
import emergencyImg from "@/assets/service-emergency.jpg";
import cosmeticImg from "@/assets/service-cosmetic.jpg";

import patient1 from "@/assets/patient-1.jpg";
import patient2 from "@/assets/patient-2.jpg";
import patient3 from "@/assets/patient-3.jpg";

import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import doc4 from "@/assets/doctor-4.jpg";

export type Service = {
  slug: string;
  icon: LucideIcon;
  image: string;
  alt: L;
  title: L;
  description: L;
  benefits: L[];
  duration: L;
  recovery: L;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "implants",
    icon: Syringe,
    image: implants,
    alt: { ar: "نموذج زراعة أسنان على سطح أبيض", en: "Dental implant model on a white surface" },
    title: { ar: "زراعة الأسنان", en: "Dental Implants" },
    description: {
      ar: "زراعة رقمية دقيقة بتقنية الأشعة ثلاثية الأبعاد لاستعادة السن المفقود بشكل طبيعي ودائم.",
      en: "Digitally guided implants planned with 3D imaging to restore a missing tooth naturally and permanently.",
    },
    benefits: [
      { ar: "تخطيط رقمي ثلاثي الأبعاد", en: "3D digital planning" },
      { ar: "زراعات سويسرية معتمدة", en: "Certified Swiss implant systems" },
      { ar: "نتيجة طبيعية تدوم لسنوات", en: "Natural result that lasts for years" },
    ],
    duration: { ar: "جلسة واحدة · ٦٠-٩٠ دقيقة", en: "Single visit · 60–90 minutes" },
    recovery: { ar: "العودة للحياة اليومية خلال ٢٤ ساعة", en: "Back to daily life within 24 hours" },
    featured: true,
  },
  {
    slug: "orthodontics",
    icon: Wand2,
    image: ortho,
    alt: { ar: "تقويم شفاف داخل علبة عرض", en: "Clear aligner tray in a display case" },
    title: { ar: "تقويم الأسنان", en: "Orthodontics" },
    description: {
      ar: "تقويم شفاف وتقويم ثابت بتخطيط رقمي يعرض لك شكل ابتسامتك النهائية قبل البدء.",
      en: "Clear and fixed orthodontics with a digital plan that previews your final smile before you start.",
    },
    benefits: [
      { ar: "محاكاة للنتيجة النهائية", en: "Preview of your final result" },
      { ar: "تقويم شفاف غير ملحوظ", en: "Discreet clear aligners" },
      { ar: "متابعة شهرية منتظمة", en: "Structured monthly follow-up" },
    ],
    duration: { ar: "٦ - ١٨ شهراً حسب الحالة", en: "6–18 months depending on the case" },
    recovery: { ar: "بدون فترة نقاهة", en: "No downtime" },
    featured: true,
  },
  {
    slug: "hollywood-smile",
    icon: Sparkles,
    image: hollywood,
    alt: { ar: "دليل ألوان القشور الخزفية بجانب نموذج سن", en: "Porcelain veneer shade guide beside a tooth model" },
    title: { ar: "ابتسامة هوليوود", en: "Hollywood Smile" },
    description: {
      ar: "تصميم ابتسامة متكامل يجمع بين القشور الخزفية وتناسق الوجه للوصول إلى نتيجة راقية وطبيعية.",
      en: "A complete smile design pairing porcelain veneers with facial harmony for a refined, natural result.",
    },
    benefits: [
      { ar: "تصميم مخصص لملامح وجهك", en: "Designed around your facial features" },
      { ar: "خزف إيطالي عالي الشفافية", en: "High-translucency Italian porcelain" },
      { ar: "تجربة الابتسامة قبل التثبيت", en: "Trial smile before final bonding" },
    ],
    duration: { ar: "٢ - ٣ زيارات خلال أسبوعين", en: "2–3 visits across two weeks" },
    recovery: { ar: "حساسية بسيطة لبضعة أيام", en: "Mild sensitivity for a few days" },
    featured: true,
  },
  {
    slug: "veneers",
    icon: Smile,
    image: veneersImg,
    alt: { ar: "قشور خزفية رفيعة على سطح رخامي", en: "Thin porcelain veneers on a marble surface" },
    title: { ar: "القشور الخزفية", en: "Veneers" },
    description: {
      ar: "قشور رقيقة جداً تصحح اللون والشكل والفراغات مع الحفاظ على أكبر قدر من نسيج السن الطبيعي.",
      en: "Ultra-thin veneers that correct colour, shape and gaps while preserving your natural tooth structure.",
    },
    benefits: [
      { ar: "برد محدود للسن", en: "Minimal tooth preparation" },
      { ar: "مقاومة عالية للتصبغ", en: "High stain resistance" },
      { ar: "ضمان على العمل الخزفي", en: "Warranty on ceramic work" },
    ],
    duration: { ar: "زيارتان · أسبوع واحد", en: "Two visits · one week" },
    recovery: { ar: "فوري تقريباً", en: "Practically immediate" },
  },
  {
    slug: "whitening",
    icon: Brush,
    image: whitening,
    alt: { ar: "جلسة تبييض أسنان بالضوء الأزرق", en: "Teeth whitening session with blue LED light" },
    title: { ar: "تبييض الأسنان", en: "Teeth Whitening" },
    description: {
      ar: "تبييض احترافي بالليزر في جلسة واحدة مع حماية كاملة للثة وحساسية أقل.",
      en: "Professional single-session laser whitening with full gum protection and reduced sensitivity.",
    },
    benefits: [
      { ar: "نتيجة تصل إلى ٦ درجات", en: "Up to 6 shades brighter" },
      { ar: "حماية كاملة للثة", en: "Complete gum protection" },
      { ar: "قوالب منزلية للمحافظة", en: "Home maintenance trays included" },
    ],
    duration: { ar: "جلسة واحدة · ٤٥ دقيقة", en: "One session · 45 minutes" },
    recovery: { ar: "حمية بيضاء لمدة ٤٨ ساعة", en: "White diet for 48 hours" },
    featured: true,
  },
  {
    slug: "root-canal",
    icon: Microscope,
    image: rootcanalImg,
    alt: { ar: "غرفة علاج أسنان حديثة", en: "Modern dental treatment room" },
    title: { ar: "علاج الجذور", en: "Root Canal" },
    description: {
      ar: "علاج عصب دقيق تحت المجهر الطبي يحافظ على سنك الطبيعي ويوقف الألم من الزيارة الأولى.",
      en: "Microscope-assisted endodontics that saves your natural tooth and stops the pain from the first visit.",
    },
    benefits: [
      { ar: "علاج تحت المجهر", en: "Performed under a microscope" },
      { ar: "تخدير موضعي مريح", en: "Comfortable local anaesthesia" },
      { ar: "غالباً بزيارة واحدة", en: "Often completed in one visit" },
    ],
    duration: { ar: "٦٠ - ٩٠ دقيقة", en: "60–90 minutes" },
    recovery: { ar: "٢٤ - ٤٨ ساعة", en: "24–48 hours" },
    featured: true,
  },
  {
    slug: "general",
    icon: Stethoscope,
    image: general,
    alt: { ar: "عيادة أسنان بيضاء بإضاءة طبيعية", en: "Bright white dental surgery with daylight" },
    title: { ar: "طب الأسنان العام", en: "General Dentistry" },
    description: {
      ar: "فحوصات دورية، حشوات تجميلية، وتنظيف عميق ضمن خطة وقائية واضحة لكل فرد في العائلة.",
      en: "Check-ups, tooth-coloured fillings and deep cleaning within a clear preventive plan for the whole family.",
    },
    benefits: [
      { ar: "فحص شامل مع أشعة رقمية", en: "Full exam with digital X-rays" },
      { ar: "حشوات بلون السن", en: "Tooth-coloured fillings" },
      { ar: "خطة وقاية سنوية", en: "Annual prevention plan" },
    ],
    duration: { ar: "٣٠ - ٦٠ دقيقة", en: "30–60 minutes" },
    recovery: { ar: "بدون فترة نقاهة", en: "No downtime" },
  },
  {
    slug: "pediatric",
    icon: Baby,
    image: pediatric,
    alt: { ar: "غرفة أسنان أطفال بألوان هادئة", en: "Pediatric dental room in soft colours" },
    title: { ar: "طب أسنان الأطفال", en: "Pediatric Dentistry" },
    description: {
      ar: "بيئة ودودة وفريق متخصص يجعل زيارة الطفل الأولى تجربة إيجابية بلا خوف.",
      en: "A friendly environment and specialist team that make a child's first visit a positive, fear-free experience.",
    },
    benefits: [
      { ar: "أسلوب تعامل سلوكي متخصص", en: "Specialist behaviour guidance" },
      { ar: "وقاية بالفلورايد والسدادات", en: "Fluoride and sealant prevention" },
      { ar: "غرفة ألعاب للانتظار", en: "Dedicated play waiting area" },
    ],
    duration: { ar: "٣٠ دقيقة", en: "30 minutes" },
    recovery: { ar: "بدون فترة نقاهة", en: "No downtime" },
    featured: true,
  },
  {
    slug: "emergency",
    icon: HeartPulse,
    image: emergencyImg,
    alt: { ar: "وحدة طوارئ أسنان مجهزة", en: "Equipped dental emergency unit" },
    title: { ar: "طوارئ الأسنان", en: "Emergency Dentistry" },
    description: {
      ar: "استقبال حالات الألم الحاد والكسور خلال نفس اليوم مع خط طوارئ يعمل على مدار الساعة.",
      en: "Same-day care for acute pain and fractures, backed by a 24/7 emergency line.",
    },
    benefits: [
      { ar: "موعد في نفس اليوم", en: "Same-day appointment" },
      { ar: "تسكين فوري للألم", en: "Immediate pain relief" },
      { ar: "خط طوارئ ٢٤ ساعة", en: "24-hour emergency line" },
    ],
    duration: { ar: "حسب الحالة", en: "Case dependent" },
    recovery: { ar: "متابعة خلال ٤٨ ساعة", en: "Follow-up within 48 hours" },
  },
  {
    slug: "cosmetic",
    icon: Sparkles,
    image: cosmeticImg,
    alt: { ar: "تفاصيل تجميل الأسنان في عيادة فاخرة", en: "Cosmetic dentistry detail in a luxury clinic" },
    title: { ar: "تجميل الأسنان", en: "Cosmetic Dentistry" },
    description: {
      ar: "تناسق اللثة، إعادة تشكيل الحواف، وترميم تجميلي دقيق يمنح ابتسامتك توازناً كاملاً.",
      en: "Gum contouring, edge reshaping and precise aesthetic bonding that bring your smile into balance.",
    },
    benefits: [
      { ar: "تحليل رقمي للابتسامة", en: "Digital smile analysis" },
      { ar: "تناسق اللثة بالليزر", en: "Laser gum contouring" },
      { ar: "ترميم تجميلي بدون برد", en: "No-prep aesthetic bonding" },
    ],
    duration: { ar: "١ - ٣ زيارات", en: "1–3 visits" },
    recovery: { ar: "يوم واحد", en: "One day" },
  },
];

export const featuredServices = services.filter((s) => s.featured).slice(0, 6);

export type Doctor = {
  slug: string;
  image: string;
  name: L;
  specialty: L;
  experience: L;
  education: L;
  languages: L;
  certificates: L[];
  bio: L;
};

export const doctors: Doctor[] = [
  {
    slug: "layla-al-sabah",
    image: doc1,
    name: { ar: "د. ليلى الصباح", en: "Dr. Layla Al-Sabah" },
    specialty: { ar: "استشارية تجميل وتركيبات الأسنان", en: "Consultant, Cosmetic & Prosthodontics" },
    experience: { ar: "١٤ سنة خبرة", en: "14 years of experience" },
    education: {
      ar: "بكالوريوس طب الأسنان - جامعة دمشق · ماجستير التركيبات - كينجز كوليدج لندن",
      en: "BDS, Damascus University · MSc Prosthodontics, King's College London",
    },
    languages: { ar: "العربية، الإنجليزية، الفرنسية", en: "Arabic, English, French" },
    certificates: [
      { ar: "زمالة الأكاديمية الأمريكية لتجميل الأسنان", en: "Fellow, American Academy of Cosmetic Dentistry" },
      { ar: "معتمدة في تصميم الابتسامة الرقمي", en: "Certified in Digital Smile Design" },
    ],
    bio: {
      ar: "تقود د. ليلى قسم التجميل في نوفا، وتشتهر بنهج محافظ يحافظ على السن الطبيعي مع نتائج متناسقة مع ملامح الوجه.",
      en: "Dr. Layla leads Nova's cosmetic department and is known for a conservative approach that preserves natural tooth structure while harmonising results with facial features.",
    },
  },
  {
    slug: "yousef-al-rashed",
    image: doc2,
    name: { ar: "د. يوسف الراشد", en: "Dr. Yousef Al-Rashed" },
    specialty: { ar: "استشاري زراعة وجراحة الفم", en: "Consultant, Implantology & Oral Surgery" },
    experience: { ar: "١٦ سنة خبرة", en: "16 years of experience" },
    education: {
      ar: "بكالوريوس طب الأسنان - جامعة الإسكندرية · دبلوم الزراعة - جامعة فرانكفورت",
      en: "BDS, Alexandria University · Implantology Diploma, Frankfurt University",
    },
    languages: { ar: "العربية، الإنجليزية، الألمانية", en: "Arabic, English, German" },
    certificates: [
      { ar: "دبلوم الزراعة الفورية - ITI سويسرا", en: "Immediate Loading Diploma, ITI Switzerland" },
      { ar: "عضو الجمعية الأوروبية لزراعة الأسنان", en: "Member, European Association for Osseointegration" },
    ],
    bio: {
      ar: "متخصص في الزراعة الفورية والحالات المعقدة، ويعتمد على التخطيط الرقمي الكامل قبل أي تدخل جراحي.",
      en: "A specialist in immediate-load implants and complex cases, working from fully digital planning before any surgical step.",
    },
  },
  {
    slug: "hana-mansour",
    image: doc3,
    name: { ar: "د. هناء منصور", en: "Dr. Hana Mansour" },
    specialty: { ar: "أخصائية تقويم الأسنان", en: "Specialist Orthodontist" },
    experience: { ar: "١١ سنة خبرة", en: "11 years of experience" },
    education: {
      ar: "بكالوريوس طب الأسنان - الجامعة الأردنية · ماجستير التقويم - جامعة ميلانو",
      en: "BDS, University of Jordan · MSc Orthodontics, University of Milan",
    },
    languages: { ar: "العربية، الإنجليزية، الإيطالية", en: "Arabic, English, Italian" },
    certificates: [
      { ar: "معتمدة في التقويم الشفاف المتقدم", en: "Advanced clear aligner certification" },
      { ar: "عضو الجمعية الأوروبية للتقويم", en: "Member, European Orthodontic Society" },
    ],
    bio: {
      ar: "تركز د. هناء على التقويم الشفاف للبالغين وتضع خطة زمنية واضحة لكل مريض منذ الزيارة الأولى.",
      en: "Dr. Hana focuses on adult clear-aligner treatment and sets out a clear timeline for every patient from the first visit.",
    },
  },
  {
    slug: "omar-al-fadhli",
    image: doc4,
    name: { ar: "د. عمر الفضلي", en: "Dr. Omar Al-Fadhli" },
    specialty: { ar: "أخصائي أسنان الأطفال", en: "Specialist Pediatric Dentist" },
    experience: { ar: "٩ سنوات خبرة", en: "9 years of experience" },
    education: {
      ar: "بكالوريوس طب الأسنان - جامعة دمشق · ماجستير أسنان الأطفال - جامعة تورنتو",
      en: "BDS, Damascus University · MSc Pediatric Dentistry, University of Toronto",
    },
    languages: { ar: "العربية، الإنجليزية", en: "Arabic, English" },
    certificates: [
      { ar: "معتمد في التخدير الواعي للأطفال", en: "Certified in pediatric conscious sedation" },
      { ar: "عضو الأكاديمية الأمريكية لطب أسنان الأطفال", en: "Member, American Academy of Pediatric Dentistry" },
    ],
    bio: {
      ar: "يخصص د. عمر وقتاً لتهيئة الطفل قبل العلاج، وهو ما جعل زيارات الأطفال في نوفا تجربة محببة.",
      en: "Dr. Omar invests time in preparing children before treatment, which is why paediatric visits at Nova feel welcoming rather than intimidating.",
    },
  },
];

export type Stat = { value: number; suffix?: string; decimals?: number; label: L };

export const stats: Stat[] = [
  { value: 8500, suffix: "+", label: { ar: "مريض سعيد", en: "Happy Patients" } },
  { value: 15, label: { ar: "طبيب متخصص", en: "Specialist Doctors" } },
  { value: 12, label: { ar: "سنة خبرة", en: "Years of Experience" } },
  { value: 4.9, decimals: 1, label: { ar: "تقييم المرضى", en: "Patient Rating" } },
];

export type Feature = { icon: LucideIcon; title: L; description: L };

export const whyUs: Feature[] = [
  {
    icon: Bluetooth,
    title: { ar: "أحدث التقنيات", en: "Latest Technology" },
    description: {
      ar: "مسح رقمي ثلاثي الأبعاد وأشعة منخفضة الجرعة لتشخيص أدق وخطة علاج واضحة.",
      en: "3D digital scanning and low-dose imaging for a more precise diagnosis and a clear treatment plan.",
    },
  },
  {
    icon: Stethoscope,
    title: { ar: "أطباء متخصصون", en: "Experienced Specialists" },
    description: {
      ar: "كل طبيب في نوفا يحمل شهادة تخصص دولية ويتابع تدريبه سنوياً مع أكاديميات عالمية.",
      en: "Every Nova clinician holds an international specialist qualification and trains annually with global academies.",
    },
  },
  {
    icon: Timer,
    title: { ar: "علاج بلا ألم", en: "Pain-Free Treatment" },
    description: {
      ar: "بروتوكول تخدير لطيف وخيارات استرخاء تجعل الجلسة مريحة من البداية للنهاية.",
      en: "A gentle anaesthesia protocol and relaxation options keep every session comfortable from start to finish.",
    },
  },
  {
    icon: ShieldCheck,
    title: { ar: "معايير تعقيم صارمة", en: "Sterilization Standards" },
    description: {
      ar: "دورة تعقيم موثقة لكل أداة وفق معايير CDC مع تتبع رقمي لكل عبوة.",
      en: "A documented sterilization cycle for every instrument to CDC standards, with digital tracking per pouch.",
    },
  },
  {
    icon: Shield,
    title: { ar: "تجربة مريحة", en: "Comfortable Experience" },
    description: {
      ar: "غرف خاصة، مواعيد بلا انتظار طويل، ومنسق مرضى يرافقك في كل خطوة.",
      en: "Private suites, appointments without long waits, and a patient coordinator with you at every step.",
    },
  },
  {
    icon: Wallet,
    title: { ar: "أسعار شفافة", en: "Transparent Pricing" },
    description: {
      ar: "خطة علاج مكتوبة بالتكلفة الكاملة قبل البدء، بدون أي رسوم مفاجئة.",
      en: "A written treatment plan with the full cost before we begin — no surprise fees.",
    },
  },
];

export type Testimonial = {
  name: L;
  treatment: L;
  treatmentSlug: string;
  quote: L;
  initials: string;
  rating: number;
  /** Optional portrait — swap for a real patient photo when available. */
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: { ar: "نورة العنزي", en: "Noura Al-Anzi" },
    treatment: { ar: "ابتسامة هوليوود", en: "Hollywood Smile" },
    treatmentSlug: "hollywood-smile",
    initials: "NA",
    avatar: patient1,
    rating: 5,
    quote: {
      ar: "شرحوا لي كل خطوة قبل ما نبدأ، وجربت شكل الابتسامة قبل التثبيت. النتيجة طبيعية أكثر مما توقعت.",
      en: "They walked me through every step before starting, and I tried the smile before it was bonded. The result looks more natural than I expected.",
    },
  },
  {
    name: { ar: "خالد المطيري", en: "Khaled Al-Mutairi" },
    treatment: { ar: "زراعة الأسنان", en: "Dental Implants" },
    treatmentSlug: "implants",
    initials: "KM",
    avatar: patient2,
    rating: 5,
    quote: {
      ar: "كنت متردد سنتين بسبب الخوف من الجراحة. الزراعة خلصت خلال ساعة ورجعت للدوام في اليوم التالي.",
      en: "I hesitated for two years out of fear of surgery. The implant took an hour and I was back at work the next day.",
    },
  },
  {
    name: { ar: "مريم الحربي", en: "Mariam Al-Harbi" },
    treatment: { ar: "تقويم الأسنان", en: "Orthodontics" },
    treatmentSlug: "orthodontics",
    initials: "MH",
    avatar: patient3,
    rating: 5,
    quote: {
      ar: "التقويم الشفاف ما أثر على شغلي ولا اجتماعاتي، والمتابعة الشهرية كانت منظمة جداً.",
      en: "The clear aligners never interfered with work or meetings, and the monthly follow-up was extremely organised.",
    },
  },
  {
    name: { ar: "عبدالله الشمري", en: "Abdullah Al-Shammari" },
    treatment: { ar: "علاج الجذور", en: "Root Canal" },
    treatmentSlug: "root-canal",
    initials: "AS",
    avatar: patient2,
    rating: 5,
    quote: {
      ar: "جيت بألم حاد في الليل واستقبلوني في نفس اليوم. صراحة ما حسيت بأي ألم أثناء العلاج.",
      en: "I arrived with severe night pain and was seen the same day. Honestly, I felt nothing during the treatment.",
    },
  },
  {
    name: { ar: "دانة العلي", en: "Dana Al-Ali" },
    treatment: { ar: "تبييض الأسنان", en: "Teeth Whitening" },
    treatmentSlug: "whitening",
    initials: "DA",
    avatar: patient1,
    rating: 5,
    quote: {
      ar: "جلسة وحدة وفرق واضح جداً، وما عانيت من حساسية مثل التجارب السابقة في مراكز ثانية.",
      en: "One session and a very visible difference — with none of the sensitivity I had at other centres.",
    },
  },
  {
    name: { ar: "فيصل الدوسري", en: "Faisal Al-Dosari" },
    treatment: { ar: "طب أسنان الأطفال", en: "Pediatric Dentistry" },
    treatmentSlug: "pediatric",
    initials: "FD",
    avatar: patient3,
    rating: 5,
    quote: {
      ar: "بنتي كانت ترفض أي عيادة أسنان، الحين تسأل متى الموعد الجاي. الفريق يعرف كيف يتعامل مع الأطفال.",
      en: "My daughter used to refuse any dental clinic; now she asks when the next visit is. The team really understands children.",
    },
  },
];

export type Faq = { question: L; answer: L; category: L };

export const faqs: Faq[] = [
  {
    category: { ar: "المواعيد", en: "Appointments" },
    question: { ar: "كيف أحجز موعداً في عيادة نوفا؟", en: "How do I book an appointment at Nova?" },
    answer: {
      ar: "يمكنك الحجز عبر نموذج الحجز في الموقع أو الاتصال بنا أو عبر واتساب. يتواصل معك منسق المرضى لتأكيد الموعد خلال ساعة عمل واحدة.",
      en: "Book through the form on this site, by phone, or on WhatsApp. A patient coordinator confirms your slot within one working hour.",
    },
  },
  {
    category: { ar: "التأمين", en: "Insurance" },
    question: { ar: "هل تقبلون التأمين الطبي؟", en: "Do you accept medical insurance?" },
    answer: {
      ar: "نتعامل مع أغلب شركات التأمين العاملة في سوريا. يُرجى إحضار بطاقة التأمين في زيارتك الأولى للتحقق من التغطية. (شركاء التأمين المعروضون هنا هم للعرض فقط.)",
      en: "We work with most insurers operating in Syria. Please bring your card to your first visit so we can verify coverage. (Insurance partners shown here are for demonstration only.)",
    },
  },
  {
    category: { ar: "الطوارئ", en: "Emergency" },
    question: { ar: "ماذا أفعل في حالة طوارئ الأسنان؟", en: "What should I do in a dental emergency?" },
    answer: {
      ar: "اتصل بخط الطوارئ مباشرة. نستقبل حالات الألم الحاد والكسور في نفس اليوم، وخط الطوارئ يعمل على مدار الساعة.",
      en: "Call the emergency line directly. We see acute pain and fractures the same day, and the line is staffed around the clock.",
    },
  },
  {
    category: { ar: "العلاجات", en: "Treatments" },
    question: { ar: "كم تستغرق زراعة السن؟", en: "How long does a dental implant take?" },
    answer: {
      ar: "الجراحة نفسها تستغرق من ٦٠ إلى ٩٠ دقيقة. مرحلة الالتحام تحتاج من ٨ إلى ١٢ أسبوعاً قبل تركيب التاج النهائي.",
      en: "The surgery itself takes 60–90 minutes. Integration then takes 8–12 weeks before the final crown is placed.",
    },
  },
  {
    category: { ar: "الألم", en: "Pain" },
    question: { ar: "هل العلاج مؤلم؟", en: "Is treatment painful?" },
    answer: {
      ar: "نستخدم بروتوكول تخدير لطيف يبدأ بمخدر موضعي سطحي قبل الحقن. أغلب المرضى يصفون الجلسة بأنها مريحة، وتتوفر خيارات استرخاء إضافية.",
      en: "We use a gentle protocol starting with topical anaesthetic before any injection. Most patients describe the session as comfortable, and additional relaxation options are available.",
    },
  },
  {
    category: { ar: "الدفع", en: "Payment" },
    question: { ar: "ما هي طرق الدفع المتاحة؟", en: "Which payment methods do you accept?" },
    answer: {
      ar: "نقبل كي-نت، البطاقات الائتمانية، والتحويل البنكي. كما تتوفر خطط تقسيط على العلاجات التجميلية والزراعة.",
      en: "We accept K-Net, credit cards and bank transfer. Instalment plans are available for cosmetic and implant treatments.",
    },
  },
  {
    category: { ar: "ساعات العمل", en: "Clinic Hours" },
    question: { ar: "ما هي ساعات عمل المركز؟", en: "What are the clinic hours?" },
    answer: {
      ar: "من السبت إلى الأربعاء من ٩ صباحاً حتى ٩ مساءً، الخميس حتى ٦ مساءً، والجمعة مغلق.",
      en: "Saturday to Wednesday 9:00 AM – 9:00 PM, Thursday until 6:00 PM, closed on Friday.",
    },
  },
  {
    category: { ar: "المواقف", en: "Parking" },
    question: { ar: "هل تتوفر مواقف للسيارات؟", en: "Is parking available?" },
    answer: {
      ar: "نعم، يوجد موقف مخصص للمرضى في الطابق السفلي من مبنى العيادة، بالإضافة إلى خدمة صف السيارات مجاناً.",
      en: "Yes — dedicated patient parking in the basement of the clinic building, plus complimentary valet service.",
    },
  },
];

export type Value = { icon: LucideIcon; title: L; description: L };

export const coreValues: Value[] = [
  {
    icon: ShieldCheck,
    title: { ar: "الأمانة الطبية", en: "Clinical Honesty" },
    description: {
      ar: "لا نقترح علاجاً لا تحتاجه، ونضع دائماً الخيار الأقل تدخلاً أولاً.",
      en: "We never propose treatment you don't need, and always present the least invasive option first.",
    },
  },
  {
    icon: HeartPulse,
    title: { ar: "الراحة أولاً", en: "Comfort First" },
    description: {
      ar: "كل تفصيل في المركز مصمم ليقلل التوتر، من الاستقبال حتى غرفة العلاج.",
      en: "Every detail is designed to lower anxiety, from reception through to the treatment suite.",
    },
  },
  {
    icon: Microscope,
    title: { ar: "الدقة", en: "Precision" },
    description: {
      ar: "نعتمد على التشخيص الرقمي والمجهر الطبي في الحالات الدقيقة.",
      en: "We rely on digital diagnostics and clinical microscopy for demanding cases.",
    },
  },
  {
    icon: Wallet,
    title: { ar: "الوضوح", en: "Clarity" },
    description: {
      ar: "خطة علاج مكتوبة وتكلفة واضحة قبل أي إجراء.",
      en: "A written treatment plan and clear cost before any procedure.",
    },
  },
];

export const timeline: { year: string; title: L; description: L }[] = [
  {
    year: "2014",
    title: { ar: "افتتاح العيادة الأولى", en: "The first clinic opens" },
    description: {
      ar: "بدأنا بغرفتي علاج في دمشق وفريق من أربعة أشخاص.",
      en: "We began with two treatment rooms in Damascus and a team of four.",
    },
  },
  {
    year: "2017",
    title: { ar: "قسم الزراعة الرقمية", en: "Digital implant department" },
    description: {
      ar: "أول مركز في المنطقة يعتمد التخطيط الجراحي الموجّه بالكامل.",
      en: "One of the first centres in the area to adopt fully guided surgical planning.",
    },
  },
  {
    year: "2020",
    title: { ar: "مختبر رقمي داخلي", en: "In-house digital lab" },
    description: {
      ar: "تصنيع القشور والتيجان داخل المركز لتقليل وقت الانتظار.",
      en: "Veneers and crowns milled on site, cutting patient waiting time.",
    },
  },
  {
    year: "2023",
    title: { ar: "المقر الجديد", en: "The new flagship" },
    description: {
      ar: "انتقلنا إلى مقر بمساحة ١٢٠٠ متر مربع بثمانِ غرف علاج خاصة.",
      en: "We moved into a 1,200 m² flagship with eight private treatment suites.",
    },
  },
  {
    year: "2026",
    title: { ar: "٨٥٠٠ مريض", en: "8,500 patients" },
    description: {
      ar: "وصلنا إلى ٨٥٠٠ مريض وتقييم ٤.٩ من ٥.",
      en: "We reached 8,500 patients with an average rating of 4.9 out of 5.",
    },
  },
];

/** Demo logos — fictional insurance partners. */
export const insurers: L[] = [
  { ar: "الشام للتأمين", en: "Sham Assure" },
  { ar: "نوفا كير", en: "Nova Care" },
  { ar: "الوطنية الطبية", en: "Watania Medical" },
  { ar: "مِدنِت", en: "MedNet" },
  { ar: "الأمان الصحي", en: "Aman Health" },
  { ar: "الياسمين الطبي", en: "Yasmin Medical" },
];
