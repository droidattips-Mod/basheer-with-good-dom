import type { ContactInfo, EquipmentCategory, FeatureItem, Locale, NavLink, ServiceItem, StatItem } from "@/types/site";

type LocaleContent = {
  dir: "rtl" | "ltr";
  brandName: string;
  nav: NavLink[];
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
    browseCta: string;
    contactCta: string;
  };
  stats: StatItem[];
  features: FeatureItem[];
  equipment: {
    label: string;
    title: string;
    subtitle: string;
    availability: string;
    requestNow: string;
    details: string;
    viewAll: string;
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    label: string;
    title: string;
    text: string;
    points: string[];
  };
  contact: {
    formTitle: string;
    fields: {
      name: string;
      mobile: string;
      email: string;
      equipmentType: string;
      city: string;
      duration: string;
      details: string;
    };
    submit: string;
    success: string;
    infoTitle: string;
    whatsapp: string;
  };
  footer: {
    title: string;
    description: string;
    linksTitle: string;
    copyright: string;
  };
  languageSwitchLabel: string;
};

export const WHATSAPP_NUMBER = "966558204317";
export const DISPLAY_PHONE = "1) 0558204317  2) 0505893596";
export const DISPLAY_EMAIL = "alnsercranes@gmail.com";

export const translations: Record<Locale, LocaleContent> = {
  ar: {
    dir: "rtl",
    brandName: "رافعات النصر",
    nav: [
      { id: "home", href: "#home", label: "الرئيسية" },
      { id: "equipment", href: "#equipment", label: "المعدات" },
      { id: "services", href: "#services", label: "خدماتنا" },
      { id: "about", href: "#about", label: "من نحن" },
      { id: "contact", href: "#contact", label: "اتصل بنا" }
    ],
    hero: {
      title: "رافعات النصر",
      highlight: "لتأجير جميع واحدث المعدات الثقيلة والخفيفة",
      subtitle: "نقدم خدمات تأجير المعدات بأسطول متطور يشمل الثقيلة والخفيفة، جاهز لدعم مشاريعك بأداء قوي، سرعة استجابة، واعتمادية تضمن لك التفوق في كل مرحلة.",
      browseCta: "تصفح المعدات",
      contactCta: "اتصل بنا الآن"
    },
    stats: [
      { value: "+500", label: "عميل" },
      { value: "+200", label: "معدة" },
      { value: "+15", label: "سنة خبرة" },
      { value: "24/7", label: "دعم فني" }
    ],
    features: [
      { title: "خبرة موثوقة", description: "فريق متخصص بخبرة طويلة في تشغيل الرافعات والمعدات الثقيلة." },
      { title: "سرعة في التنفيذ", description: "نوفر المعدة المناسبة في الوقت المحدد لضمان استمرارية المشروع." },
      { title: "حلول آمنة", description: "معدات جاهزة يتم فحصها وصيانتها بانتظام لضمان أعلى معايير السلامة." }
    ],
    equipment: {
      label: "التميز في التأجير",
      title: "جميع المعدات المتاحة",
      subtitle: "استعرض أسطولنا الكامل من المعدات الثقيلة والرافعات المتطورة",
      availability: "حجز",
      requestNow: "الطلب الآن",
      details: "عرض التفاصيل",
      viewAll: "عرض الكل"
    },
    services: {
      label: "خدماتنا",
      title: "بعض من خدماتنا",
      subtitle: "نوفر لكم العديد من الخدمات المتوفرة للايجار بشكل يومي / شهري / سنوي",
      cta: "عرض التفاصيل"
    },
    about: {
      label: "عن رافعات النصر",
      title: "من نحن",
      text: "رافعات النصر شركة سعودية متخصصة في تأجير الرافعات والمعدات الثقيلة ودعم المشاريع بمعدات موثوقة وفرق تشغيل مؤهلة.",
      points: ["معدات حديثة وجاهزة للعمل", "التزام بالسلامة والجودة", "تغطية لمختلف مناطق المملكة"]
    },
    contact: {
      formTitle: "اطلب عرض سعر",
      fields: {
        name: "الاسم الكامل",
        mobile: "رقم الجوال",
        email: "البريد الإلكتروني",
        equipmentType: "نوع المعدة",
        city: "المدينة",
        duration: "مدة الإيجار",
        details: "تفاصيل الطلب"
      },
      submit: "إرسال الطلب",
      success: "تم إرسال طلبك بنجاح، سنتواصل معك قريباً.",
      infoTitle: "تواصل معنا الآن",
      whatsapp: "تواصل عبر واتساب"
    },
    footer: {
      title: "رافعات النصر",
      description: "حلول موثوقة في تأجير الرافعات والمعدات الثقيلة للمشاريع الإنشائية والصناعية.",
      linksTitle: "روابط سريعة",
      copyright: "جميع الحقوق محفوظة © رافعات النصر 2026"
    },
    languageSwitchLabel: "English"
  },
  en: {
    dir: "ltr",
    brandName: "Al Nasr Cranes",
    nav: [
      { id: "home", href: "#home", label: "Home" },
      { id: "equipment", href: "#equipment", label: "Equipment" },
      { id: "services", href: "#services", label: "Services" },
      { id: "about", href: "#about", label: "About" },
      { id: "contact", href: "#contact", label: "Contact Us" }
    ],
    hero: {
      title: "Al Nasr Cranes",
      highlight: "Rental Services for the Latest Heavy and Light Equipment",
      subtitle: "We provide equipment rental solutions through a modern fleet of heavy and light equipment, ready to support your projects with high performance, rapid response, and the reliability you need to excel at every stage.",
      browseCta: "Browse Equipment",
      contactCta: "Contact Us Now"
    },
    stats: [
      { value: "+500", label: "Clients" },
      { value: "+200", label: "Machines" },
      { value: "+15", label: "Years Experience" },
      { value: "24/7", label: "Support" }
    ],
    features: [
      { title: "Trusted Experience", description: "A specialized team with long experience in cranes and heavy equipment operation." },
      { title: "Fast Execution", description: "We provide the right equipment on time to keep your project moving." },
      { title: "Safe Solutions", description: "Ready equipment inspected and maintained regularly to meet high safety standards." }
    ],
    equipment: {
      label: "Rental Excellence",
      title: "Available Equipment",
      subtitle: "Explore our full fleet of heavy equipment and modern lifting solutions",
      availability: "Book",
      requestNow: "Order Now",
      details: "View Details",
      viewAll: "View All"
    },
    services: {
      label: "Services",
      title: "Some of Our Services",
      subtitle: "Daily, monthly, and yearly rental services for your projects.",
      cta: "View Details"
    },
    about: {
      label: "About Al Nasr Cranes",
      title: "About Us",
      text: "Al Nasr Cranes is a Saudi company specialized in crane and heavy equipment rental with reliable machines and qualified operation teams.",
      points: ["Modern ready-to-work equipment", "Commitment to safety and quality", "Coverage across Saudi Arabia"]
    },
    contact: {
      formTitle: "Request a Quote",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        equipmentType: "Equipment Type",
        city: "City",
        duration: "Rental Duration",
        details: "Request Details"
      },
      submit: "Submit Request",
      success: "Your request has been submitted successfully. We will contact you soon.",
      infoTitle: "Contact Us Now",
      whatsapp: "Contact via WhatsApp"
    },
    footer: {
      title: "Al Nasr Cranes",
      description: "Reliable crane and heavy equipment rental solutions for construction and industrial projects.",
      linksTitle: "Quick Links",
      copyright: "©2026 AL Nasr Cranes. All rights reserved."
    },
    languageSwitchLabel: "العربية"
  }
};

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: "forklifts",
    nameAr: "الرافعات الشوكية",
    nameEn: "Forklifts",
    items: [
      { id: 1, nameAr: "رافعة شوكية كوماتسو 5 طن", nameEn: "Komatsu 5 Ton Forklift", descriptionAr: "4.7m", descriptionEn: "4.7m", spec: "4.7m", badge: "Ton 5", image: "/images/equipment/forklift-komatsu-5ton.png", slug: "forklift-komatsu-5ton" },
      { id: 2, nameAr: "رافعة شوكية تويوتا 3 طن – ديزل", nameEn: "Toyota 3 Ton Diesel Forklift", descriptionAr: "4.5m", descriptionEn: "4.5m", spec: "4.5m", badge: "Ton 3", image: "/images/equipment/forklift-toyota-3ton-diesel.jpg", slug: "forklift-toyota-3ton-diesel" },
      { id: 3, nameAr: "رافعة شوكية ميتسوبيشي 5 طن", nameEn: "Mitsubishi 5 Ton Forklift", descriptionAr: "4.7m", descriptionEn: "4.7m", spec: "4.7m", badge: "Ton 5", image: "/images/equipment/forklift-mitsubishi-5ton.jpg", slug: "forklift-mitsubishi-5ton" },
      { id: 4, nameAr: "رافعة شوكية ليند 5 طن – كهرباء", nameEn: "Linde 5 Ton Electric Forklift", descriptionAr: "5.0m", descriptionEn: "5.0m", spec: "5.0m", badge: "Ton 5", image: "/images/equipment/forklift-linde-5ton-electric.png", slug: "forklift-linde-5ton-electric" }
    ]
  },
  {
    id: "scissor",
    nameAr: "الرافعات المقصية",
    nameEn: "Scissor Lifts",
    items: [
      { id: 5, nameAr: "سيزرلفت GTJZ10 – 10 متر – كهرباء", nameEn: "GTJZ10 Scissor Lift 10m Electric", descriptionAr: "10m", descriptionEn: "10m", spec: "10m", badge: "kg 320", image: "/images/equipment/scissor-lift-gtjz10-10m.jpg", slug: "scissor-lift-gtjz10-10m" },
      { id: 6, nameAr: "سيزرلفت JLG – 10 متر – كهرباء", nameEn: "JLG Scissor Lift 10m Electric", descriptionAr: "10m", descriptionEn: "10m", spec: "10m", badge: "kg 320", image: "/images/equipment/scissor-lift-jlg-10m.jpg", slug: "scissor-lift-jlg-10m" },
      { id: 7, nameAr: "سيزرلفت Zoomlion – 7 متر – كهرباء", nameEn: "Zoomlion Scissor Lift 7m Electric", descriptionAr: "7m", descriptionEn: "7m", spec: "7m", badge: "kg 240", image: "/images/equipment/scissor-lift-zoomlion-7m.jpg", slug: "scissor-lift-zoomlion-7m" },
      { id: 8, nameAr: "سيزرلفت Genie – 6 متر – كهرباء", nameEn: "Genie Scissor Lift 6m Electric", descriptionAr: "6m", descriptionEn: "6m", spec: "6m", badge: "kg 220", image: "/images/equipment/scissor-lift-genie-6m.jpg", slug: "scissor-lift-genie-6m" },
      { id: 9, nameAr: "سيزرلفت JLG/MG – 18 متر – ديزل", nameEn: "JLG/MG Scissor Lift 18m Diesel", descriptionAr: "18m", descriptionEn: "18m", spec: "18m", badge: "kg 680", image: "/images/equipment/scissor-lift-jlg-18m-diesel.jpg", slug: "scissor-lift-jlg-18m-diesel" },
      { id: 10, nameAr: "سيزرلفت JLG – 8 متر – كهرباء", nameEn: "JLG Scissor Lift 8m Electric", descriptionAr: "8m", descriptionEn: "8m", spec: "8m", badge: "kg 230", image: "/images/equipment/scissor-lift-jlg-8m.jpg", slug: "scissor-lift-jlg-8m" }
    ]
  },
  {
    id: "boom-trucks",
    nameAr: "تأجير بوم تراك",
    nameEn: "Boom Trucks Rental",
    items: [
      { id: 26, nameAr: "بوم تراك 3 طن", nameEn: "Boom Truck 3 Ton", descriptionAr: "20m", descriptionEn: "20m", spec: "20m", badge: "Ton 3", image: "/images/equipment/boom-truck-3ton.jpg", slug: "boom-truck-3ton" },
      { id: 27, nameAr: "بوم تراك 5 طن", nameEn: "Boom Truck 5 Ton", descriptionAr: "20m", descriptionEn: "20m", spec: "20m", badge: "Ton 5", image: "/images/equipment/boom-truck-5ton.jpg", slug: "boom-truck-5ton" }
    ]
  },
  {
    id: "cranes",
    nameAr: "الكرينات",
    nameEn: "Cranes",
    items: [
      { id: 28, nameAr: "كرين ليبهر 100 طن", nameEn: "Liebherr Crane 100 Ton", descriptionAr: "00m", descriptionEn: "00m", spec: "00m", badge: "Ton 100", image: "/images/equipment/crane-liebherr-100ton.jpg", slug: "crane-liebherr-100ton" },
      { id: 29, nameAr: "كرين تادانو 90 طن", nameEn: "Tadano Crane 90 Ton", descriptionAr: "00m", descriptionEn: "00m", spec: "00m", badge: "Ton 90", image: "/images/equipment/crane-tadano-90ton.jpg", slug: "crane-tadano-90ton" },
      { id: 30, nameAr: "كرين موبايل غروف 60 طن", nameEn: "Grove Mobile Crane 60 Ton", descriptionAr: "00m", descriptionEn: "00m", spec: "00m", badge: "Ton 60", image: "/images/equipment/crane-grove-60ton.jpg", slug: "crane-grove-60ton" },
      { id: 31, nameAr: "كرين كاتو 60 طن", nameEn: "Kato Crane 60 Ton", descriptionAr: "00m", descriptionEn: "00m", spec: "00m", badge: "Ton 60", image: "/images/equipment/crane-kato-60ton.jpg", slug: "crane-kato-60ton" },
      { id: 32, nameAr: "كرين تادانو 40 طن", nameEn: "Tadano Crane 40 Ton", descriptionAr: "00m", descriptionEn: "00m", spec: "00m", badge: "Ton 40", image: "/images/equipment/crane-tadano-40ton.jpg", slug: "crane-tadano-40ton" },
      { id: 33, nameAr: "كرين كاتو 30 طن", nameEn: "Kato Crane 30 Ton", descriptionAr: "00m", descriptionEn: "00m", spec: "00m", badge: "Ton 30", image: "/images/equipment/crane-kato-30ton.jpg", slug: "crane-kato-30ton" }
    ]
  },
  {
    id: "bobcats",
    nameAr: "البوبكات",
    nameEn: "Bobcats",
    items: [
      { id: 34, nameAr: "سكيد ستير بوبكات S100", nameEn: "Bobcat S100 Skid-Steer Loader", descriptionAr: "ديزل", descriptionEn: "Diesel", spec: "Diesel", badge: "Diesel", image: "/images/equipment/bobcat-s100.jpg", slug: "bobcat-s100" },
      { id: 35, nameAr: "سكيد ستير بوبكات S150", nameEn: "Bobcat S150 Skid-Steer Loader", descriptionAr: "ديزل", descriptionEn: "Diesel", spec: "Diesel", badge: "Diesel", image: "/images/equipment/bobcat-s150.jpg", slug: "bobcat-s150" },
      { id: 36, nameAr: "لودر مضمار مدمج جون دير 317G", nameEn: "John Deere 317G Compact Track Loader", descriptionAr: "ديزل", descriptionEn: "Diesel", spec: "Diesel", badge: "Diesel", image: "/images/equipment/bobcat-john-deere-317g.jpg", slug: "bobcat-john-deere-317g" },
      { id: 37, nameAr: "هيونداي HSL850-7", nameEn: "Hyundai HSL850-7", descriptionAr: "ديزل", descriptionEn: "Diesel", spec: "Diesel", badge: "Diesel", image: "/images/equipment/bobcat-hyundai-hsl850-7.jpg", slug: "bobcat-hyundai-hsl850-7" },
      { id: 38, nameAr: "بوبكات باك هو لودر B730", nameEn: "Bobcat Backhoe Loader B730", descriptionAr: "ديزل", descriptionEn: "Diesel", spec: "Diesel", badge: "Diesel", image: "/images/equipment/bobcat-backhoe-b730.jpg", slug: "bobcat-backhoe-b730" }
    ]
  },
  {
    id: "excavators",
    nameAr: "البوكلينات",
    nameEn: "Excavators",
    items: [
      { id: 39, nameAr: "حفار عجلي هيونداي HW140", nameEn: "Hyundai HW140 Wheel Excavator", descriptionAr: "ديزل", descriptionEn: "Diesel", spec: "Diesel", badge: "Diesel", image: "/images/equipment/excavator-hyundai-hw140.jpg", slug: "excavator-hyundai-hw140" },
      { id: 40, nameAr: "حفار زاحف هيونداي 480", nameEn: "Hyundai Crawler Excavator 480", descriptionAr: "ديزل", descriptionEn: "Diesel", spec: "Diesel", badge: "Diesel", image: "/images/equipment/excavator-hyundai-crawler-480.jpg", slug: "excavator-hyundai-crawler-480" }
    ]
  },
  {
    id: "loaders",
    nameAr: "الشيولات",
    nameEn: "Wheel Loaders",
    items: [
      { id: 41, nameAr: "شيول كاتربيلر 1", nameEn: "Caterpillar Wheel Loader 1", descriptionAr: "ديزل", descriptionEn: "Diesel", spec: "Diesel", badge: "Diesel", image: "/images/equipment/loader-caterpillar-1.jpg", slug: "loader-caterpillar-1" },
      { id: 42, nameAr: "شيول كاتربيلر 2", nameEn: "Caterpillar Wheel Loader 2", descriptionAr: "ديزل", descriptionEn: "Diesel", spec: "Diesel", badge: "Diesel", image: "/images/equipment/loader-caterpillar-2.jpg", slug: "loader-caterpillar-2" },
      { id: 43, nameAr: "رول 12 طن", nameEn: "Roller 12 Ton", descriptionAr: "ديزل", descriptionEn: "Diesel", spec: "Diesel", badge: "Ton 12", image: "/images/equipment/roller-12ton.jpg", slug: "roller-12ton" }
    ]
  },
  {
    id: "telehandlers",
    nameAr: "التليوهندر",
    nameEn: "Telehandlers",
    items: [
      { id: 44, nameAr: "تليهاندلر جي سي بي 17 متر", nameEn: "JCB 17m Telehandler", descriptionAr: "17m", descriptionEn: "17m", spec: "17m", badge: "Ton 4", image: "/images/equipment/telehandler-jcb-17m.jpg", slug: "telehandler-jcb-17m" }
    ]
  }
];

