import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { isLocale, locales } from "@/lib/locale";
import { WHATSAPP_NUMBER } from "@/data/content";
import { translations } from "@/data/content";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";
import FAQAccordion from "@/components/site/FAQAccordion";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

const baseUrl = "https://alnasrcranes.vercel.app";

type CityInfo = {
  nameAr: string;
  nameEn: string;
  regionAr: string;
  regionEn: string;
  descAr: string;
  descEn: string;
  metaTitleAr: string;
  metaTitleEn: string;
  metaDescAr: string;
  metaDescEn: string;
  faqAr: { q: string; a: string }[];
  faqEn: { q: string; a: string }[];
};

const CITIES: Record<string, CityInfo> = {
  riyadh: {
    nameAr: "الرياض",
    nameEn: "Riyadh",
    regionAr: "منطقة الرياض",
    regionEn: "Riyadh Region",
    descAr:
      "تقدم شركة رافعات النصر خدمات تأجير المعدات الثقيلة والرافعات في مدينة الرياض وجميع أحيائها ومناطقها الصناعية. نغطي جميع أحياء الرياض من العليا والعزيزية وطريق الملك عبدالله إلى المناطق الصناعية في البدية وشرق الرياض والملك خالد الصناعية. أسطولنا يشمل الرافعات الشوكية، الكرينات، السيزرلفت، البوم تراك، البوبكات، الحفارات، والشيولات، مما يجعلنا الشريك المثالي لمشاريعك الإنشائية والصناعية في العاصمة.",
    descEn:
      "Al Nasr Cranes provides heavy equipment and crane rental services in Riyadh city and all its neighborhoods and industrial areas. We cover all Riyadh districts from Al Olaya and Al Azizia to King Abdullah Road and the industrial areas of Al Badiya, East Riyadh, and King Khalid Industrial City. Our fleet includes forklifts, cranes, scissor lifts, boom trucks, bobcats, excavators, and wheel loaders, making us your ideal partner for construction and industrial projects in the capital.",
    metaTitleAr: "تأجير معدات ثقيلة في الرياض | رافعات وكرينات للإيجار - رافعات النصر",
    metaTitleEn: "Heavy Equipment Rental in Riyadh | Cranes & Forklifts for Rent - Al Nasr Cranes",
    metaDescAr:
      "تأجير معدات ثقيلة في الرياض من رافعات النصر. رافعات شوكية، كرينات، سيزرلفت، بوم تراك، بوبكات. تغطية شاملة لجميع أحياء الرياض. اتصل الآن: 0558204317",
    metaDescEn:
      "Heavy equipment rental in Riyadh from Al Nasr Cranes. Forklifts, cranes, scissor lifts, boom trucks, bobcats. Full coverage across all Riyadh districts. Call: 0558204317",
    faqAr: [
      { q: "هل تقدمون خدماتكم في جميع أحياء الرياض؟", a: "نعم، نغطي جميع أحياء ومناطق الرياض بما فيها العليا والعزيزية والمناطق الصناعية وطريق الملك عبدالله وغيرها." },
      { q: "ما هو وقت التوصيل للرياض؟", a: "في الغالب خلال 24 ساعة من تأكيد الطلب داخل حدود الرياض، وقد يكون أسرع لبعض المعدات." },
      { q: "هل تتوفر خدمات الطوارئ في الرياض؟", a: "نعم، نوفر خدمة عملاء على مدار الساعة ويمكننا الاستجابة لحالات الطوارئ في أسرع وقت ممكن." },
    ],
    faqEn: [
      { q: "Do you serve all Riyadh districts?", a: "Yes, we cover all Riyadh neighborhoods and areas including Al Olaya, Al Azizia, industrial zones, King Abdullah Road, and others." },
      { q: "What is the delivery time in Riyadh?", a: "Usually within 24 hours of order confirmation within Riyadh, and may be faster for some equipment." },
      { q: "Are emergency services available in Riyadh?", a: "Yes, we provide 24/7 customer service and can respond to emergencies as quickly as possible." },
    ],
  },

  jeddah: {
    nameAr: "جدة",
    nameEn: "Jeddah",
    regionAr: "منطقة مكة المكرمة",
    regionEn: "Makkah Region",
    descAr:
      "تخدم رافعات النصر مدينة جدة ومنطقتها بأسطول متكامل من معدات الرفع والبناء. نغطي ميناء جدة الإسلامي، المنطقة الصناعية الأولى والثانية، المدينة الاقتصادية، شرق جدة وغربها، ومختلف المشاريع الإنشائية الكبرى على الكورنيش وطريق الملك عبدالعزيز. توفر شركتنا رافعات شوكية للمستودعات وميناء جدة، كرينات للمشاريع الكبرى، وسيزرلفت للصيانة والتركيبات، مع ضمان الاستجابة السريعة لاحتياجاتكم.",
    descEn:
      "Al Nasr Cranes serves Jeddah city and its region with a comprehensive fleet of lifting and construction equipment. We cover the Islamic Port of Jeddah, the first and second industrial zones, the Economic City, East and West Jeddah, and major construction projects along the Corniche and King Abdul Aziz Road. We provide forklifts for warehouses and the port, cranes for large projects, and scissor lifts for maintenance and installations, with guaranteed fast response to your needs.",
    metaTitleAr: "تأجير معدات ثقيلة في جدة | رافعات وكرينات للإيجار - رافعات النصر",
    metaTitleEn: "Heavy Equipment Rental in Jeddah | Cranes & Forklifts for Rent - Al Nasr Cranes",
    metaDescAr:
      "تأجير معدات ثقيلة في جدة من رافعات النصر. رافعات شوكية، كرينات، سيزرلفت للمنطقة الصناعية وميناء جدة. اتصل الآن: 0558204317",
    metaDescEn:
      "Heavy equipment rental in Jeddah from Al Nasr Cranes. Forklifts, cranes, scissor lifts for Jeddah industrial zone and port. Call: 0558204317",
    faqAr: [
      { q: "هل تخدمون ميناء جدة الإسلامي؟", a: "نعم، نوفر خدمات تأجير الرافعات الشوكية والمعدات الأخرى لعمليات ميناء جدة الإسلامي وما حوله." },
      { q: "هل تتوفر خدمات في المنطقة الصناعية بجدة؟", a: "نعم، نخدم المنطقة الصناعية الأولى والثانية في جدة بمختلف المعدات الثقيلة." },
      { q: "كم تستغرق معدات الرفع للوصول إلى جدة؟", a: "في الغالب خلال 24-48 ساعة من تأكيد الطلب، حسب نوع المعدة والتوفر." },
    ],
    faqEn: [
      { q: "Do you serve the Islamic Port of Jeddah?", a: "Yes, we provide forklift and equipment rental for operations at and around the Islamic Port of Jeddah." },
      { q: "Are services available in Jeddah's industrial area?", a: "Yes, we serve Jeddah's first and second industrial areas with various heavy equipment." },
      { q: "How long does it take for equipment to reach Jeddah?", a: "Usually within 24-48 hours of order confirmation, depending on equipment type and availability." },
    ],
  },

  dammam: {
    nameAr: "الدمام",
    nameEn: "Dammam",
    regionAr: "المنطقة الشرقية",
    regionEn: "Eastern Province",
    descAr:
      "تغطي خدمات رافعات النصر مدينة الدمام والمنطقة الشرقية بأكملها، بما فيها الخبر والجبيل وراس تنورة وصفوى والقطيف. نخدم المنطقة الصناعية الثانية بالدمام، المجمعات البتروكيماوية، مصافي أرامكو وسابك، وميناء الملك عبدالعزيز. سواء كنت تحتاج رافعة شوكية للمستودعات، كرين للمشاريع الثقيلة، أو سيزرلفت لأعمال الصيانة الصناعية، نحن شريكك المثالي في المنطقة الشرقية.",
    descEn:
      "Al Nasr Cranes covers Dammam city and the entire Eastern Province, including Khobar, Jubail, Ras Tanura, Safwa, and Qatif. We serve the second industrial area in Dammam, petrochemical complexes, Aramco and SABIC refineries, and King Abdul Aziz Port. Whether you need a forklift for warehouses, a crane for heavy projects, or a scissor lift for industrial maintenance, we are your ideal partner in the Eastern Province.",
    metaTitleAr: "تأجير معدات ثقيلة في الدمام والمنطقة الشرقية - رافعات النصر",
    metaTitleEn: "Heavy Equipment Rental in Dammam & Eastern Province - Al Nasr Cranes",
    metaDescAr:
      "تأجير معدات ثقيلة في الدمام والخبر والجبيل من رافعات النصر. نخدم أرامكو وسابك والمنطقة الصناعية. اتصل: 0558204317",
    metaDescEn:
      "Heavy equipment rental in Dammam, Khobar, and Jubail from Al Nasr Cranes. Serving Aramco, SABIC, and industrial zones. Call: 0558204317",
    faqAr: [
      { q: "هل تخدمون مشاريع أرامكو وسابك في المنطقة الشرقية؟", a: "نعم، لدينا خبرة في تقديم خدمات تأجير المعدات لشركات المقاولات العاملة مع أرامكو وسابك والمجمعات البتروكيماوية." },
      { q: "هل تغطون الجبيل والخبر وراس تنورة؟", a: "نعم، نخدم جميع مدن المنطقة الشرقية بما فيها الجبيل والخبر وراس تنورة والقطيف وصفوى." },
      { q: "هل تتوفر معدات للعمل في البيئات الصناعية؟", a: "نعم، جميع معداتنا تستوفي معايير السلامة الصناعية وتناسب العمل في البيئات البتروكيماوية والصناعية الثقيلة." },
    ],
    faqEn: [
      { q: "Do you serve Aramco and SABIC projects in the Eastern Province?", a: "Yes, we have experience providing equipment rental services to contractors working with Aramco, SABIC, and petrochemical complexes." },
      { q: "Do you cover Jubail, Khobar, and Ras Tanura?", a: "Yes, we serve all Eastern Province cities including Jubail, Khobar, Ras Tanura, Qatif, and Safwa." },
      { q: "Is equipment available for industrial environments?", a: "Yes, all our equipment meets industrial safety standards and is suitable for petrochemical and heavy industrial environments." },
    ],
  },

  mecca: {
    nameAr: "مكة المكرمة",
    nameEn: "Mecca",
    regionAr: "منطقة مكة المكرمة",
    regionEn: "Makkah Region",
    descAr:
      "تقدم رافعات النصر خدمات تأجير المعدات الثقيلة في مكة المكرمة لدعم مشاريع التوسعة، البناء الفندقي، المشاريع الإنشائية، وأعمال البنية التحتية. نخدم المشاريع الكبرى في المنطقة المركزية، العزيزية، الشوقية، والمناطق الصناعية. أسطولنا المتنوع من الكرينات والرافعات الشوكية والسيزرلفت جاهز لدعم مشاريعكم في أم القرى.",
    descEn:
      "Al Nasr Cranes provides heavy equipment rental services in Mecca to support expansion projects, hotel construction, building projects, and infrastructure work. We serve major projects in the central area, Al Azizia, Al Shawqiyah, and industrial zones. Our diverse fleet of cranes, forklifts, and scissor lifts is ready to support your projects in the holy city.",
    metaTitleAr: "تأجير معدات ثقيلة في مكة المكرمة | رافعات وكرينات - رافعات النصر",
    metaTitleEn: "Heavy Equipment Rental in Mecca | Cranes & Forklifts - Al Nasr Cranes",
    metaDescAr:
      "تأجير معدات ثقيلة في مكة المكرمة من رافعات النصر. كرينات ورافعات للمشاريع الفندقية والإنشائية. اتصل: 0558204317",
    metaDescEn:
      "Heavy equipment rental in Mecca from Al Nasr Cranes. Cranes and forklifts for hotel and construction projects. Call: 0558204317",
    faqAr: [
      { q: "هل تتوفر معدات لمشاريع التوسعة في مكة؟", a: "نعم، نقدم معدات مناسبة لمشاريع التوسعة والبناء الفندقي والإنشائي في مكة المكرمة." },
      { q: "هل تستطيعون العمل في المنطقة المركزية بمكة؟", a: "نعم، نستطيع تقديم الخدمات في مختلف مناطق مكة المكرمة مع مراعاة التنسيق اللازم للمواقع الحساسة." },
    ],
    faqEn: [
      { q: "Is equipment available for expansion projects in Mecca?", a: "Yes, we provide suitable equipment for expansion, hotel construction, and building projects in Mecca." },
      { q: "Can you work in Mecca's central area?", a: "Yes, we can provide services across various Mecca areas with necessary coordination for sensitive locations." },
    ],
  },

  medina: {
    nameAr: "المدينة المنورة",
    nameEn: "Medina",
    regionAr: "منطقة المدينة المنورة",
    regionEn: "Medina Region",
    descAr:
      "تخدم رافعات النصر مدينة المدينة المنورة وما حولها بأسطول متكامل من معدات الرفع والبناء. ندعم المشاريع الإنشائية والفندقية، أعمال توسعة الحرم النبوي الشريف، ومشاريع البنية التحتية في المدينة. نوفر الكرينات للأعمال الثقيلة، الرافعات الشوكية للمستودعات والمناطق التجارية، والسيزرلفت لأعمال الصيانة والتركيبات بكفاءة عالية وأمان تام.",
    descEn:
      "Al Nasr Cranes serves Medina city and its surroundings with a comprehensive fleet of lifting and construction equipment. We support construction and hotel projects, Prophet's Mosque expansion works, and infrastructure projects in Medina. We provide cranes for heavy work, forklifts for warehouses and commercial areas, and scissor lifts for maintenance and installation work with high efficiency and complete safety.",
    metaTitleAr: "تأجير معدات ثقيلة في المدينة المنورة | رافعات وكرينات - رافعات النصر",
    metaTitleEn: "Heavy Equipment Rental in Medina | Cranes & Forklifts - Al Nasr Cranes",
    metaDescAr:
      "تأجير معدات ثقيلة في المدينة المنورة من رافعات النصر. كرينات ورافعات للمشاريع الإنشائية والفندقية. اتصل: 0558204317",
    metaDescEn:
      "Heavy equipment rental in Medina from Al Nasr Cranes. Cranes and forklifts for construction and hotel projects. Call: 0558204317",
    faqAr: [
      { q: "هل تغطون المدينة المنورة ومنطقتها؟", a: "نعم، نوفر خدماتنا في المدينة المنورة ومنطقتها الإدارية بأكملها." },
      { q: "هل تتوفر معدات لمشاريع البنية التحتية في المدينة؟", a: "نعم، لدينا أسطول متكامل من الحفارات والشيولات والكرينات والرافعات لدعم مشاريع البنية التحتية." },
    ],
    faqEn: [
      { q: "Do you cover Medina and its region?", a: "Yes, we provide our services in Medina city and its entire administrative region." },
      { q: "Is equipment available for infrastructure projects in Medina?", a: "Yes, we have a comprehensive fleet of excavators, loaders, cranes, and forklifts to support infrastructure projects." },
    ],
  },
};

