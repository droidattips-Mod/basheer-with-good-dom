import type { Locale } from "@/types/site";

export type EquipmentSpec = {
  capacity?: string;
  height?: string;
  powerType?: string;
};

export type EquipmentDetailData = {
  slug: string;
  categoryId: string;
  categoryNameAr: string;
  categoryNameEn: string;
  nameAr: string;
  nameEn: string;
  image: string;
  descriptionAr: string;
  descriptionEn: string;
  specs: EquipmentSpec;
  availableCities: string[];
  pricingDaily: number;
  pricingMonthly: number;
  relatedSlugs: string[];
};

type FAQItem = { q: string; a: string };

const faqAr: FAQItem[] = [
  {
    q: "هل تتوفر صيانة لهذه المعدة؟",
    a: "نعم، جميع معداتنا يتم فحصها وصيانتها بشكل منتظم لضمان أعلى مستويات الأمان والأداء."
  },
  {
    q: "هل تتوفر هذه المعدة في منطقتي؟",
    a: "نوفر خدماتنا في معظم مناطق المملكة العربية السعودية. تواصل معنا للتحقق من التوفر في منطقتك."
  },
  {
    q: "كيف أحصل على أفضل سعر لهذه المعدة؟",
    a: "تواصل معنا مباشرة عبر واتساب أو من خلال نموذج الطلب للحصول على أفضل عرض سعر مناسب لاحتياجاتك."
  }
];

const faqEn: FAQItem[] = [
  {
    q: "Is maintenance available for this equipment?",
    a: "Yes, all our equipment is inspected and maintained regularly to ensure the highest levels of safety and performance."
  },
  {
    q: "Is this equipment available in my area?",
    a: "We serve most regions across Saudi Arabia. Contact us to check availability in your area."
  },
  {
    q: "How do I get the best price for this equipment?",
    a: "Contact us directly via WhatsApp or through the request form to get the best quote suited to your needs."
  }
];

export const equipmentFaq: Record<Locale, FAQItem[]> = { ar: faqAr, en: faqEn };