export const services: ServiceItem[] = [
  { id: 1, titleAr: "فوركلفت 10 طن للايجار في الدمام", titleEn: "10 Ton Forklift Rental in Dammam", descriptionAr: "النصر للمقاولات وتأجير الرافعات أفضل شركة لتأجير الرافعات الشوكية.", descriptionEn: "Reliable forklift rental for warehouses and factories.", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, titleAr: "تأجير الرافعات الشوكية الدمام الرياض", titleEn: "Forklift Rental in Dammam and Riyadh", descriptionAr: "تأجير رافعات شوكية بمختلف الأوزان والأحجام للمستودعات والمصانع.", descriptionEn: "Forklifts in different capacities for warehouses and factories.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80" },
  { id: 3, titleAr: "تأجير رافعات مقصية", titleEn: "Scissor Lift Rental", descriptionAr: "تأجير رافعات مقصية كهربائية وديزل بارتفاعات من 6 إلى 20 متر.", descriptionEn: "Electric and diesel scissor lifts from 6m to 20m.", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80" },
  { id: 4, titleAr: "سيزرلفت 16 متر للايجار في الدمام", titleEn: "16m Scissor Lift Rental in Dammam", descriptionAr: "تأجير رافعات مقصية للعمل في الدمام والقطيف والجبيل والرياض.", descriptionEn: "Scissor lift rental for Dammam, Qatif, Jubail, and Riyadh.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80" },
  { id: 5, titleAr: "تأجير كرينات موبيل", titleEn: "Mobile Crane Rental", descriptionAr: "تأجير كرينات موبيل بسعات رفع مختلفة مع مشغلين محترفين.", descriptionEn: "Mobile crane rental with different capacities and qualified operators.", image: "https://images.unsplash.com/photo-1581093196277-9f608bb3f6ad?auto=format&fit=crop&w=1200&q=80" },
  { id: 6, titleAr: "رافعة شوكية ديزل 3 طن", titleEn: "3 Ton Diesel Forklift", descriptionAr: "رافعة شوكية ديزل 3 طن مناسبة للأعمال الخارجية والمستودعات.", descriptionEn: "3 ton diesel forklift for outdoor and warehouse work.", image: "https://images.unsplash.com/photo-1704984218681-3ad04beaf67b?auto=format&fit=crop&w=1200&q=80" },
  { id: 7, titleAr: "بوبكات S450", titleEn: "Bobcat S450", descriptionAr: "صغير وقوي للأماكن الضيقة.", descriptionEn: "Compact and strong for tight spaces.", image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=1200&q=80" },
  { id: 8, titleAr: "بوم لفت تلسكوبي 22 متر", titleEn: "22m Telescopic Boom Lift", descriptionAr: "وصول مباشر وسريع للارتفاعات.", descriptionEn: "Direct and fast access to heights.", image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=1200&q=80" },
  { id: 9, titleAr: "رينش ترك 1.6 طن للايجار في جدة والرياض", titleEn: "1.6 Ton Reach Truck Rental", descriptionAr: "رافعة رينش ترك للأماكن الضيقة والتخزين العالي.", descriptionEn: "Reach truck rental for narrow aisles and high storage.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" },
  { id: 10, titleAr: "تأجير كرين سطحه 10 طن في الدمام", titleEn: "10 Ton Flatbed Crane Rental", descriptionAr: "نقل ورفع في نفس الوقت.", descriptionEn: "Transport and lifting in one service.", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80" }
];

export const contactInfo: ContactInfo = {
  phone: DISPLAY_PHONE,
  email: DISPLAY_EMAIL,
  locationAr: "المملكة العربية السعودية",
  locationEn: "Saudi Arabia",
  hoursAr: "السبت - الخميس، 8 صباحاً - 8 مساءً",
  hoursEn: "Saturday - Thursday, 8 AM - 8 PM"
};

export const whatsappMessages: Record<Locale, string> = {
  ar: "مرحباً، أود الاستفسار عن تأجير الرافعات والمعدات من شركة رافعات النصر.",
  en: "Hello, I would like to inquire about crane and equipment rental from Al Nasr."
};
