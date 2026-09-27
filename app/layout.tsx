import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seaside Web Studio — websites for small businesses",
  description:
    "Seaside Web Studio builds a branded website for one small business. Customers order or book on your domain. Payments go to you. You run the dashboard, email, and hours.",
  openGraph: {
    title: "Seaside Web Studio",
    description:
      "A branded website for one small business — orders or bookings, checkout, and a dashboard you run yourself.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-sans text-ink">{children}</body>
    </html>
  );
}
