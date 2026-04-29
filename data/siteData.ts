export type Equipment = {
  id: number;
  name: string;
  category: string;
  image: string;
};

export type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "المعدات", href: "#equipment" },
  { label: "خدماتنا", href: "#services" },
  { label: "من نحن", href: "#about" },
  { label: "تواصل معنا", href: "#contact" }
];

export const stats = [
  { label: "عميل", value: "+500" },
  { label: "سنة خبرة", value: "+15" },
  { label: "دعم فني", value: "24/7" },
  { label: "معدة", value: "+200" }
];

export const features = [
  {
    title: "خبرة طويلة",
    description: "نعمل بخبرة ممتدة في قطاع المقاولات وتأجير المعدات لمختلف أنواع المشاريع."
  },
  {
    title: "سرعة في التنفيذ",
    description: "نوفر المعدات بسرعة مع جاهزية تشغيل عالية لتقليل وقت التوقف في موقع العمل."
  },
  {
    title: "أسعار تنافسية",
    description: "حلول مرنة وباقات تأجير تناسب ميزانيات المشاريع الصغيرة والكبيرة."
  }
];

export const equipments: Equipment[] = [
  { id: 1, name: "رافعة شوكية 3 طن", category: "الرافعات الشوكية", image: "https://images.unsplash.com/photo-1581091215367-59ab6dcef8c9?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, name: "رافعة شوكية 5 طن", category: "الرافعات الشوكية", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80" },
  { id: 3, name: "رافعة مقصية كهربائية", category: "الرافعات المقصية", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80" },
  { id: 4, name: "مولد كهرباء 100 KVA", category: "المولدات", image: "https://images.unsplash.com/photo-1581093588401-22d1b9d7f349?auto=format&fit=crop&w=1200&q=80" },
  { id: 5, name: "مولد كهرباء 250 KVA", category: "المولدات", image: "https://images.unsplash.com/photo-1581093196277-9f608bb3f6ad?auto=format&fit=crop&w=1200&q=80" },
  { id: 6, name: "ضاغط هواء متنقل", category: "الضواغط", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80" },
  { id: 7, name: "شيول صغير", category: "الشيولات", image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=1200&q=80" },
  { id: 8, name: "تريلا نقل معدات", category: "التريلات", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" },
  { id: 9, name: "ونش هيدروليك", category: "الونشات", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80" },
  { id: 10, name: "رافعة سلة", category: "المعدات الثقيلة", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80" }
];

export const services: Service[] = [
  {
    id: 1,
    title: "تأجير الرافعات",
    description: "نوفر رافعات متنوعة للمشاريع الإنشائية والصناعية بمشغلين ذوي كفاءة عالية.",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "تأجير المعدات الثقيلة",
    description: "أسطول متكامل من المعدات الثقيلة الجاهزة للعمل في جميع مناطق المملكة.",
    image: "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "نقل المعدات",
    description: "خدمة نقل آمنة وسريعة للمعدات بين مواقع المشاريع وفق أعلى معايير السلامة.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "صيانة وتشغيل",
    description: "فريق فني متخصص لصيانة المعدات وضمان أفضل أداء تشغيلي أثناء فترة التأجير.",
    image: "https://images.unsplash.com/photo-1489516408517-0c0a15662682?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    title: "دعم فني على مدار الساعة",
    description: "استجابة سريعة على مدار اليوم لمعالجة أي ملاحظات تشغيلية في مواقع العمل.",
    image: "https://images.unsplash.com/photo-1581090700227-1e8e8f674ce8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    title: "حلول للمشاريع الإنشائية",
    description: "نساعدك في اختيار المعدات المناسبة وفق نطاق المشروع والجدول الزمني المطلوب.",
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=80"
  }
];
