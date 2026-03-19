import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PaindeSsong | 빵드숑 — Artisan Home Bakery",
  description:
    "Handcrafted French-Korean pastries baked with love in Fort Lee, NJ. Madeleines, cheesecakes, financiers, and more. Pre-order weekly.",
  keywords: [
    "bakery",
    "home baker",
    "Fort Lee NJ",
    "madeleines",
    "cheesecake",
    "Korean bakery",
    "French pastries",
    "PaindeSsong",
    "빵드숑",
  ],
  openGraph: {
    title: "PaindeSsong | 빵드숑 — Artisan Home Bakery",
    description:
      "Handcrafted French-Korean pastries baked with love in Fort Lee, NJ.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
