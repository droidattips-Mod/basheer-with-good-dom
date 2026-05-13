import type { Metadata } from "next";
import { translations } from "@/data/content";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Features from "@/components/site/Features";
import EquipmentSection from "@/components/site/EquipmentSection";
import Services from "@/components/site/Services";
import About from "@/components/site/About";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";

const baseUrl = "https://alnasrcranes.vercel.app";

export const metadata: Metadata = {
  title: "رافعات النصر | تأجير رافعات وكرينات ومعدات ثقيلة في السعودية",
  description:
    "شركة رافعات النصر متخصصة في تأجير الرافعات الشوكية، الكرينات، البوم تراك، السيزرلفت، البوبكات والمعدات الثقيلة في جميع مناطق المملكة العربية السعودية. خدمة 24/7، أسعار تنافسية، معدات حديثة. اتصل: 0558204317",
  keywords:
    "تأجير رافعات, تأجير كرينات, معدات ثقيلة, رافعة شوكية, تأجير معدات السعودية, كرين للإيجار, بوبكات للإيجار, سيزرلفت, بوم تراك, تأجير معدات الرياض, رافعات النصر",
  openGraph: {
    title: "رافعات النصر | تأجير معدات ثقيلة في السعودية",
    description: "تأجير رافعات وكرينات ومعدات ثقيلة بأسطول حديث وفريق متخصص",
    url: baseUrl,
    siteName: "رافعات النصر",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: `${baseUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "رافعات النصر - تأجير معدات ثقيلة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "رافعات النصر | تأجير معدات ثقيلة",
    description: "تأجير رافعات وكرينات في السعودية",
    images: [`${baseUrl}/logo.png`],
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      "ar-SA": baseUrl,
      "en-US": `${baseUrl}/en`,
      "x-default": baseUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootPage() {
  const t = translations["ar"];

  return (
    <main className="bg-[#F7F8F6] min-h-screen">
      <Header locale="ar" brandName={t.brandName} links={t.nav} languageLabel={t.languageSwitchLabel} />
      <Hero locale="ar" />
      <Features locale="ar" />
      <EquipmentSection locale="ar" />
      <Services locale="ar" />
      <About locale="ar" />
      <ContactSection locale="ar" />
      <Footer locale="ar" />
      <FloatingButtons locale="ar" />
    </main>
  );
}
