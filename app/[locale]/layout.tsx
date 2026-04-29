import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/locale";
import { translations } from "@/data/content";

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  if (!isLocale(locale)) return {};

  if (locale === "ar") {
    return {
      title: "بُنيان للمقاولات وتأجير الرافعات | تأجير رافعات ومعدات ثقيلة",
      description:
        "شركة بُنيان للمقاولات وتأجير الرافعات تقدم حلول تأجير الرافعات والمعدات الثقيلة وخدمات المقاولات في المملكة العربية السعودية."
    };
  }

  return {
    title: "Bunyan Contracting & Crane Rental | Cranes & Heavy Equipment Rental",
    description:
      "Bunyan Contracting & Crane Rental provides crane rental, heavy equipment rental, and contracting solutions across Saudi Arabia."
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!isLocale(locale)) notFound();

  return (
    <div lang={locale} dir={translations[locale].dir} className="min-h-screen">
      {children}
    </div>
  );
}