const equipmentTypes = {
  ar: [
    { label: "الرافعات الشوكية", slug: "forklifts" },
    { label: "الكرينات", slug: "cranes" },
    { label: "السيزرلفت", slug: "scissor-lifts" },
    { label: "بوم تراك", slug: "boom-trucks" },
    { label: "البوبكات", slug: "bobcats" },
    { label: "البوكلينات", slug: "excavators" },
    { label: "الشيولات", slug: "loaders" },
    { label: "التليهاندلر", slug: "telehandlers" },
  ],
  en: [
    { label: "Forklifts", slug: "forklifts" },
    { label: "Cranes", slug: "cranes" },
    { label: "Scissor Lifts", slug: "scissor-lifts" },
    { label: "Boom Trucks", slug: "boom-trucks" },
    { label: "Bobcats", slug: "bobcats" },
    { label: "Excavators", slug: "excavators" },
    { label: "Wheel Loaders", slug: "loaders" },
    { label: "Telehandlers", slug: "telehandlers" },
  ],
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.keys(CITIES).map((city) => ({ locale, city }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}): Promise<Metadata> {
  const { locale, city } = await params;
  if (!isLocale(locale)) return {};
  const cityData = CITIES[city];
  if (!cityData) return {};

  const isAr = locale === "ar";
  const title = isAr ? cityData.metaTitleAr : cityData.metaTitleEn;
  const description = isAr ? cityData.metaDescAr : cityData.metaDescEn;
  const canonicalUrl = `${baseUrl}/${locale}/locations/${city}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `${baseUrl}/ar/locations/${city}`,
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

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city } = await params;
  if (!isLocale(locale)) notFound();

  const cityData = CITIES[city];
  if (!cityData) notFound();

  const isAr = locale === "ar";
  const t = translations[locale];
  const cityName = isAr ? cityData.nameAr : cityData.nameEn;
  const region = isAr ? cityData.regionAr : cityData.regionEn;
  const desc = isAr ? cityData.descAr : cityData.descEn;
  const faq = isAr ? cityData.faqAr : cityData.faqEn;
  const homeUrl = locale === "ar" ? baseUrl : `${baseUrl}/en`;
  const eqTypes = equipmentTypes[isAr ? "ar" : "en"];

  const breadcrumbItems = [
    { name: isAr ? "الرئيسية" : "Home", url: homeUrl },
    { name: isAr ? "مناطق الخدمة" : "Service Areas", url: `${baseUrl}/${locale}` },
    { name: cityName, url: `${baseUrl}/${locale}/locations/${city}` },
  ];

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    isAr
      ? `أود الاستفسار عن تأجير معدات في ${cityName}`
      : `I would like to inquire about equipment rental in ${cityName}`
  )}`;

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
            <span className="text-white/80">{cityName}</span>
          </nav>
          <p className="mb-3 text-sm font-bold text-[#00A651]">{region}</p>
          <h1 className="text-3xl font-extrabold leading-snug md:text-4xl">
            {isAr
              ? `تأجير معدات ثقيلة في ${cityName} | رافعات وكرينات للإيجار`
              : `Heavy Equipment Rental in ${cityName} | Cranes & Forklifts for Rent`}
          </h1>
          <p className="mt-6 max-w-3xl leading-8 text-white/80 text-sm md:text-base">{desc}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2">
              <Image src="/whatsapp-icon.svg" alt="" width={18} height={18} />
              {isAr ? "تحدث معنا" : "Talk to Us"}
            </a>
            <a href={`/${locale}#contact`} className="btn-secondary">
              {isAr ? "طلب عبر الموقع" : "Request via Website"}
            </a>
          </div>
        </div>
      </section>

      {/* ── Available Equipment Types ── */}
      <section className="py-12 md:py-16">
        <div className="section-container max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-[#111827] md:text-3xl">
            {isAr
              ? `المعدات المتاحة للإيجار في ${cityName}`
              : `Equipment Available for Rent in ${cityName}`}
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {eqTypes.map(({ label, slug }) => (
              <Link
                key={slug}
                href={`/${locale}/category/${slug}`}
                className="flex items-center justify-center rounded-2xl border border-slate-100 bg-white p-5 text-center font-bold text-[#111827] shadow-soft transition hover:-translate-y-0.5 hover:border-[#006C35] hover:text-[#006C35] hover:shadow-md text-sm"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="bg-[#06281A] py-12 md:py-16 text-white">
        <div className="section-container max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-[#00A651] md:text-3xl">
            {isAr
              ? `لماذا تختار رافعات النصر لمشاريعك في ${cityName}؟`
              : `Why Choose Al Nasr Cranes for Your Projects in ${cityName}?`}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {(isAr
              ? [
                  "أسطول حديث ومتنوع يلبي جميع احتياجات مشاريعكم",
                  "سرعة في الاستجابة والتسليم داخل المدينة وما حولها",
                  "مشغلون مدربون ومعتمدون لضمان أعلى معايير السلامة",
                  "أسعار تنافسية مع خيارات إيجار مرنة يومية وشهرية",
                  "فريق دعم متخصص على مدار الساعة طوال أيام الأسبوع",
                  "خبرة واسعة في خدمة المشاريع الصناعية والإنشائية الكبرى",
                ]
              : [
                  "Modern, diverse fleet meeting all your project needs",
                  "Fast response and delivery within the city and surroundings",
                  "Trained, certified operators ensuring highest safety standards",
                  "Competitive prices with flexible daily and monthly rental options",
                  "24/7 specialist support team throughout the week",
                  "Extensive experience serving major industrial and construction projects",
                ]
            ).map((point, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3">
                <span className="mt-0.5 text-[#00A651] text-lg">✓</span>
                <span className="text-sm leading-6 text-white/85">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 text-center">
        <div className="section-container max-w-2xl">
          <h2 className="mb-4 text-2xl font-extrabold text-[#111827]">
            {isAr ? `جاهز للبدء في ${cityName}؟` : `Ready to Start in ${cityName}?`}
          </h2>
          <p className="mb-6 text-[#6B7280]">
            {isAr
              ? "تواصل معنا الآن للحصول على أفضل سعر وأسرع استجابة"
              : "Contact us now for the best price and fastest response"}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2">
              <Image src="/whatsapp-icon.svg" alt="" width={18} height={18} />
              {isAr ? "واتساب: 0558204317" : "WhatsApp: 0558204317"}
            </a>
            <a href={`tel:+966558204317`} className="btn-secondary">
              {isAr ? "اتصل: 0558204317" : "Call: 0558204317"}
            </a>
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
