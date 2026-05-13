import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { isLocale, locales } from "@/lib/locale";
import { equipmentDetails } from "@/data/equipment-details";
import { WHATSAPP_NUMBER } from "@/data/content";
import { translations } from "@/data/content";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";
import FAQAccordion from "@/components/site/FAQAccordion";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

const baseUrl = "https://alnasrcranes.vercel.app";

type CategoryInfo = {
  categoryId: string;
  nameAr: string;
  nameEn: string;
  h1Ar: string;
  h1En: string;
  introAr: string;
  introEn: string;
  metaTitleAr: string;
  metaTitleEn: string;
  metaDescAr: string;
  metaDescEn: string;
  faqAr: { q: string; a: string }[];
  faqEn: { q: string; a: string }[];
};

const CATEGORIES: Record<string, CategoryInfo> = {
  forklifts: {
    categoryId: "forklifts",
    nameAr: "الرافعات الشوكية",
    nameEn: "Forklifts",
    h1Ar: "تأجير الرافعات الشوكية في المملكة العربية السعودية | كوماتسو، تويوتا، ميتسوبيشي",
    h1En: "Forklift Rental in Saudi Arabia | Komatsu, Toyota, Mitsubishi",
    introAr:
      "تقدم شركة رافعات النصر خدمات تأجير الرافعات الشوكية بأسطول حديث ومتنوع من أفضل الماركات العالمية كتويوتا وكوماتسو وميتسوبيشي وليند. نوفر رافعات شوكية بطاقات رفع تتراوح بين 3 و5 أطنان، تعمل بالديزل والكهرباء، مناسبة لجميع احتياجات العمل داخل المستودعات، المصانع، الموانئ، ومواقع البناء. سواء كنت تحتاج إلى رافعة شوكية لمشروع قصير المدى أو عقد طويل الأجل، نقدم لك أسعاراً تنافسية مع خدمة صيانة متكاملة وفريق دعم متخصص على مدار الساعة. جميع معداتنا خضعت للفحص الدوري وتستوفي أعلى معايير السلامة المعتمدة في المملكة العربية السعودية.",
    introEn:
      "Al Nasr Cranes offers forklift rental services with a modern, diverse fleet from world-leading brands including Toyota, Komatsu, Mitsubishi, and Linde. We provide forklifts with 3–5 ton lifting capacities in diesel and electric variants, suitable for warehouses, factories, ports, and construction sites. Whether you need a forklift for a short-term project or a long-term contract, we offer competitive pricing with full maintenance and 24/7 specialist support. All our equipment undergoes periodic inspection and meets Saudi Arabia's highest safety standards.",
    metaTitleAr:
      "تأجير رافعات شوكية في السعودية | كوماتسو تويوتا ميتسوبيشي - رافعات النصر",
    metaTitleEn:
      "Forklift Rental Saudi Arabia | Komatsu Toyota Mitsubishi - Al Nasr Cranes",
    metaDescAr:
      "استأجر رافعة شوكية من رافعات النصر بأسعار تنافسية. أسطول من تويوتا وكوماتسو وميتسوبيشي وليند بطاقات 3-5 طن. خدمة في الرياض وجدة والدمام وجميع مناطق المملكة. اتصل: 0558204317",
    metaDescEn:
      "Rent a forklift from Al Nasr Cranes at competitive prices. Fleet from Toyota, Komatsu, Mitsubishi, and Linde with 3-5 ton capacities. Service in Riyadh, Jeddah, Dammam, and all Saudi regions. Call: 0558204317",
    faqAr: [
      { q: "ما هي طاقات الرافعات الشوكية المتاحة للإيجار؟", a: "نوفر رافعات شوكية بطاقات 3 طن و5 طن من ماركات تويوتا وكوماتسو وميتسوبيشي وليند." },
      { q: "هل تتوفر رافعات شوكية كهربائية للإيجار؟", a: "نعم، لدينا رافعة ليند 5 طن كهربائية مثالية للعمل داخل المستودعات والأماكن المغلقة بدون انبعاثات." },
      { q: "كم تكلف إيجار رافعة شوكية باليوم؟", a: "تتراوح أسعار الإيجار اليومي بين 300 و450 ريال حسب نوع الرافعة وطاقتها. تواصل معنا للحصول على أفضل سعر." },
      { q: "هل يمكن استئجار الرافعة مع مشغل؟", a: "نعم، نوفر مشغلين مدربين ومعتمدين يمكن توفيرهم مع المعدة حسب الطلب." },
    ],
    faqEn: [
      { q: "What forklift capacities are available for rent?", a: "We offer forklifts with 3-ton and 5-ton capacities from Toyota, Komatsu, Mitsubishi, and Linde." },
      { q: "Are electric forklifts available?", a: "Yes, we have a Linde 5-ton electric forklift ideal for indoor warehouses with zero emissions." },
      { q: "How much does daily forklift rental cost?", a: "Daily rental rates range from 300 to 450 SAR depending on type and capacity. Contact us for the best price." },
      { q: "Can I rent a forklift with an operator?", a: "Yes, we can provide trained, certified operators with the equipment upon request." },
    ],
  },

  cranes: {
    categoryId: "cranes",
    nameAr: "الكرينات",
    nameEn: "Cranes",
    h1Ar: "تأجير الكرينات في المملكة العربية السعودية | كرينات 30-100 طن للإيجار",
    h1En: "Crane Rental in Saudi Arabia | 30-100 Ton Cranes for Rent",
    introAr:
      "توفر شركة رافعات النصر خدمات تأجير الكرينات والروافع الثقيلة بأسطول متميز من كبرى ماركات الكرينات العالمية كليبهر وتادانو وغروف وكاتو. نقدم كرينات بطاقات رفع تتراوح بين 30 و100 طن، مناسبة لمشاريع البناء الكبرى، محطات الطاقة، الصناعات الثقيلة، والبنية التحتية. تضم أسطولنا كرينات موبايل يمكن تشغيلها في مواقع متعددة بكفاءة عالية وسرعة في الاستجابة. نوفر خدمات التأجير اليومي والأسبوعي والشهري مع مشغلين مدربين وفرق إشراف متخصصة لضمان أعلى معايير السلامة والأداء في جميع مناطق المملكة.",
    introEn:
      "Al Nasr Cranes provides mobile crane rental with a premium fleet from Liebherr, Tadano, Grove, and Kato. We offer cranes with 30–100 ton lifting capacities, suitable for large construction projects, power plants, heavy industries, and infrastructure. Our fleet of mobile cranes can be deployed across multiple sites efficiently. We provide daily, weekly, and monthly rental with trained operators and specialist supervision teams to ensure the highest safety and performance standards across all Saudi regions.",
    metaTitleAr: "تأجير كرينات في السعودية | ليبهر تادانو غروف كاتو - رافعات النصر",
    metaTitleEn: "Crane Rental Saudi Arabia | Liebherr Tadano Grove Kato - Al Nasr Cranes",
    metaDescAr:
      "استأجر كرين موبايل من رافعات النصر بطاقات 30-100 طن. أسطول من ليبهر وتادانو وغروف وكاتو. خدمة في الرياض وجدة والدمام وجميع مناطق المملكة. اتصل: 0558204317",
    metaDescEn:
      "Rent a mobile crane from Al Nasr Cranes with 30-100 ton capacities. Fleet from Liebherr, Tadano, Grove, and Kato. Service in Riyadh, Jeddah, Dammam, and all Saudi regions. Call: 0558204317",
    faqAr: [
      { q: "ما هي أكبر طاقة رفع متاحة في الكرينات؟", a: "نوفر كرين ليبهر بطاقة 100 طن وهو أكبر كرين في أسطولنا حالياً." },
      { q: "هل يمكن تأجير الكرين لمشاريع خارج الرياض؟", a: "نعم، نخدم جميع مناطق المملكة العربية السعودية بما فيها جدة والدمام والجبيل ومكة المكرمة." },
      { q: "هل توفرون مشغلين معتمدين للكرينات؟", a: "نعم، جميع مشغلينا حاصلون على تراخيص معتمدة ولديهم خبرة واسعة في تشغيل الكرينات الثقيلة." },
      { q: "ما هي أقل مدة لتأجير الكرين؟", a: "أقل مدة إيجار هي يوم واحد، مع خيارات أسبوعية وشهرية بأسعار تنافسية." },
    ],
    faqEn: [
      { q: "What is the maximum lifting capacity available?", a: "We offer the Liebherr 100-ton crane, the largest in our current fleet." },
      { q: "Can cranes be rented for projects outside Riyadh?", a: "Yes, we serve all Saudi regions including Jeddah, Dammam, Jubail, and Mecca." },
      { q: "Do you provide certified crane operators?", a: "Yes, all our operators hold certified licenses and have extensive experience with heavy cranes." },
      { q: "What is the minimum rental period?", a: "The minimum rental period is one day, with competitive weekly and monthly options available." },
    ],
  },

  "scissor-lifts": {
    categoryId: "scissor",
    nameAr: "السيزرلفت (الرافعات المقصية)",
    nameEn: "Scissor Lifts",
    h1Ar: "تأجير السيزرلفت في المملكة العربية السعودية | 6 إلى 18 متر",
    h1En: "Scissor Lift Rental in Saudi Arabia | 6 to 18 Meter Heights",
    introAr:
      "تقدم رافعات النصر خدمات تأجير السيزرلفت (الرافعات المقصية) بأسطول متنوع يشمل ارتفاعات من 6 حتى 18 متراً، بتشغيل كهربائي وديزل من ماركات JLG وGenie وZoomlion وGTJZ10. مثالية لأعمال الصيانة، التركيبات الكهربائية، تركيب أنظمة التكييف، أعمال المستودعات، المراكز التجارية، والمشاريع الإنشائية الداخلية والخارجية. توفر منصة عمل واسعة وآمنة مع خاصية التشغيل الكهربائي الهادئ وانعدام الانبعاثات للعمل في الأماكن المغلقة. فريقنا جاهز لتقديم الاستشارة المناسبة واختيار السيزرلفت الأنسب لاحتياجات مشروعك.",
    introEn:
      "Al Nasr Cranes offers scissor lift rental with a diverse fleet from 6 to 18 meters in height, available in electric and diesel variants from JLG, Genie, Zoomlion, and GTJZ10. Ideal for maintenance work, electrical installations, HVAC systems, warehouse operations, commercial centers, and both indoor and outdoor construction projects. They provide wide, safe work platforms with quiet electric operation and zero emissions for indoor use. Our team is ready to advise and select the right scissor lift for your project needs.",
    metaTitleAr: "تأجير سيزرلفت في السعودية | JLG Genie Zoomlion - رافعات النصر",
    metaTitleEn: "Scissor Lift Rental Saudi Arabia | JLG Genie Zoomlion - Al Nasr Cranes",
    metaDescAr:
      "استأجر سيزرلفت من رافعات النصر بارتفاعات 6-18 متر. ماركات JLG وGenie وZoomlion وGTJZ10. كهربائي وديزل. خدمة في جميع مناطق المملكة. اتصل: 0558204317",
    metaDescEn:
      "Rent a scissor lift from Al Nasr Cranes with heights 6-18m. JLG, Genie, Zoomlion, GTJZ10. Electric and diesel. Service across Saudi Arabia. Call: 0558204317",
    faqAr: [
      { q: "ما الفرق بين السيزرلفت الكهربائي والديزل؟", a: "الكهربائي مثالي للعمل الداخلي لخلوه من الانبعاثات وهدوء تشغيله، بينما الديزل يناسب المواقع الخارجية والبيئات الصعبة ذات الارتفاعات العالية." },
      { q: "ما أقصى ارتفاع يمكن العمل عنده؟", a: "نوفر سيزرلفت JLG/MG ديزل بارتفاع عمل يصل إلى 18 متراً لأعمال الارتفاعات الكبيرة في المواقع الخارجية." },
      { q: "هل السيزرلفت مناسب للعمل في المستودعات؟", a: "نعم، نوفر سيزرلفتات كهربائية هادئة وخالية من الانبعاثات مثالية للعمل داخل المستودعات والمراكز التجارية." },
      { q: "هل يمكن استئجار السيزرلفت لفترة قصيرة؟", a: "نعم، نوفر إيجار يومي وأسبوعي وشهري حسب احتياجاتك." },
    ],
    faqEn: [
      { q: "What's the difference between electric and diesel scissor lifts?", a: "Electric is ideal for indoor use due to zero emissions and quiet operation, while diesel suits outdoor sites and tough environments requiring greater height." },
      { q: "What is the maximum working height available?", a: "We offer the JLG/MG diesel scissor lift with a working height of up to 18 meters for large outdoor projects." },
      { q: "Are scissor lifts suitable for warehouse work?", a: "Yes, we offer quiet electric scissor lifts with zero emissions that are perfect for warehouses and commercial centers." },
      { q: "Can I rent a scissor lift for a short period?", a: "Yes, we offer daily, weekly, and monthly rentals to suit your needs." },
    ],
  },

  "boom-trucks": {
    categoryId: "boom-trucks",
    nameAr: "بوم تراك",
    nameEn: "Boom Trucks",
    h1Ar: "تأجير بوم تراك في المملكة العربية السعودية | 3 و5 طن – ارتفاع 20 متر",
    h1En: "Boom Truck Rental in Saudi Arabia | 3 & 5 Ton – 20m Height",
    introAr:
      "توفر شركة رافعات النصر خدمات تأجير البوم تراك (شاحنات الرافعة) بطاقات رفع 3 و5 أطنان وارتفاع عمل يصل إلى 20 متراً. تجمع هذه المعدات بين قدرة الرفع والتنقل السريع على الطرق، مما يجعلها مثالية لأعمال نقل المواد الثقيلة، تركيب المعدات في المواقع الصناعية، صيانة شبكات الاتصالات والكهرباء، وأعمال البناء التي تتطلب الرفع والنقل في آنٍ واحد. تتوفر خدماتنا في الرياض وجدة والدمام وجميع مناطق المملكة مع مشغلين مؤهلين.",
    introEn:
      "Al Nasr Cranes offers boom truck rental with 3 and 5 ton lifting capacities and working heights up to 20 meters. These versatile machines combine lifting capability with road mobility, making them ideal for heavy material transport, equipment installation at industrial sites, telecommunications and electrical maintenance, and construction projects requiring both lifting and transport. Available in Riyadh, Jeddah, Dammam, and all Saudi regions with qualified operators.",
    metaTitleAr: "تأجير بوم تراك في السعودية | 3-5 طن – رافعات النصر",
    metaTitleEn: "Boom Truck Rental Saudi Arabia | 3-5 Ton – Al Nasr Cranes",
    metaDescAr:
      "استأجر بوم تراك من رافعات النصر بطاقات 3-5 طن وارتفاع 20 متر. خدمة في الرياض وجدة والدمام وجميع مناطق المملكة. اتصل: 0558204317",
    metaDescEn:
      "Rent a boom truck from Al Nasr Cranes with 3-5 ton capacity and 20m height. Service in Riyadh, Jeddah, Dammam, and all Saudi regions. Call: 0558204317",
    faqAr: [
      { q: "ما الفرق بين البوم تراك والكرين الموبايل؟", a: "البوم تراك يجمع بين قدرة الرفع والتنقل على الطرق العامة، بينما الكرين الموبايل يوفر طاقات رفع أعلى بكثير للمشاريع الثقيلة." },
      { q: "ما هي تطبيقات البوم تراك الشائعة؟", a: "يُستخدم في تركيب الأعمدة والمعدات، صيانة خطوط الكهرباء والاتصالات، تحميل وتفريغ البضائع الثقيلة، وأعمال البناء التي تتطلب رفعاً على ارتفاعات متوسطة." },
      { q: "هل يمكن استخدام البوم تراك في المناطق الضيقة؟", a: "البوم تراك بطاقة 3 طن أكثر مرونة في المناطق الضيقة مقارنة بالكرينات الكبيرة، لكنه يحتاج مساحة كافية للتشغيل الآمن." },
    ],
    faqEn: [
      { q: "What's the difference between a boom truck and a mobile crane?", a: "A boom truck combines lifting with road mobility, while a mobile crane offers much higher lifting capacities for heavy projects." },
      { q: "What are common boom truck applications?", a: "Used for installing poles and equipment, maintaining power lines and telecommunications, loading/unloading heavy goods, and construction work requiring mid-height lifting." },
      { q: "Can a boom truck be used in tight spaces?", a: "The 3-ton boom truck is more maneuverable in tight spaces compared to large cranes, but still requires adequate space for safe operation." },
    ],
  },

  bobcats: {
    categoryId: "bobcats",
    nameAr: "البوبكات",
    nameEn: "Bobcats",
    h1Ar: "تأجير البوبكات في المملكة العربية السعودية | سكيد ستير، باك هو لودر",
    h1En: "Bobcat Rental in Saudi Arabia | Skid Steer, Backhoe Loader",
    introAr:
      "تقدم رافعات النصر خدمات تأجير البوبكات بأنواعها المختلفة من اللودر ذي المسار المضغوط (سكيد ستير) والحفار الخلفي (باك هو لودر) من ماركات Bobcat وJohn Deere وHyundai. مثالية لأعمال الحفر، التسوية، نقل الأتربة، أعمال البناء والتشييد، المشاريع الزراعية، ومشاريع البنية التحتية. تتميز البوبكات بصغر حجمها النسبي وقدرتها العالية، مما يجعلها مناسبة للعمل في المساحات الضيقة والمواقع التي يصعب على المعدات الكبيرة الوصول إليها.",
    introEn:
      "Al Nasr Cranes provides bobcat rental including compact track loaders (skid steer) and backhoe loaders from Bobcat, John Deere, and Hyundai brands. Ideal for excavation, grading, soil transport, construction, agricultural applications, and infrastructure projects. Bobcats are known for their compact size and high power, making them perfect for tight spaces where larger equipment cannot reach.",
    metaTitleAr: "تأجير بوبكات في السعودية | سكيد ستير وباك هو - رافعات النصر",
    metaTitleEn: "Bobcat Rental Saudi Arabia | Skid Steer & Backhoe - Al Nasr Cranes",
    metaDescAr:
      "استأجر بوبكات من رافعات النصر. سكيد ستير وباك هو لودر من Bobcat وJohn Deere وHyundai. خدمة في جميع مناطق المملكة. اتصل: 0558204317",
    metaDescEn:
      "Rent a bobcat from Al Nasr Cranes. Skid steer and backhoe loaders from Bobcat, John Deere, Hyundai. Service across Saudi Arabia. Call: 0558204317",
    faqAr: [
      { q: "ما الفرق بين سكيد ستير وباك هو لودر؟", a: "السكيد ستير مناسب للتحميل والنقل والتسوية، بينما الباك هو لودر يجمع بين التحميل الأمامي والحفر الخلفي في معدة واحدة." },
      { q: "هل البوبكات مناسب للعمل في المناطق السكنية؟", a: "نعم، صغر حجم البوبكات وانخفاض ضجيجه النسبي يجعله مناسباً للعمل بالقرب من المناطق السكنية." },
      { q: "ما هي المهام التي يمكن للبوبكات أداؤها؟", a: "يؤدي مهام الحفر، التسوية، تحميل ونقل الأتربة والمواد، وإزالة الحطام من مواقع البناء." },
    ],
    faqEn: [
      { q: "What's the difference between a skid steer and a backhoe loader?", a: "A skid steer is suited for loading, transport, and grading, while a backhoe loader combines front loading and rear digging in one machine." },
      { q: "Is a bobcat suitable for work near residential areas?", a: "Yes, the compact size and relatively low noise of bobcats make them suitable for work near residential areas." },
      { q: "What tasks can a bobcat perform?", a: "Excavation, grading, loading and transporting soil and materials, and removing debris from construction sites." },
    ],
  },

  excavators: {
    categoryId: "excavators",
    nameAr: "البوكلينات (الحفارات)",
    nameEn: "Excavators",
    h1Ar: "تأجير البوكلينات والحفارات في المملكة العربية السعودية | هيونداي",
    h1En: "Excavator Rental in Saudi Arabia | Hyundai",
    introAr:
      "توفر شركة رافعات النصر خدمات تأجير البوكلينات (الحفارات) بنوعين رئيسيين: الحفار الزاحف والحفار ذو العجلات من ماركة هيونداي الموثوقة. تُستخدم هذه المعدات في أعمال الحفر والتجريف، مشاريع الصرف الصحي والمياه، الأساسات والإنشاءات الكبرى، التعدين والمقالع، وأعمال تسوية الأراضي. أسطولنا يشمل الحفار الزاحف هيونداي 480 للأعمال الثقيلة والحفار العجلي HW140 للمواقع التي تتطلب حركة وتنقلاً أكبر على الطرق المعبدة.",
    introEn:
      "Al Nasr Cranes offers excavator rental with two main types: crawler and wheeled excavators from the trusted Hyundai brand. Used for excavation and grading, sewage and water projects, large-scale foundations and construction, mining and quarries, and land leveling. Our fleet includes the Hyundai Crawler 480 for heavy-duty work and the wheeled HW140 for sites requiring greater road mobility.",
    metaTitleAr: "تأجير بوكلينات وحفارات في السعودية | هيونداي - رافعات النصر",
    metaTitleEn: "Excavator Rental Saudi Arabia | Hyundai - Al Nasr Cranes",
    metaDescAr:
      "استأجر بوكلين أو حفار من رافعات النصر. حفار زاحف وعجلي هيونداي. خدمة في جميع مناطق المملكة. اتصل: 0558204317",
    metaDescEn:
      "Rent an excavator from Al Nasr Cranes. Crawler and wheeled Hyundai excavators. Service across Saudi Arabia. Call: 0558204317",
    faqAr: [
      { q: "ما الفرق بين الحفار الزاحف والحفار العجلي؟", a: "الحفار الزاحف يوفر استقراراً أعلى على التضاريس الوعرة وللأعمال الثقيلة، بينما الحفار العجلي أسرع في التنقل بين المواقع على الطرق المعبدة." },
      { q: "ما هي المشاريع التي تحتاج إلى حفار؟", a: "مشاريع الصرف الصحي، أعمال الأساسات، مد خطوط المياه والكهرباء، تجريف الأراضي، والمشاريع الإنشائية الكبرى." },
      { q: "هل تتوفر الحفارات بمناطق خارج الرياض؟", a: "نعم، نخدم جميع مناطق المملكة بما فيها جدة والدمام والجبيل ومكة المكرمة والمدينة المنورة." },
    ],
    faqEn: [
      { q: "What's the difference between crawler and wheeled excavators?", a: "Crawler excavators provide greater stability on rough terrain for heavy work, while wheeled excavators move faster between sites on paved roads." },
      { q: "What projects require an excavator?", a: "Sewage projects, foundation work, laying water and electrical lines, land grading, and large-scale construction projects." },
      { q: "Are excavators available outside Riyadh?", a: "Yes, we serve all Saudi regions including Jeddah, Dammam, Jubail, Mecca, and Medina." },
    ],
  },

  loaders: {
    categoryId: "loaders",
    nameAr: "الشيولات وأدوات التسوية",
    nameEn: "Wheel Loaders & Rollers",
    h1Ar: "تأجير الشيولات والرولات في المملكة العربية السعودية | كاتربيلر",
    h1En: "Wheel Loader & Roller Rental in Saudi Arabia | Caterpillar",
    introAr:
      "تقدم رافعات النصر خدمات تأجير الشيولات (لودرات العجلات) من ماركة كاتربيلر وأدوات الدحل والتسوية. الشيولات مثالية لتحميل ونقل التربة والحجارة ومواد البناء في المواقع الإنشائية والمشاريع الكبرى، بينما تُستخدم الرولات في تسوية وضغط الأسفلت والتربة لإنشاء الطرق والساحات. نوفر هذه المعدات بطاقات وأحجام متنوعة تناسب مختلف أحجام المشاريع، مع خيارات التأجير اليومي والأسبوعي والشهري وبأسعار تنافسية.",
    introEn:
      "Al Nasr Cranes provides wheel loader rental from Caterpillar and compaction equipment. Wheel loaders are ideal for loading and transporting soil, rocks, and construction materials at project sites, while rollers are used for leveling and compacting asphalt and soil for road and yard construction. Available in various sizes to suit different project scales, with daily, weekly, and monthly rental options at competitive prices.",
    metaTitleAr: "تأجير شيولات ورولات في السعودية | كاتربيلر - رافعات النصر",
    metaTitleEn: "Wheel Loader & Roller Rental Saudi Arabia | Caterpillar - Al Nasr Cranes",
    metaDescAr:
      "استأجر شيول أو رول من رافعات النصر. لودر كاتربيلر ورول 12 طن. خدمة في جميع مناطق المملكة. اتصل: 0558204317",
    metaDescEn:
      "Rent a wheel loader or roller from Al Nasr Cranes. Caterpillar loaders and 12-ton rollers. Service across Saudi Arabia. Call: 0558204317",
    faqAr: [
      { q: "ما الفرق بين الشيول والبوبكات؟", a: "الشيول أكبر حجماً وطاقة، مناسب لأعمال التحميل الكبيرة، بينما البوبكات أصغر وأكثر مرونة في المساحات الضيقة." },
      { q: "ما استخدامات رول التسوية؟", a: "يُستخدم في ضغط وتسوية الأسفلت والتربة لإنشاء الطرق، الساحات، والأرضيات المدمجة في المشاريع الإنشائية." },
      { q: "هل الشيولات متوفرة في جميع مناطق المملكة؟", a: "نعم، نوفر الشيولات والرولات في الرياض وجدة والدمام وجميع مناطق المملكة العربية السعودية." },
    ],
    faqEn: [
      { q: "What's the difference between a wheel loader and a bobcat?", a: "Wheel loaders are larger and more powerful, suited for large-scale loading, while bobcats are smaller and more maneuverable in tight spaces." },
      { q: "What are rollers used for?", a: "Rollers compact and level asphalt and soil for road construction, yards, and solid foundations in construction projects." },
      { q: "Are wheel loaders available across all Saudi regions?", a: "Yes, we provide wheel loaders and rollers in Riyadh, Jeddah, Dammam, and all Saudi regions." },
    ],
  },

  telehandlers: {
    categoryId: "telehandlers",
    nameAr: "التليهاندلر",
    nameEn: "Telehandlers",
    h1Ar: "تأجير التليهاندلر في المملكة العربية السعودية | JCB 17 متر",
    h1En: "Telehandler Rental in Saudi Arabia | JCB 17 Meter",
    introAr:
      "توفر شركة رافعات النصر خدمات تأجير التليهاندلر (الرافعة التلسكوبية) من ماركة JCB الموثوقة بارتفاع رفع يصل إلى 17 متراً وطاقة رفع 4 أطنان. التليهاندلر هو معدة متعددة الاستخدامات تجمع بين قدرات الرافعة الشوكية والرافعة المقصية في معدة واحدة، مثالية للمشاريع الإنشائية التي تتطلب الرفع على ارتفاعات عالية في المواقع الخارجية. مناسبة لمشاريع البناء، التركيبات الخارجية، الزراعة، المخازن الكبيرة، وأعمال البنية التحتية في المملكة.",
    introEn:
      "Al Nasr Cranes provides telehandler rental from the trusted JCB brand with a reach height of up to 17 meters and 4-ton lifting capacity. The telehandler is a versatile piece of equipment combining the capabilities of a forklift and reach lift in one machine, ideal for construction projects requiring high-reach lifting at outdoor sites. Suitable for construction, outdoor installations, agriculture, large warehouses, and infrastructure projects across Saudi Arabia.",
    metaTitleAr: "تأجير تليهاندلر في السعودية | JCB 17 متر - رافعات النصر",
    metaTitleEn: "Telehandler Rental Saudi Arabia | JCB 17m - Al Nasr Cranes",
    metaDescAr:
      "استأجر تليهاندلر JCB من رافعات النصر. ارتفاع 17 متر وطاقة 4 طن. خدمة في جميع مناطق المملكة. اتصل: 0558204317",
    metaDescEn:
      "Rent a JCB telehandler from Al Nasr Cranes. 17m height, 4 ton capacity. Service across Saudi Arabia. Call: 0558204317",
    faqAr: [
      { q: "ما هو التليهاندلر وما الفرق بينه وبين الرافعة الشوكية؟", a: "التليهاندلر رافعة تلسكوبية يمكنها الرفع على ارتفاعات كبيرة وإلى مسافات بعيدة، بينما الرافعة الشوكية تعمل بشكل رأسي فقط في مسافات قصيرة." },
      { q: "ما هي تطبيقات التليهاندلر الرئيسية؟", a: "يُستخدم في مشاريع البناء لرفع مواد البناء لطوابق عليا، التركيبات الخارجية، أعمال المزارع الكبيرة، ومشاريع البنية التحتية." },
      { q: "هل التليهاندلر مناسب للعمل في المواقع الخارجية؟", a: "نعم، التليهاندلر JCB مصمم للعمل في المواقع الخارجية الوعرة ويعمل بكفاءة عالية على الأراضي غير الممهدة." },
    ],
    faqEn: [
      { q: "What is a telehandler and how does it differ from a forklift?", a: "A telehandler is a telescopic lift that can reach high heights and extended distances, while a forklift works vertically only at short distances." },
      { q: "What are the main telehandler applications?", a: "Used in construction for lifting materials to upper floors, outdoor installations, large farm operations, and infrastructure projects." },
      { q: "Is a telehandler suitable for outdoor sites?", a: "Yes, the JCB telehandler is designed for outdoor rough terrain and performs efficiently on unpaved ground." },
    ],
  },
};

