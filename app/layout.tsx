import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bunyan Contracting & Crane Rental",
  description: "Bilingual contracting and heavy equipment rental website."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
