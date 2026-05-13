import type { Metadata } from "next";
import "./globals.css";
import { DISPLAY_EMAIL, DISPLAY_PHONE } from "@/data/content";

const baseUrl = "https://alnasrcranes.vercel.app";

export const metadata: Metadata = {
  title: "رافعات النصر | تأجير رافعات ومعدات ثقيلة",
  description: `شركة النصر للمقاولات وتأجير الرافعات تقدم حلول تأجير الرافعات والمعدات الثقيلة. الهاتف: ${DISPLAY_PHONE}، البريد: ${DISPLAY_EMAIL}.`,
  alternates: {
    canonical: baseUrl,
    languages: {
      ar: baseUrl,
      en: `${baseUrl}/en`,
      "x-default": baseUrl,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
