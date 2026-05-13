import type { Metadata } from "next";
import "./globals.css";
import { DISPLAY_EMAIL, DISPLAY_PHONE } from "@/data/content";
import { OrganizationSchema } from "@/components/SchemaOrg";

const baseUrl = "https://alnasrcranes.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "رافعات النصر | تأجير رافعات ومعدات ثقيلة في السعودية",
    template: "%s | رافعات النصر",
  },
  description: `شركة النصر للمقاولات وتأجير الرافعات تقدم حلول تأجير الرافعات والمعدات الثقيلة في جميع مناطق المملكة. الهاتف: ${DISPLAY_PHONE}، البريد: ${DISPLAY_EMAIL}.`,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
    languages: {
      ar: baseUrl,
      en: `${baseUrl}/en`,
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <OrganizationSchema />
        {children}
      </body>
    </html>
  );
}
