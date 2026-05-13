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
    image: "/images/equipment/forklift-komatsu-5ton.png",
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
    image: "/images/equipment/forklift-linde-5ton-electric.png",
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

  // ─── CRANES ──────────────────────────────────────────────────────────────────
  {
    slug: "crane-liebherr-100ton",
    categoryId: "cranes",
    categoryNameAr: "الكرينات",
    categoryNameEn: "Cranes",
    nameAr: "كرين ليبهر 100 طن",
    nameEn: "Liebherr Crane 100 Ton",
    image: "/images/equipment/crane-liebherr-100ton.jpg",
    descriptionAr:
      "كرين ليبهر 100 طن من أقوى الكرينات المتاحة للإيجار في المملكة، مصمم للمشاريع الكبرى التي تتطلب رفع أحمال استثنائية على ارتفاعات شاهقة. يتميز بذراع تلسكوبي طويل، نظام تحكم دقيق، وأداء موثوق في أصعب ظروف البناء والتركيب الصناعي.",
    descriptionEn:
      "The Liebherr 100-ton crane is among the most powerful cranes available for rent in Saudi Arabia, built for large-scale projects requiring exceptional lifts at great heights. Features an extended telescopic boom, precise control system, and reliable performance in the toughest construction and industrial installation conditions.",
    specs: { capacity: "100 طن", height: "60 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["crane-tadano-90ton", "crane-grove-60ton", "crane-kato-60ton"]
  },
  {
    slug: "crane-tadano-90ton",
    categoryId: "cranes",
    categoryNameAr: "الكرينات",
    categoryNameEn: "Cranes",
    nameAr: "كرين تادانو 90 طن",
    nameEn: "Tadano Crane 90 Ton",
    image: "/images/equipment/crane-tadano-90ton.jpg",
    descriptionAr:
      "كرين تادانو 90 طن حل متكامل لتأجير الكرينات في المشاريع الكبيرة، يجمع بين القوة والمرونة في الحركة. يوفر ذراعاً تلسكوبياً طويلاً وقدرة رفع عالية، مثالي لأعمال تركيب المعدات الثقيلة، رفع الهياكل الإنشائية، والمشاريع الصناعية في الرياض وجدة والدمام.",
    descriptionEn:
      "The Tadano 90-ton crane offers a complete crane rental solution for large-scale projects, combining power and mobility. Features a long telescopic boom and high lifting capacity, ideal for heavy equipment installation, structural lifting, and industrial projects across Riyadh, Jeddah, and Dammam.",
    specs: { capacity: "90 طن", height: "55 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["crane-liebherr-100ton", "crane-grove-60ton", "crane-tadano-40ton"]
  },
  {
    slug: "crane-grove-60ton",
    categoryId: "cranes",
    categoryNameAr: "الكرينات",
    categoryNameEn: "Cranes",
    nameAr: "كرين موبايل غروف 60 طن",
    nameEn: "Grove Mobile Crane 60 Ton",
    image: "/images/equipment/crane-grove-60ton.jpg",
    descriptionAr:
      "كرين موبايل غروف 60 طن يجمع بين قوة الرفع وسرعة التنقل بين المواقع، مما يجعله خياراً مثالياً لتأجير الكرينات في المشاريع المتعددة. يوفر مرونة عالية في التشغيل، مناسب لأعمال البناء، الصيانة الصناعية، وتركيب المعدات الثقيلة.",
    descriptionEn:
      "The Grove 60-ton mobile crane combines lifting power with fast site-to-site mobility, making it an ideal crane rental choice for multi-site projects. Offers high operational flexibility, suitable for construction, industrial maintenance, and heavy equipment installation.",
    specs: { capacity: "60 طن", height: "48 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["crane-kato-60ton", "crane-tadano-90ton", "crane-liebherr-100ton"]
  },
  {
    slug: "crane-kato-60ton",
    categoryId: "cranes",
    categoryNameAr: "الكرينات",
    categoryNameEn: "Cranes",
    nameAr: "كرين كاتو 60 طن",
    nameEn: "Kato Crane 60 Ton",
    image: "/images/equipment/crane-kato-60ton.jpg",
    descriptionAr:
      "كرين كاتو 60 طن رافعة موبايل قوية ومتنقلة، مثالية لأعمال الرفع الثقيل في مواقع البناء والمصانع. يتميز بذراع تلسكوبي متعدد الأقسام وتحكم دقيق، مما يجعله من أبرز خيارات تأجير الكرينات متوسطة الحمولة في المملكة العربية السعودية.",
    descriptionEn:
      "The Kato 60-ton crane is a powerful and mobile lifting unit, ideal for heavy lifts at construction sites and factories. Features a multi-section telescopic boom and precise controls, making it a top choice for mid-capacity crane rental in Saudi Arabia.",
    specs: { capacity: "60 طن", height: "44 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["crane-grove-60ton", "crane-kato-30ton", "crane-tadano-40ton"]
  },
  {
    slug: "crane-tadano-40ton",
    categoryId: "cranes",
    categoryNameAr: "الكرينات",
    categoryNameEn: "Cranes",
    nameAr: "كرين تادانو 40 طن",
    nameEn: "Tadano Crane 40 Ton",
    image: "/images/equipment/crane-tadano-40ton.jpg",
    descriptionAr:
      "كرين تادانو 40 طن خيار اقتصادي وفعّال لتأجير الكرينات في المشاريع متوسطة الحجم. يوفر أداءً موثوقاً وسرعة في الإعداد والتشغيل، مناسب لأعمال البناء التجاري، تركيب المعدات، ورفع الهياكل الإنشائية المتوسطة.",
    descriptionEn:
      "The Tadano 40-ton crane is a cost-effective choice for mid-scale crane rental projects. Delivers reliable performance and quick setup, suitable for commercial construction, equipment installation, and mid-size structural lifting.",
    specs: { capacity: "40 طن", height: "38 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["crane-kato-30ton", "crane-kato-60ton", "crane-tadano-90ton"]
  },
  {
    slug: "crane-kato-30ton",
    categoryId: "cranes",
    categoryNameAr: "الكرينات",
    categoryNameEn: "Cranes",
    nameAr: "كرين كاتو 30 طن",
    nameEn: "Kato Crane 30 Ton",
    image: "/images/equipment/crane-kato-30ton.jpg",
    descriptionAr:
      "كرين كاتو 30 طن رافعة خفيفة ومتنقلة بسرعة عالية في الإعداد، مثالية لتأجير الكرينات في المشاريع الصغيرة والمتوسطة. تتميز بسهولة الوصول إلى المواقع الضيقة وكفاءة عالية في رفع الأحمال المتوسطة للمباني السكنية والتجارية.",
    descriptionEn:
      "The Kato 30-ton crane is a lightweight, highly mobile unit with quick setup, ideal for crane rental in small to mid-size projects. Distinguished by its ability to access tight spaces and efficiently handle mid-weight lifts for residential and commercial buildings.",
    specs: { capacity: "30 طن", height: "33 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["crane-tadano-40ton", "crane-kato-60ton", "crane-grove-60ton"]
  },

  // ─── BOOM TRUCKS ─────────────────────────────────────────────────────────────
  {
    slug: "boom-truck-3ton",
    categoryId: "boom-trucks",
    categoryNameAr: "تأجير بوم تراك",
    categoryNameEn: "Boom Trucks Rental",
    nameAr: "بوم تراك 3 طن",
    nameEn: "Boom Truck 3 Ton",
    image: "/images/equipment/boom-truck-3ton.jpg",
    descriptionAr:
      "بوم تراك 3 طن رافعة متنقلة متعددة الاستخدامات، تجمع بين الرفع والنقل في آنٍ واحد. مثالية لتركيب اللافتات، توصيل الخامات لأدوار البناء، ووضع المعدات في الأماكن الضيقة. الذراع يمتد حتى 20 متراً بأداء موثوق في المواقع الحضرية والصناعية.",
    descriptionEn:
      "The 3-ton boom truck is a versatile mobile crane combining lifting and transport in one unit. Ideal for signage installation, material delivery to building floors, and placing equipment in tight spots. Boom extends to 20 meters with reliable performance in urban and industrial sites.",
    specs: { capacity: "3 طن", height: "20 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 400,
    pricingMonthly: 8500,
    relatedSlugs: ["boom-truck-5ton"]
  },
  {
    slug: "boom-truck-5ton",
    categoryId: "boom-trucks",
    categoryNameAr: "تأجير بوم تراك",
    categoryNameEn: "Boom Trucks Rental",
    nameAr: "بوم تراك 5 طن",
    nameEn: "Boom Truck 5 Ton",
    image: "/images/equipment/boom-truck-5ton.jpg",
    descriptionAr:
      "بوم تراك 5 طن حل مثالي لأعمال الرفع والتوصيل التي تتطلب قوة أكبر ومرونة عالية في الحركة. الذراع يصل إلى 20 متراً مع حمولة 5 طن، مناسب لمشاريع البناء، تركيب أنظمة التكييف الثقيلة، وتوصيل الخزانات والمعدات الصناعية.",
    descriptionEn:
      "The 5-ton boom truck is an ideal solution for lifting and delivery tasks requiring greater power and high mobility. Boom reaches 20 meters with a 5-ton capacity, suitable for construction projects, heavy HVAC installation, and delivery of tanks and industrial equipment.",
    specs: { capacity: "5 طن", height: "20 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 400,
    pricingMonthly: 8500,
    relatedSlugs: ["boom-truck-3ton"]
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
  },

  // ─── BOBCATS ─────────────────────────────────────────────────────────────────
  {
    slug: "bobcat-s100",
    categoryId: "bobcats",
    categoryNameAr: "البوبكات",
    categoryNameEn: "Bobcats",
    nameAr: "سكيد ستير بوبكات S100",
    nameEn: "Bobcat S100 Skid-Steer Loader",
    image: "/images/equipment/bobcat-s100.jpg",
    descriptionAr:
      "سكيد ستير بوبكات S100 معدة مدمجة عالية المرونة مثالية لأعمال الحفر والتحميل والتنظيف في المواقع الضيقة. تتميز بدوران 360 درجة بدون شعاع دوران، مما يجعلها خياراً رئيسياً في تأجير البوبكات لمشاريع البناء والتشطيبات.",
    descriptionEn:
      "The Bobcat S100 skid-steer loader is a compact, highly agile machine ideal for digging, loading, and cleanup in tight spaces. Features zero-radius turning, making it a top bobcat rental choice for construction and finishing projects.",
    specs: { capacity: "635 كغ", height: "2.8 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["bobcat-s150", "bobcat-john-deere-317g", "bobcat-hyundai-hsl850-7"]
  },
  {
    slug: "bobcat-s150",
    categoryId: "bobcats",
    categoryNameAr: "البوبكات",
    categoryNameEn: "Bobcats",
    nameAr: "سكيد ستير بوبكات S150",
    nameEn: "Bobcat S150 Skid-Steer Loader",
    image: "/images/equipment/bobcat-s150.jpg",
    descriptionAr:
      "سكيد ستير بوبكات S150 نسخة محسّنة بقدرة تحميل أعلى ومحرك أقوى، مناسبة لأعمال الحفر والتحميل المتوسطة. سهلة المناورة في المواقع الضيقة، وتتيح تركيب ملحقات متنوعة كالمثقاب وشفرة الجرف لتوسيع نطاق استخدامها.",
    descriptionEn:
      "The Bobcat S150 is an improved skid-steer with higher load capacity and a stronger engine, suited for mid-level digging and loading tasks. Easy to maneuver in tight spaces, and supports various attachments like augers and grading blades.",
    specs: { capacity: "726 كغ", height: "2.9 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["bobcat-s100", "bobcat-john-deere-317g", "bobcat-hyundai-hsl850-7"]
  },
  {
    slug: "bobcat-john-deere-317g",
    categoryId: "bobcats",
    categoryNameAr: "البوبكات",
    categoryNameEn: "Bobcats",
    nameAr: "لودر مضمار مدمج جون دير 317G",
    nameEn: "John Deere 317G Compact Track Loader",
    image: "/images/equipment/bobcat-john-deere-317g.jpg",
    descriptionAr:
      "لودر مضمار مدمج جون دير 317G مزود بمسارات مطاطية توفر ثباتاً وقدرة تعامل ممتازة على التربة الرخوة والمناطق الوعرة. مثالي للأعمال التي تتطلب ضغطاً منخفضاً على السطح، مع أداء قوي في الحفر والتحميل والتخريف.",
    descriptionEn:
      "The John Deere 317G compact track loader features rubber tracks for excellent stability on soft ground and rough terrain. Ideal for work requiring low ground pressure, with strong performance in digging, loading, and grading tasks.",
    specs: { capacity: "885 كغ", height: "3.0 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["bobcat-s100", "bobcat-s150", "bobcat-hyundai-hsl850-7"]
  },
  {
    slug: "bobcat-hyundai-hsl850-7",
    categoryId: "bobcats",
    categoryNameAr: "البوبكات",
    categoryNameEn: "Bobcats",
    nameAr: "هيونداي HSL850-7",
    nameEn: "Hyundai HSL850-7",
    image: "/images/equipment/bobcat-hyundai-hsl850-7.jpg",
    descriptionAr:
      "هيونداي HSL850-7 سكيد ستير لودر قوي مصمم للأعمال الشاقة في مواقع البناء والمشاريع الصناعية. يوفر دوراناً سريعاً ومرونة عالية في الحركة مع قدرة تشغيلية مناسبة لمعظم متطلبات أعمال الحفر والتحميل.",
    descriptionEn:
      "The Hyundai HSL850-7 is a robust skid-steer loader designed for heavy-duty work at construction sites and industrial projects. Offers quick turning and high maneuverability with an operating capacity suited for most digging and loading applications.",
    specs: { capacity: "850 كغ", height: "3.1 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["bobcat-s100", "bobcat-s150", "bobcat-backhoe-b730"]
  },
  {
    slug: "bobcat-backhoe-b730",
    categoryId: "bobcats",
    categoryNameAr: "البوبكات",
    categoryNameEn: "Bobcats",
    nameAr: "بوبكات باك هو لودر B730",
    nameEn: "Bobcat Backhoe Loader B730",
    image: "/images/equipment/bobcat-backhoe-b730.jpg",
    descriptionAr:
      "بوبكات باك هو لودر B730 معدة ثنائية الوظيفة تجمع بين الحفر الخلفي والتحميل الأمامي في آنٍ واحد. مثالية لأعمال الخندقة، تمديد الأنابيب، وحفر الأساسات في مشاريع البناء، وتتميز بسهولة التشغيل والانتقال بين المهام.",
    descriptionEn:
      "The Bobcat B730 backhoe loader is a dual-function machine combining rear digging and front loading in one unit. Ideal for trenching, pipe laying, and foundation digging in construction projects, with easy operation and quick task switching.",
    specs: { capacity: "640 كغ", height: "3.5 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["bobcat-s100", "bobcat-s150", "bobcat-hyundai-hsl850-7"]
  },

  // ─── EXCAVATORS ──────────────────────────────────────────────────────────────
  {
    slug: "excavator-hyundai-hw140",
    categoryId: "excavators",
    categoryNameAr: "البوكلينات",
    categoryNameEn: "Excavators",
    nameAr: "حفار عجلي هيونداي HW140",
    nameEn: "Hyundai HW140 Wheel Excavator",
    image: "/images/equipment/excavator-hyundai-hw140.jpg",
    descriptionAr:
      "حفار عجلي هيونداي HW140 يجمع بين قوة الحفر ومرونة التنقل على الطرق دون الحاجة لناقلة، مما يوفر وقتاً وتكلفة كبيرين. مثالي لأعمال الحفر والخندقة وتمديد الأنابيب في المناطق الحضرية وعلى طول محاور الطرق والبنية التحتية.",
    descriptionEn:
      "The Hyundai HW140 wheel excavator combines excavation power with road mobility without needing a transport trailer, saving significant time and cost. Ideal for digging, trenching, and pipe-laying in urban areas and along road and infrastructure corridors.",
    specs: { capacity: "14 طن", height: "5.5 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["excavator-hyundai-crawler-480"]
  },
  {
    slug: "excavator-hyundai-crawler-480",
    categoryId: "excavators",
    categoryNameAr: "البوكلينات",
    categoryNameEn: "Excavators",
    nameAr: "حفار زاحف هيونداي 480",
    nameEn: "Hyundai Crawler Excavator 480",
    image: "/images/equipment/excavator-hyundai-crawler-480.jpg",
    descriptionAr:
      "حفار زاحف هيونداي 480 من أقوى الحفارات المتاحة للإيجار، مصمم للمشاريع الكبرى التي تتطلب عمق حفر كبير وإنتاجية عالية. مثالي لمشاريع الطرق الكبرى، الأساسات العميقة، أعمال البنية التحتية، وأعمال الحفر الكثيف على التربة الصعبة.",
    descriptionEn:
      "The Hyundai 480 crawler excavator is among the most powerful excavators available for rent, designed for large-scale projects requiring deep digging and high productivity. Ideal for major road projects, deep foundations, infrastructure works, and intensive digging on tough terrain.",
    specs: { capacity: "48 طن", height: "7.5 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["excavator-hyundai-hw140"]
  },

  // ─── LOADERS ─────────────────────────────────────────────────────────────────
  {
    slug: "loader-caterpillar-1",
    categoryId: "loaders",
    categoryNameAr: "الشيولات",
    categoryNameEn: "Wheel Loaders",
    nameAr: "شيول كاتربيلر 1",
    nameEn: "Caterpillar Wheel Loader 1",
    image: "/images/equipment/loader-caterpillar-1.jpg",
    descriptionAr:
      "شيول كاتربيلر من الأكثر موثوقية في تأجير الشيولات بفضل قوة رفعها الممتازة وأداء محركها القوي. مثالي لنقل ورفع التراب والخامات في مواقع البناء، محطات الكسارة، والمشاريع الصناعية، بشفرة أمامية واسعة وتصميم متين للأعمال الشاقة.",
    descriptionEn:
      "The Caterpillar wheel loader is one of the most reliable options in wheel loader rental, with excellent lifting power and a strong engine. Ideal for moving and lifting earth and materials at construction sites, crusher plants, and industrial projects, featuring a wide bucket and rugged design.",
    specs: { capacity: "3 طن", height: "4.0 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["loader-caterpillar-2", "roller-12ton"]
  },
  {
    slug: "loader-caterpillar-2",
    categoryId: "loaders",
    categoryNameAr: "الشيولات",
    categoryNameEn: "Wheel Loaders",
    nameAr: "شيول كاتربيلر 2",
    nameEn: "Caterpillar Wheel Loader 2",
    image: "/images/equipment/loader-caterpillar-2.jpg",
    descriptionAr:
      "شيول كاتربيلر 2 نسخة أكبر وأقوى من سلسلة شيولات كاتربيلر، مثالية للمشاريع الكبيرة التي تتطلب إنتاجية عالية وسرعة في نقل الكميات الضخمة. تتميز بدلو ذو سعة واسعة ومحرك عالي الكفاءة لضمان الاستمرارية في أصعب المواقع.",
    descriptionEn:
      "Caterpillar Wheel Loader 2 is a larger and more powerful unit in the Caterpillar loader series, ideal for large-scale projects requiring high productivity and fast bulk material handling. Features a wide-capacity bucket and high-efficiency engine for uninterrupted operation in the toughest sites.",
    specs: { capacity: "4 طن", height: "4.5 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["loader-caterpillar-1", "roller-12ton"]
  },
  {
    slug: "roller-12ton",
    categoryId: "loaders",
    categoryNameAr: "الشيولات",
    categoryNameEn: "Wheel Loaders",
    nameAr: "رول 12 طن",
    nameEn: "Roller 12 Ton",
    image: "/images/equipment/roller-12ton.jpg",
    descriptionAr:
      "رول 12 طن معدة أساسية في مشاريع الطرق والبنية التحتية، مصمم لدمك التربة والإسفلت بكفاءة عالية. وزنه 12 طناً يوفر الضغط المناسب لتحقيق درجة الدمك المطلوبة في مشاريع الطرق السريعة، الأرصفة، والمواقع الصناعية.",
    descriptionEn:
      "The 12-ton roller is an essential machine for road and infrastructure projects, designed for efficient soil and asphalt compaction. Its 12-ton weight provides the necessary pressure to achieve required compaction levels on highways, pavements, and industrial sites.",
    specs: { capacity: "12 طن", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["loader-caterpillar-1", "loader-caterpillar-2"]
  },

  // ─── TELEHANDLERS ────────────────────────────────────────────────────────────
  {
    slug: "telehandler-jcb-17m",
    categoryId: "telehandlers",
    categoryNameAr: "التليوهندر",
    categoryNameEn: "Telehandlers",
    nameAr: "تليهاندلر جي سي بي 17 متر",
    nameEn: "JCB 17m Telehandler",
    image: "/images/equipment/telehandler-jcb-17m.jpg",
    descriptionAr:
      "تليهاندلر جي سي بي 17 متر رافعة متعددة الاستخدامات تجمع بين الرفع العالي والوصول البعيد في آنٍ واحد. بذراع تلسكوبي يصل إلى 17 متراً وحمولة 4 طن، مثالية لمشاريع البناء الكبيرة، رص الطوابق، توصيل المواد للطوابق العليا، وتركيب الهياكل الإنشائية.",
    descriptionEn:
      "The JCB 17m telehandler is a versatile machine combining high-reach lifting with extended reach in one unit. With a telescopic boom reaching 17 meters and a 4-ton capacity, it is ideal for large construction projects, floor stacking, delivering materials to upper floors, and structural installation.",
    specs: { capacity: "4 طن", height: "17 متر", powerType: "ديزل" },
    availableCities: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
    pricingDaily: 0,
    pricingMonthly: 0,
    relatedSlugs: ["boom-truck-3ton", "boom-truck-5ton"]
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
