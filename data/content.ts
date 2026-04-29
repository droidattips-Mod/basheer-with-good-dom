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

export const translations: Record<Locale, LocaleContent> = {
  ar: {
    dir: "rtl",
    brandName: "بُنيان",
    nav: [
      { id: "home", href: "#home", label: "الرئيسية" },
      { id: "equipment", href: "#equipment", label: "المعدات" },
      { id: "services", href: "#services", label: "خدماتنا" },
      { id: "about", href: "#about", label: "من نحن" },
      { id: "contact", href: "#contact", label: "اتصل بنا" }
    ],
    hero: {
      title: "بُنيان للمقاولات وتأجير الرافعات",
      highlight: "تأجير الرافعات والمعدات الثقيلة",
      subtitle:
        "نوفر حلولاً متكاملة في المقاولات وتأجير الرافعات والمعدات الثقيلة لدعم مشاريعكم بكفاءة وأمان في جميع أنحاء المملكة العربية السعودية.",
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
      { title: "خبرة موثوقة", description: "فريق متخصص بخبرة طويلة في المقاولات وتشغيل الرافعات والمعدات الثقيلة." },
      { title: "سرعة في التنفيذ", description: "نلتزم بتوفير المعدات المناسبة في الوقت المحدد لضمان استمرارية المشروع." },
      { title: "حلول آمنة", description: "معدات حديثة يتم فحصها وصيانتها بانتظام لضمان أعلى معايير السلامة." }
    ],
    equipment: {
      label: "معدات بُنيان",
      title: "جميع المعدات المتاحة",
      subtitle: "اختر المعدة المناسبة لمشروعك من مجموعتنا المتنوعة من الرافعات والمعدات الثقيلة.",
      availability: "متاح",
      requestNow: "اطلب الآن"
    },
    services: {
      label: "خدمات احترافية",
      title: "بعض من خدماتنا",
      subtitle: "نقدم حلولاً متكاملة لدعم المشاريع الإنشائية والصناعية.",
      cta: "اطلب الخدمة"
    },
    about: {
      label: "عن بُنيان",
      title: "من نحن",
      text: "بُنيان للمقاولات وتأجير الرافعات شركة سعودية متخصصة في تقديم حلول المقاولات وتأجير الرافعات والمعدات الثقيلة. نعمل على دعم المشاريع الإنشائية والصناعية من خلال معدات موثوقة، فرق تشغيل مؤهلة، والتزام كامل بمعايير السلامة والجودة.",
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
      title: "بُنيان للمقاولات وتأجير الرافعات",
      description: "حلول موثوقة في المقاولات وتأجير الرافعات والمعدات الثقيلة.",
      linksTitle: "روابط سريعة",
      copyright: "جميع الحقوق محفوظة © بُنيان"
    },
    languageSwitchLabel: "English"
  },
  en: {
    dir: "ltr",
    brandName: "Bunyan",
    nav: [
      { id: "home", href: "#home", label: "Home" },
      { id: "equipment", href: "#equipment", label: "Equipment" },
      { id: "services", href: "#services", label: "Services" },
      { id: "about", href: "#about", label: "About" },
      { id: "contact", href: "#contact", label: "Contact Us" }
    ],
    hero: {
      title: "Bunyan Contracting & Crane Rental",
      highlight: "Crane & Heavy Equipment Rental",
      subtitle:
        "We provide integrated contracting, crane rental, and heavy equipment solutions to support your projects safely and efficiently across Saudi Arabia.",
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
      { title: "Trusted Experience", description: "A specialized team with long experience in contracting, cranes, and heavy equipment operation." },
      { title: "Fast Execution", description: "We provide the right equipment on time to keep your project moving." },
      { title: "Safe Solutions", description: "Modern equipment inspected and maintained regularly to meet high safety standards." }
    ],
    equipment: {
      label: "Bunyan Equipment",
      title: "Available Equipment",
      subtitle: "Choose the right machine for your project from our wide range of cranes and heavy equipment.",
      availability: "Available",
      requestNow: "Request Now"
    },
    services: {
      label: "Professional Services",
      title: "Some of Our Services",
      subtitle: "We provide integrated solutions to support construction and industrial projects.",
      cta: "Request Service"
    },
    about: {
      label: "About Bunyan",
      title: "About Us",
      text: "Bunyan Contracting & Crane Rental is a Saudi company specialized in contracting solutions, crane rental, and heavy equipment services. We support construction and industrial projects through reliable equipment, qualified operation teams, and a strong commitment to safety and quality standards.",
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
      title: "Bunyan Contracting & Crane Rental",
      description: "Reliable solutions in contracting, crane rental, and heavy equipment services.",
      linksTitle: "Quick Links",
      copyright: "All rights reserved © Bunyan"
    },
    languageSwitchLabel: "عربي"
  }
};

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: "forklifts",
    nameAr: "الرافعات الشوكية",
    nameEn: "Forklifts",
    items: [
      { id: 1, nameAr: "رافعة شوكية 3 طن", nameEn: "3 Ton Forklift", descriptionAr: "مناسبة للمستودعات ومواقع العمل المتوسطة.", descriptionEn: "Ideal for warehouses and medium-duty sites.", image: "https://images.unsplash.com/photo-1717691237260-854f667f7211?auto=format&fit=crop&w=1200&q=80" },
      { id: 2, nameAr: "رافعة شوكية 5 طن", nameEn: "5 Ton Forklift", descriptionAr: "قدرة أعلى لنقل الأحمال الثقيلة بكفاءة.", descriptionEn: "Higher capacity for heavy material handling.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80" },
      { id: 3, nameAr: "رافعة شوكية ديزل", nameEn: "Diesel Forklift", descriptionAr: "أداء قوي للأعمال الخارجية الشاقة.", descriptionEn: "Powerful outdoor performance for tough tasks.", image: "https://images.unsplash.com/photo-1704984218681-3ad04beaf67b?auto=format&fit=crop&w=1200&q=80" },
      { id: 4, nameAr: "رافعة شوكية كهربائية", nameEn: "Electric Forklift", descriptionAr: "حل اقتصادي وهادئ للبيئات الداخلية.", descriptionEn: "Quiet and efficient for indoor operations.", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=80" }
    ]
  },
  {
    id: "scissor",
    nameAr: "الرافعات المقصية",
    nameEn: "Scissor Lifts",
    items: [
      { id: 5, nameAr: "رافعة مقصية كهربائية", nameEn: "Electric Scissor Lift", descriptionAr: "مثالية لأعمال الصيانة والتركيب الداخلي.", descriptionEn: "Great for indoor maintenance and installation.", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80" },
      { id: 6, nameAr: "رافعة مقصية ديزل", nameEn: "Diesel Scissor Lift", descriptionAr: "قوية للاستخدام في مواقع المشاريع المفتوحة.", descriptionEn: "Rugged choice for open construction sites.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" },
      { id: 7, nameAr: "رافعة مقصية داخلية", nameEn: "Indoor Scissor Lift", descriptionAr: "تصميم مدمج للحركة في المساحات الضيقة.", descriptionEn: "Compact design for restricted indoor areas.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80" }
    ]
  },
  {
    id: "telescopic",
    nameAr: "الرافعات التلسكوبية",
    nameEn: "Telescopic Cranes",
    items: [
      { id: 8, nameAr: "رافعة تلسكوبية 25 طن", nameEn: "25 Ton Telescopic Crane", descriptionAr: "حل مرن للمشاريع متوسطة الحجم.", descriptionEn: "Flexible lifting for medium-size projects.", image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80" },
      { id: 9, nameAr: "رافعة تلسكوبية 50 طن", nameEn: "50 Ton Telescopic Crane", descriptionAr: "توازن مثالي بين القوة وسهولة الحركة.", descriptionEn: "Balanced power and mobility for site operations.", image: "https://images.unsplash.com/photo-1581093196277-9f608bb3f6ad?auto=format&fit=crop&w=1200&q=80" },
      { id: 10, nameAr: "رافعة تلسكوبية 100 طن", nameEn: "100 Ton Telescopic Crane", descriptionAr: "قدرة رفع عالية للمشاريع الكبرى.", descriptionEn: "High-capacity lifting for large-scale projects.", image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=80" }
    ]
  },
  {
    id: "boom",
    nameAr: "رافعات السلة",
    nameEn: "Boom Lifts",
    items: [
      { id: 11, nameAr: "رافعة سلة مفصلية", nameEn: "Articulating Boom Lift", descriptionAr: "وصول مرن للأماكن المرتفعة والزوايا الصعبة.", descriptionEn: "Flexible access to heights and tight angles.", image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80" },
      { id: 12, nameAr: "رافعة سلة تلسكوبية", nameEn: "Telescopic Boom Lift", descriptionAr: "امتداد أفقي طويل للمهام الخارجية.", descriptionEn: "Long horizontal reach for exterior projects.", image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=1200&q=80" },
      { id: 13, nameAr: "رافعة سلة كهربائية", nameEn: "Electric Boom Lift", descriptionAr: "فعالة وصديقة للبيئات الداخلية.", descriptionEn: "Efficient and clean for indoor jobs.", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" }
    ]
  },
  {
    id: "generators",
    nameAr: "المولدات",
    nameEn: "Generators",
    items: [
      { id: 14, nameAr: "مولد كهرباء 100 KVA", nameEn: "100 KVA Generator", descriptionAr: "طاقة مستقرة للمشاريع الصغيرة والمتوسطة.", descriptionEn: "Stable power for small to medium projects.", image: "https://images.unsplash.com/photo-1581093588401-22d1b9d7f349?auto=format&fit=crop&w=1200&q=80" },
      { id: 15, nameAr: "مولد كهرباء 250 KVA", nameEn: "250 KVA Generator", descriptionAr: "حل موثوق لتشغيل المعدات الثقيلة.", descriptionEn: "Reliable power support for heavy operations.", image: "https://images.unsplash.com/photo-1489516408517-0c0a15662682?auto=format&fit=crop&w=1200&q=80" },
      { id: 16, nameAr: "مولد كهرباء 500 KVA", nameEn: "500 KVA Generator", descriptionAr: "مصمم للاحتياج العالي في المشاريع الضخمة.", descriptionEn: "Designed for high-load and major sites.", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80" }
    ]
  },
  {
    id: "compressors",
    nameAr: "الضواغط",
    nameEn: "Air Compressors",
    items: [
      { id: 17, nameAr: "ضاغط هواء متنقل", nameEn: "Mobile Air Compressor", descriptionAr: "سهل النقل وداعم لأعمال التشغيل اليومية.", descriptionEn: "Portable and efficient for daily operations.", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80" },
      { id: 18, nameAr: "ضاغط هواء ديزل", nameEn: "Diesel Air Compressor", descriptionAr: "قدرة مستمرة لأعمال المواقع المفتوحة.", descriptionEn: "Continuous airflow for demanding jobsites.", image: "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&w=1200&q=80" }
    ]
  },
  {
    id: "loaders",
    nameAr: "الشيولات",
    nameEn: "Wheel Loaders",
    items: [
      { id: 19, nameAr: "شيول صغير", nameEn: "Small Wheel Loader", descriptionAr: "مناسب للأعمال السريعة في المساحات المحدودة.", descriptionEn: "Perfect for compact and fast site tasks.", image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=1200&q=80" },
      { id: 20, nameAr: "شيول متوسط", nameEn: "Medium Wheel Loader", descriptionAr: "اختيار متوازن لمشاريع البنية التحتية.", descriptionEn: "Balanced choice for infrastructure projects.", image: "https://images.unsplash.com/photo-1556172732-9f74a277a6f0?auto=format&fit=crop&w=1200&q=80" },
      { id: 21, nameAr: "شيول كبير", nameEn: "Large Wheel Loader", descriptionAr: "قوة تحميل عالية للمهام الثقيلة.", descriptionEn: "High loading performance for heavy-duty work.", image: "https://images.unsplash.com/photo-1621193793262-4127d9855c91?auto=format&fit=crop&w=1200&q=80" }
    ]
  },
  {
    id: "transport",
    nameAr: "النقل والتريلات",
    nameEn: "Transport & Trailers",
    items: [
      { id: 22, nameAr: "تريلا نقل معدات", nameEn: "Equipment Transport Trailer", descriptionAr: "نقل موثوق للمعدات بين مواقع العمل.", descriptionEn: "Dependable hauling between project sites.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" },
      { id: 23, nameAr: "سطحه نقل معدات", nameEn: "Flatbed Equipment Transport", descriptionAr: "حلول نقل مرنة وآمنة حسب نوع المعدة.", descriptionEn: "Flexible and safe transport by equipment type.", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80" },
      { id: 24, nameAr: "لوبد نقل معدات ثقيلة", nameEn: "Lowbed Heavy Equipment Transport", descriptionAr: "مخصص لنقل المعدات الثقيلة والأحجام الكبيرة.", descriptionEn: "Specialized lowbed transfer for heavy loads.", image: "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1200&q=80" }
    ]
  }
];

export const services: ServiceItem[] = [
  { id: 1, titleAr: "تأجير الرافعات", titleEn: "Crane Rental", descriptionAr: "نوفر رافعات بمقاسات وقدرات مختلفة لتلبية احتياجات المشاريع.", descriptionEn: "We provide cranes of different sizes and capacities for project needs.", image: "https://images.unsplash.com/photo-1581090700227-1e8e8f674ce8?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, titleAr: "تأجير المعدات الثقيلة", titleEn: "Heavy Equipment Rental", descriptionAr: "مجموعة متنوعة من المعدات الثقيلة الجاهزة للعمل في مختلف المواقع.", descriptionEn: "A wide range of heavy equipment ready for use across different sites.", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80" },
  { id: 3, titleAr: "نقل المعدات", titleEn: "Equipment Transport", descriptionAr: "خدمات نقل آمنة للمعدات داخل وخارج مواقع العمل.", descriptionEn: "Safe equipment transportation services inside and outside job sites.", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80" },
  { id: 4, titleAr: "الصيانة والتشغيل", titleEn: "Maintenance & Operation", descriptionAr: "فرق فنية متخصصة لتشغيل وصيانة المعدات بكفاءة.", descriptionEn: "Specialized technical teams for efficient equipment operation and maintenance.", image: "https://images.unsplash.com/photo-1489516408517-0c0a15662682?auto=format&fit=crop&w=1200&q=80" },
  { id: 5, titleAr: "دعم فني 24/7", titleEn: "24/7 Technical Support", descriptionAr: "دعم متواصل لضمان استمرارية العمل وتقليل التوقفات.", descriptionEn: "Continuous support to keep your work running and reduce downtime.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80" },
  { id: 6, titleAr: "حلول المشاريع", titleEn: "Project Solutions", descriptionAr: "حلول مخصصة للمقاولين والشركات حسب متطلبات كل مشروع.", descriptionEn: "Customized solutions for contractors and companies according to project needs.", image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=80" }
];

export const contactInfo: ContactInfo = {
  phone: "0500000000",
  email: "info@bunyan.com",
  locationAr: "المملكة العربية السعودية",
  locationEn: "Saudi Arabia",
  hoursAr: "السبت - الخميس، 8 صباحاً - 8 مساءً",
  hoursEn: "Saturday - Thursday, 8 AM - 8 PM"
};

export const whatsappMessages: Record<Locale, string> = {
  ar: "مرحباً، أود الاستفسار عن تأجير الرافعات والمعدات من شركة بُنيان.",
  en: "Hello, I would like to inquire about crane and equipment rental from Bunyan."
};
