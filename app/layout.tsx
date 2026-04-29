import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "السامي للمقاولات وتأجير الرافعات",
  description:
    "شركة السامي لتأجير الرافعات والمعدات الثقيلة في المملكة العربية السعودية. حلول احترافية للمشاريع الإنشائية مع دعم فني على مدار الساعة.",
  keywords: [
    "تأجير رافعات",
    "معدات ثقيلة",
    "رافعات شوكية",
    "مولدات كهرباء",
    "تأجير معدات"
  ],
  openGraph: {
    title: "السامي للمقاولات وتأجير الرافعات",
    description: "معدات حديثة وخدمة موثوقة لتنفيذ مشاريعكم بكفاءة وأمان.",
    locale: "ar_SA",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
