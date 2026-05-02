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
    description: "نعمل بخبرة ممتدة في قطاع تأجير الرافعات والمعدات لمختلف أنواع المشاريع."
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
  { id: 1, name: "رافعة شوكية كوماتسو 5 طن", category: "الرافعات الشوكية", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, name: "رافعة شوكية تويوتا 3 طن - ديزل", category: "الرافعات الشوكية", image: "https://images.unsplash.com/photo-1717691237260-854f667f7211?auto=format&fit=crop&w=1200&q=80" },
  { id: 3, name: "رافعة مقصية جي ال جي 18 متر", category: "الرافعات المقصية", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80" },
  { id: 4, name: "كرين موبيل تادانو 50 طن", category: "الكرينات", image: "https://images.unsplash.com/photo-1581093196277-9f608bb3f6ad?auto=format&fit=crop&w=1200&q=80" },
  { id: 5, name: "بوبكات S450", category: "البوبكات", image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=1200&q=80" }
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
  }
];
