import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "رافعات النصر | تأجير رافعات ومعدات ثقيلة",
  description: "موقع النصر لتأجير الرافعات والمعدات الثقيلة."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
