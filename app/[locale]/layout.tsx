import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/locale";
import { translations, DISPLAY_EMAIL, DISPLAY_PHONE } from "@/data/content";

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
      title: "النصر للمقاولات وتأجير الرافعات | تأجير رافعات ومعدات ثقيلة",
      description: `شركة النصر للمقاولات وتأجير الرافعات تقدم حلول تأجير الرافعات والمعدات الثقيلة. الهاتف: ${DISPLAY_PHONE}، البريد: ${DISPLAY_EMAIL}.`
    };
  }

  return {
    title: "Al Nasr Cranes | Light & Heavy Equipment Rental",
    description: `Al Nasr Cranes provides Light and heavy equipment rental across Saudi Arabia. Phone: ${DISPLAY_PHONE}, email: ${DISPLAY_EMAIL}.`
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