const cities = {
  ar: ["الرياض", "جدة", "الدمام", "الجبيل", "الخبر", "مكة المكرمة"],
  en: ["Riyadh", "Jeddah", "Dammam", "Jubail", "Khobar", "Mecca"],
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.keys(CATEGORIES).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const cat = CATEGORIES[slug];
  if (!cat) return {};

  const isAr = locale === "ar";
  const title = isAr ? cat.metaTitleAr : cat.metaTitleEn;
  const description = isAr ? cat.metaDescAr : cat.metaDescEn;
  const canonicalUrl = `${baseUrl}/${locale}/category/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `${baseUrl}/ar/category/${slug}`,
        en: `${baseUrl}/en/category/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: isAr ? "رافعات النصر" : "Al Nasr Cranes",
      locale: isAr ? "ar_SA" : "en_US",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const cat = CATEGORIES[slug];
  if (!cat) notFound();

  const isAr = locale === "ar";
  const t = translations[locale];
  const equipment = equipmentDetails.filter((e) => e.categoryId === cat.categoryId);
  const h1 = isAr ? cat.h1Ar : cat.h1En;
  const intro = isAr ? cat.introAr : cat.introEn;
  const faq = isAr ? cat.faqAr : cat.faqEn;
  const homeUrl = locale === "ar" ? baseUrl : `${baseUrl}/en`;
  const categoryName = isAr ? cat.nameAr : cat.nameEn;

  const breadcrumbItems = [
    { name: isAr ? "الرئيسية" : "Home", url: homeUrl },
    { name: categoryName, url: `${baseUrl}/${locale}/category/${slug}` },
  ];

  const whyPoints = isAr
    ? [
        "أسطول حديث يخضع للصيانة الدورية المعتمدة",
        "مشغلون مدربون ومعتمدون على أعلى معايير السلامة",
        "خدمة عملاء 24/7 طوال أيام الأسبوع",
        "تغطية شاملة لجميع مناطق المملكة العربية السعودية",
        "أسعار تنافسية وشفافة بدون رسوم خفية",
        "استجابة سريعة وتوصيل المعدة لموقعك",
      ]
    : [
        "Modern fleet with certified periodic maintenance",
        "Trained and certified operators at highest safety standards",
        "24/7 customer service throughout the week",
        "Full coverage across all Saudi regions",
        "Competitive transparent pricing with no hidden fees",
        "Fast response and equipment delivery to your site",
      ];

  return (
    <div dir={isAr ? "rtl" : "ltr"} className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header locale={locale} brandName={t.brandName} links={t.nav} languageLabel={t.languageSwitchLabel} />

      {/* ── Hero ── */}
      <section className="bg-[#06281A] pt-28 pb-14 text-white">
        <div className="section-container max-w-4xl">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/55">
            <Link href={homeUrl} className="hover:text-[#00A651]">
              {isAr ? "الرئيسية" : "Home"}
            </Link>
            <span>/</span>
            <span className="text-white/80">{categoryName}</span>
          </nav>
          <h1 className="text-3xl font-extrabold leading-snug md:text-4xl">{h1}</h1>
          <p className="mt-6 leading-8 text-white/80 text-sm md:text-base max-w-3xl">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(isAr ? `أود الاستفسار عن تأجير ${categoryName}` : `I would like to inquire about renting ${categoryName}`)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Image src="/whatsapp-icon.svg" alt="" width={18} height={18} />
              {isAr ? "تحدث معنا" : "Talk to Us"}
            </a>
            <a href={`/${locale}#contact`} className="btn-secondary">
              {isAr ? "طلب عبر الموقع" : "Request via Website"}
            </a>
          </div>
        </div>
      </section>

      {/* ── Equipment Grid ── */}
      {equipment.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="section-container">
            <h2 className="mb-8 text-2xl font-extrabold text-[#111827] md:text-3xl text-center">
              {isAr ? `${categoryName} المتاحة للإيجار` : `Available ${categoryName} for Rent`}
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {equipment.map((eq) => {
                const name = isAr ? eq.nameAr : eq.nameEn;
                const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(isAr ? `أود الاستفسار عن تأجير المعدة: ${name}` : `I would like to inquire about renting: ${name}`)}`;
                return (
                  <article
                    key={eq.slug}
                    className="group relative overflow-hidden rounded-[14px] border border-slate-100 bg-white shadow-[0_8px_22px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Link href={`/${locale}/equipment/${eq.slug}`} className="absolute inset-0 z-0 rounded-[14px]" aria-label={name} />
                    <div className="relative h-40 overflow-hidden bg-[#eef2f7] sm:h-48">
                      <Image
                        src={eq.image}
                        alt={isAr ? `تأجير ${name} - رافعات النصر` : `Rent ${name} - Al Nasr Cranes`}
                        fill
                        className="object-contain transition duration-300 group-hover:scale-105"
                        sizes="(max-width:768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="px-3 py-3 text-center">
                      <h3 className="line-clamp-2 text-sm font-black leading-6 text-[#111827]">{name}</h3>
                      {eq.specs.capacity && (
                        <p className="mt-1 text-xs text-[#6B7280]">{eq.specs.capacity}</p>
                      )}
                      {eq.pricingDaily > 0 && (
                        <p className="mt-1 text-xs font-bold text-[#006C35]">
                          {isAr ? `${eq.pricingDaily} ريال/يوم` : `${eq.pricingDaily} SAR/day`}
                        </p>
                      )}
                    </div>
                    <div className="relative z-10 border-t border-slate-100">
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full min-h-9 items-center justify-center gap-1 bg-[#ECFFF4] px-2 text-xs font-bold text-[#009E55] transition hover:bg-[#DDF9EA]"
                      >
                        <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={14} height={14} />
                        {isAr ? "الطلب الآن" : "Order Now"}
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Why Us ── */}
      <section className="bg-[#06281A] py-12 md:py-16 text-white">
        <div className="section-container max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-[#00A651] md:text-3xl">
            {isAr ? `لماذا تستأجر ${categoryName} من رافعات النصر؟` : `Why Rent ${categoryName} from Al Nasr Cranes?`}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {whyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3">
                <span className="mt-0.5 text-[#00A651] text-lg">✓</span>
                <span className="text-sm leading-6 text-white/85">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section className="py-12 md:py-16">
        <div className="section-container max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-extrabold text-[#111827] md:text-3xl">
            {isAr ? "مناطق الخدمة" : "Service Areas"}
          </h2>
          <p className="mb-6 text-sm text-[#6B7280]">
            {isAr
              ? "نوفر خدمات تأجير المعدات في المدن والمناطق التالية في المملكة العربية السعودية:"
              : "We provide equipment rental services in the following Saudi Arabian cities and regions:"}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {cities[isAr ? "ar" : "en"].map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1 rounded-full border border-[#006C35]/40 bg-[#006C35]/10 px-4 py-1.5 text-sm font-bold text-[#004B26]"
              >
                📍 {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F7F8F6] py-12 md:py-16">
        <div className="section-container max-w-3xl">
          <div className="mb-8 text-center">
            <span className="gold-label">{isAr ? "لديك استفسار؟" : "Questions?"}</span>
            <h2 className="mt-3 text-2xl font-extrabold text-[#111827] md:text-3xl">
              {isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
            </h2>
          </div>
          <FAQAccordion items={faq} />
        </div>
      </section>

      <Footer locale={locale} />
      <FloatingButtons locale={locale} />
    </div>
  );
}
