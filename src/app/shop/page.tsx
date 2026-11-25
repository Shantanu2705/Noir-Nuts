import React from "react";
import { Metadata } from "next";
import { Sparkles, MessageCircle } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductGrid from "@/components/shop/ProductGrid";
import { BRAND_WHATSAPP_NUMBER } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Shop Handcrafted Chocolates & Gifts | Siliguri Confectionery",
  description:
    "Explore our full collection of handcrafted chocolate gift boxes, wedding return gifts, bridal wedding thalis, celebration hampers, and artisan chocolate confections in Siliguri. Direct ordering on WhatsApp.",
  alternates: {
    canonical: "https://noirandnuts.vercel.app/shop",
  },
  openGraph: {
    title: "Shop Artisanal Chocolates - Noir & Nuts Siliguri",
    description: "Explore our collection of handcrafted chocolate gift boxes, wedding return gifts, and nut treats in Siliguri.",
    url: "https://noirandnuts.vercel.app/shop",
    images: ["/images/products/wedding-return-gift-box-4.jpeg"],
  },
};

export default function ShopPage() {
  const customOrderUrl = `https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Noir & Nuts! I would like to inquire about customized chocolate boxes and flavours."
  )}`;

  return (
    <div className="bg-ivory-warm pt-28 pb-20 sm:pt-36 sm:pb-28 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-gold-champagne/40 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-antique" />
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-chocolate-espresso">
              Handmade in Siliguri
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-chocolate-espresso">
            The Confectionery Collection
          </h1>

          <p className="text-base text-chocolate-rich/75 leading-relaxed">
            Every treat is individually handcrafted with fine cocoa, roasted nuts, and authentic fusion confections.
            Choose your box and order directly on WhatsApp.
          </p>

          <div className="w-16 h-0.5 bg-gold-champagne mx-auto mt-4" />
        </div>

        {/* Product Grid with Filtering, Search & Sorting */}
        <ProductGrid initialProducts={PRODUCTS} />

        {/* Custom Order Box / Flavour Assistance Banner */}
        <div className="rounded-3xl bg-chocolate-deep text-ivory-warm p-8 sm:p-12 border border-gold-champagne/30 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-gold-champagne font-semibold">
              Bespoke Requests & Customisation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Looking for a specific flavour assortment or bulk festive order?
            </h3>
            <p className="text-xs sm:text-sm text-ivory-warm/75 max-w-xl">
              We gladly customise flavours and quantities for birthdays, weddings, celebrations, and corporate events
              across Siliguri and West Bengal.
            </p>
          </div>

          <a
            href={customOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs uppercase tracking-[0.16em] font-medium shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat With Chef</span>
          </a>
        </div>
      </div>
    </div>
  );
}
