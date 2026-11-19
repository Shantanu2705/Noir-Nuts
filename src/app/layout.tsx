import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActionButtons from "@/components/common/FloatingActionButtons";
import CartDrawer from "@/components/cart/CartDrawer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B100D",
};

export const metadata: Metadata = {
  title: {
    default: "Noir & Nuts | Handcrafted Luxury Chocolates & Nut Confections in Siliguri",
    template: "%s | Noir & Nuts Siliguri",
  },
  description:
    "Taste the luxury, feel the love with Noir & Nuts! Premium handcrafted chocolates, nut-filled confections, and bespoke gifting boxes in Hakim Para, Siliguri, West Bengal. Order directly via WhatsApp.",
  keywords: [
    "Premium Chocolates in Siliguri",
    "Handmade Chocolates in Siliguri",
    "Chocolate Gifts in Siliguri",
    "Chocolate and Nut Confections",
    "Noir & Nuts Siliguri",
    "Luxury Chocolate Boutique",
    "Pista Kunafa Chocolate",
    "Assorted Chocolate Box Siliguri",
  ],
  authors: [{ name: "Noir & Nuts" }],
  creator: "Noir & Nuts Siliguri",
  publisher: "Noir & Nuts",
  metadataBase: new URL("https://noirandnuts.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://noirandnuts.vercel.app",
    title: "Noir & Nuts | A Little Chocolate, A Lot of Happiness!",
    description:
      "Handcrafted premium chocolates and nut confections in Siliguri. Order fresh artisanal boxes directly on WhatsApp.",
    siteName: "Noir & Nuts",
    images: [
      {
        url: "/images/products/choco-fusion-12.jpeg",
        width: 1200,
        height: 630,
        alt: "Noir & Nuts Luxury Handcrafted Chocolate Assortment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noir & Nuts | Luxury Handcrafted Chocolates in Siliguri",
    description: "A Little Chocolate, A Lot of Happiness! Handcrafted confections and gifts in Siliguri.",
    images: ["/images/products/choco-fusion-12.jpeg"],
  },
  icons: {
    icon: "/images/logo/logo.jpeg",
    apple: "/images/logo/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-ivory-warm text-chocolate-espresso font-sans antialiased min-h-screen flex flex-col selection:bg-gold-champagne selection:text-chocolate-espresso">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <FloatingActionButtons />
        </CartProvider>
      </body>
    </html>
  );
}