export const equipmentDetails: EquipmentDetailData[] = [
  // ─── FORKLIFTS ───────────────────────────────────────────────────────────────
  {
    slug: "forklift-toyota-3ton-diesel",
    categoryId: "forklifts",
    categoryNameAr: "الرافعات الشوكية",
    categoryNameEn: "Forklifts",
    nameAr: "رافعة شوكية تويوتا 3 طن – ديزل",
    nameEn: "Toyota 3 Ton Diesel Forklift",
    image: "/images/equipment/forklift-toyota-3ton-diesel.jpg",
    descriptionAr:
      "أداء قوي واعتمادية عالية من تويوتا لتلبية متطلبات العمل الشاق داخل المستودعات والمواقع الصناعية. مصممة لتوفير الكفاءة والسرعة مع أعلى معايير السلامة.",
    descriptionEn:
      "Powerful performance and high reliability from Toyota to meet the demands of heavy work inside warehouses and industrial sites. Designed to provide efficiency and speed with the highest safety standards.",
    specs: { capacity: "3 طن", height: "4.5 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 300,
    pricingMonthly: 6500,
    relatedSlugs: ["forklift-komatsu-5ton", "forklift-mitsubishi-5ton", "forklift-linde-5ton-electric"]
  },
  {
    slug: "forklift-komatsu-5ton",
    categoryId: "forklifts",
    categoryNameAr: "الرافعات الشوكية",
    categoryNameEn: "Forklifts",
    nameAr: "رافعة شوكية كوماتسو 5 طن",
    nameEn: "Komatsu 5 Ton Forklift",
    image: "/images/equipment/forklift-komatsu-5ton.jpg",
    descriptionAr:
      "رافعة احترافية من كوماتسو بقدرة رفع 5 طن، مصممة للأعمال الثقيلة والمشاريع الكبرى. أداء عالٍ، ثبات قوي، وكفاءة تضمن لك إنجاز العمل بسرعة وأمان في أصعب الظروف.",
    descriptionEn:
      "A professional Komatsu forklift with 5-ton lifting capacity, designed for heavy-duty work and large projects. High performance, strong stability, and efficiency to complete the job quickly and safely in the most challenging conditions.",
    specs: { capacity: "5 طن", height: "4.7 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 400,
    pricingMonthly: 8500,
    relatedSlugs: ["forklift-toyota-3ton-diesel", "forklift-mitsubishi-5ton", "forklift-linde-5ton-electric"]
  },
  {
    slug: "forklift-mitsubishi-5ton",
    categoryId: "forklifts",
    categoryNameAr: "الرافعات الشوكية",
    categoryNameEn: "Forklifts",
    nameAr: "رافعة شوكية ميتسوبيشي 5 طن",
    nameEn: "Mitsubishi 5 Ton Forklift",
    image: "/images/equipment/forklift-mitsubishi-5ton.jpg",
    descriptionAr:
      "مصممة لرفع ونقل الأحمال الثقيلة بكفاءة عالية، وتتميز بأداء قوي واعتمادية ممتازة تناسب المستودعات، المصانع، وساحات التخزين الخارجية.",
    descriptionEn:
      "Designed for lifting and transporting heavy loads with high efficiency, featuring powerful performance and excellent reliability suitable for warehouses, factories, and outdoor storage yards.",
    specs: { capacity: "5 طن", height: "4.7 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 400,
    pricingMonthly: 8500,
    relatedSlugs: ["forklift-toyota-3ton-diesel", "forklift-komatsu-5ton", "forklift-linde-5ton-electric"]
  },
  {
    slug: "forklift-linde-5ton-electric",
    categoryId: "forklifts",
    categoryNameAr: "الرافعات الشوكية",
    categoryNameEn: "Forklifts",
    nameAr: "رافعة شوكية ليند 5 طن – كهرباء",
    nameEn: "Linde 5 Ton Electric Forklift",
    image: "/images/equipment/forklift-linde-5ton-electric.jpg",
    descriptionAr:
      "حل مثالي لرفع ونقل البضائع بكفاءة عالية داخل المخازن والمرافق الصناعية، مع تشغيل منخفض الضوضاء وانبعاثات صفرية.",
    descriptionEn:
      "An ideal solution for lifting and transporting goods with high efficiency inside warehouses and industrial facilities, with low noise operation and zero emissions.",
    specs: { capacity: "5 طن", height: "5.0 متر", powerType: "كهرباء" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 450,
    pricingMonthly: 9000,
    relatedSlugs: ["forklift-toyota-3ton-diesel", "forklift-komatsu-5ton", "forklift-mitsubishi-5ton"]
  },

  // ─── SCISSOR LIFTS ───────────────────────────────────────────────────────────
  {
    slug: "scissor-lift-gtjz10-10m",
    categoryId: "scissor",
    categoryNameAr: "الرافعات المقصية",
    categoryNameEn: "Scissor Lifts",
    nameAr: "سيزرلفت GTJZ10 – 10 متر – كهرباء",
    nameEn: "GTJZ10 Scissor Lift – 10m – Electric",
    image: "/images/equipment/scissor-lift-gtjz10-10m.jpg",
    descriptionAr:
      "رافعة مقصية (سيزر لفت GTJZ10 – كهرباء – 10 متر) تُعد خياراً عملياً وفعّالاً لتنفيذ أعمال الارتفاعات المتوسطة بأعلى مستويات الأمان والكفاءة. تتميز بارتفاع عمل يصل إلى حوالي 10–12 متر مع منصة رفع واسعة توفر مساحة مناسبة لرفع الفنيين والمعدات، مما يساعد على إنجاز أعمال الصيانة، التركيبات، والتنظيف بسرعة ودقة. تعتمد على نظام تشغيل كهربائي هادئ وخالٍ من الانبعاثات، مما يجعلها مثالية للعمل داخل المستودعات، المعارض، المولات التجارية، والمصانع.",
    descriptionEn:
      "The GTJZ10 electric scissor lift is a practical and efficient choice for mid-height work with top safety and efficiency standards. Features a working height of 10–12 meters with a wide platform suitable for technicians and equipment. Quiet electric operation with zero emissions, ideal for warehouses, exhibitions, malls, and factories.",
    specs: { capacity: "320 كغ", height: "10 متر", powerType: "كهرباء" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 350,
    pricingMonthly: 7000,
    relatedSlugs: ["scissor-lift-jlg-10m", "scissor-lift-jlg-8m", "scissor-lift-zoomlion-7m"]
  },
  {
    slug: "scissor-lift-jlg-10m",
    categoryId: "scissor",
    categoryNameAr: "الرافعات المقصية",
    categoryNameEn: "Scissor Lifts",
    nameAr: "سيزرلفت JLG – 10 متر – كهرباء",
    nameEn: "JLG Scissor Lift – 10m – Electric",
    image: "/images/equipment/scissor-lift-jlg-10m.jpg",
    descriptionAr:
      "رافعة مقصية (سيزر لفت 10 – JLG متر – كهرباء) تُعد من أفضل الحلول العملية لأعمال الارتفاعات المتوسطة داخل المواقع التي تتطلب دقة وأمان عالٍ. توفر ارتفاع عمل يصل إلى 10 متر تقريباً مع منصة واسعة وقدرة تحميل مناسبة لرفع الفنيين والأدوات بكل سهولة، مما يجعلها مثالية لأعمال الصيانة، التركيبات، المستودعات، وتركيب الأنظمة الكهربائية والتكييف.",
    descriptionEn:
      "The JLG 10m electric scissor lift is one of the best practical solutions for mid-height work in sites requiring precision and high safety. Provides a working height of approximately 10 meters with a wide platform, ideal for maintenance, installations, warehouses, and electrical or HVAC system installations.",
    specs: { capacity: "320 كغ", height: "10 متر", powerType: "كهرباء" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 350,
    pricingMonthly: 7000,
    relatedSlugs: ["scissor-lift-gtjz10-10m", "scissor-lift-jlg-8m", "scissor-lift-zoomlion-7m"]
  },
  {
    slug: "scissor-lift-zoomlion-7m",
    categoryId: "scissor",
    categoryNameAr: "الرافعات المقصية",
    categoryNameEn: "Scissor Lifts",
    nameAr: "سيزرلفت Zoomlion – 7 متر – كهرباء",
    nameEn: "Zoomlion Scissor Lift – 7m – Electric",
    image: "/images/equipment/scissor-lift-zoomlion-7m.jpg",
    descriptionAr:
      "رافعة مقصية (سيزر لفت 7 – Zoomlion متر – كهرباء) تُعد خياراً مثالياً لأعمال الارتفاعات المنخفضة والمتوسطة التي تتطلب حركة مرنة وأداء آمن داخل المواقع المختلفة. توفر ارتفاع عمل يصل إلى 7 أمتار تقريباً، مناسبة لأعمال الصيانة، تركيب الإنارة، المستودعات، المراكز التجارية، وأعمال التشطيب الداخلي. تعتمد على نظام تشغيل كهربائي هادئ وخالٍ من الانبعاثات.",
    descriptionEn:
      "The Zoomlion 7m electric scissor lift is an ideal choice for low to mid-height work requiring flexible movement and safe performance. Provides a working height of approximately 7 meters, suitable for maintenance, lighting installation, warehouses, commercial centers, and interior finishing. Quiet electric operation with zero emissions.",
    specs: { capacity: "240 كغ", height: "7 متر", powerType: "كهرباء" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 280,
    pricingMonthly: 5500,
    relatedSlugs: ["scissor-lift-genie-6m", "scissor-lift-jlg-8m", "scissor-lift-jlg-10m"]
  },
  {
    slug: "scissor-lift-genie-6m",
    categoryId: "scissor",
    categoryNameAr: "الرافعات المقصية",
    categoryNameEn: "Scissor Lifts",
    nameAr: "سيزرلفت Genie – 6 متر – كهرباء",
    nameEn: "Genie Scissor Lift – 6m – Electric",
    image: "/images/equipment/scissor-lift-genie-6m.jpg",
    descriptionAr:
      "رافعة مقصية (سيزر لفت 6 – Genie متر – كهرباء) تُعد خياراً عملياً ومثالياً لأعمال الارتفاعات المنخفضة داخل المواقع التي تتطلب دقة وسهولة في الحركة. توفر ارتفاع عمل يصل إلى 6 أمتار تقريباً، مناسبة لأعمال الصيانة السريعة، تركيب الإنارة، أعمال المستودعات، المعارض، والمشاريع الداخلية المختلفة.",
    descriptionEn:
      "The Genie 6m electric scissor lift is a practical and ideal choice for low-height work in sites requiring precision and easy maneuverability. Provides a working height of approximately 6 meters, suitable for quick maintenance, lighting installation, warehouse work, exhibitions, and various interior projects.",
    specs: { capacity: "220 كغ", height: "6 متر", powerType: "كهرباء" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 250,
    pricingMonthly: 5000,
    relatedSlugs: ["scissor-lift-zoomlion-7m", "scissor-lift-jlg-8m", "scissor-lift-jlg-10m"]
  },
  {
    slug: "scissor-lift-jlg-18m-diesel",
    categoryId: "scissor",
    categoryNameAr: "الرافعات المقصية",
    categoryNameEn: "Scissor Lifts",
    nameAr: "سيزرلفت JLG/MG – 18 متر – ديزل",
    nameEn: "JLG/MG Scissor Lift – 18m – Diesel",
    image: "/images/equipment/scissor-lift-jlg-18m-diesel.jpg",
    descriptionAr:
      "رافعة مقصية (سيزر لفت 18 – JLG/MG متر – ديزل) تُعد من المعدات القوية المصممة لتنفيذ أعمال الارتفاعات العالية في المشاريع الكبيرة والمواقع الخارجية بكفاءة عالية. توفر ارتفاع عمل يصل إلى 18 متر تقريباً مع منصة واسعة وقدرة تحميل ممتازة، مثالية لأعمال الإنشاءات، التركيبات الخارجية، صيانة الواجهات، وأعمال المشاريع الصناعية. تعتمد على محرك ديزل قوي يوفر أداءً عالياً في المواقع المفتوحة والبيئات الصعبة.",
    descriptionEn:
      "The JLG/MG 18m diesel scissor lift is powerful equipment designed for high-altitude work in large projects and outdoor sites. Provides a working height of approximately 18 meters with a wide platform and excellent load capacity, ideal for construction, outdoor installations, facade maintenance, and industrial projects. Powered by a strong diesel engine for high performance in open sites and tough environments.",
    specs: { capacity: "680 كغ", height: "18 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 600,
    pricingMonthly: 12000,
    relatedSlugs: ["scissor-lift-jlg-10m", "scissor-lift-gtjz10-10m", "scissor-lift-jlg-8m"]
  },
  {
    slug: "scissor-lift-jlg-8m",
    categoryId: "scissor",
    categoryNameAr: "الرافعات المقصية",
    categoryNameEn: "Scissor Lifts",
    nameAr: "سيزرلفت JLG – 8 متر – كهرباء",
    nameEn: "JLG Scissor Lift – 8m – Electric",
    image: "/images/equipment/scissor-lift-jlg-8m.jpg",
    descriptionAr:
      "رافعة مقصية (سيزر لفت 8 – JLG متر – كهرباء) تُعد خياراً عملياً وفعالاً لأعمال الارتفاعات المتوسطة داخل المواقع التي تتطلب أداءً آمناً وحركة مرنة. توفر ارتفاع عمل يصل إلى 8 أمتار تقريباً مع منصة واسعة، مثالية لأعمال الصيانة، تركيب الإنارة، المستودعات، المراكز التجارية، وأعمال التشطيبات الداخلية.",
    descriptionEn:
      "The JLG 8m electric scissor lift is a practical and effective choice for mid-height work in sites requiring safe performance and flexible movement. Provides a working height of approximately 8 meters with a wide platform, ideal for maintenance, lighting installation, warehouses, commercial centers, and interior finishing work.",
    specs: { capacity: "230 كغ", height: "8 متر", powerType: "كهرباء" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 300,
    pricingMonthly: 6000,
    relatedSlugs: ["scissor-lift-genie-6m", "scissor-lift-zoomlion-7m", "scissor-lift-jlg-10m"]
  }
];

export function getEquipmentBySlug(slug: string): EquipmentDetailData | undefined {
  return equipmentDetails.find((e) => e.slug === slug);
}

export function getRelatedEquipment(slugs: string[]): EquipmentDetailData[] {
  return slugs
    .map((s) => equipmentDetails.find((e) => e.slug === s))
    .filter(Boolean) as EquipmentDetailData[];
}
