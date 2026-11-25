"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles, Award } from "lucide-react";
import { BRAND_WHATSAPP_NUMBER } from "@/lib/whatsapp";

const HERO_SHOWCASES = [
  {
    title: "Choco Fusion Box (12 Assorted)",
    subtitle: "Pista Kunafa • Stuffed Dates • Hazelnut Praline • Oreo Crunch",
    image: "/images/products/choco-fusion-12.jpeg",
    badge: "Signature Collection",
    shortLabel: "12 Assorted",
  },
  {
    title: "Royal Wedding Trousseau Thali",
    subtitle: "Sindur Daan & Shubh Bibaha Chocolate Plaques • Gold Silk & Pearls",
    image: "/images/products/wedding-trousseau-thali.jpeg",
    badge: "Bridal Special",
    shortLabel: "Wedding Thali",
  },
  {
    title: "Choco Floral Treats Box",
    subtitle: "Artisan Floral Medallion • Berry Blast • Rose Truffles",
    image: "/images/products/choco-floral-treats.jpeg",
    badge: "Boutique Gift Box",
    shortLabel: "Floral Box",
  },
  {
    title: "Roasted Nut & Choco Rings",
    subtitle: "Roasted California Almonds • Seeds • Dual Milk & White Cocoa",
    image: "/images/products/roasted-nut-choco-rings.jpeg",
    badge: "Nut Delights",
    shortLabel: "Nut Rings",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = HERO_SHOWCASES[activeIndex];

  const whatsappUrl = `https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Noir & Nuts! I saw your luxury collection and would like to order handcrafted chocolates."
  )}`;

  return (
    <section className="relative overflow-hidden bg-ivory-warm pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Subtle warm backdrop glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-gold-champagne/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent-caramel/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* LEFT CONTENT: Editorial Typography */}
          <div className="lg:col-span-7 space-y-7">
            {/* Small introductory label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-gold-champagne/40 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-gold-antique" />
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-chocolate-espresso">
                THE ART OF FINE INDULGENCE
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-chocolate-espresso leading-[1.08] tracking-tight">
              A Little Chocolate,
              <br />
              <span className="gold-gradient-text italic font-normal">A Lot of Happiness.</span>
            </h1>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-chocolate-rich/85 max-w-xl font-normal leading-relaxed">
              Discover beautifully handcrafted chocolates and irresistible nut-filled delights, thoughtfully created to
              make life&apos;s sweetest moments even more special.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-chocolate-espresso hover:bg-chocolate-deep text-ivory-warm border border-gold-champagne/50 hover:border-gold-champagne text-xs uppercase tracking-[0.16em] font-medium shadow-luxury hover:shadow-luxury-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Explore Our Collection</span>
                <ArrowRight className="w-4 h-4 text-gold-champagne" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs uppercase tracking-[0.16em] font-medium shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Brand Promise Underneath */}
            <div className="pt-4 border-t border-accent-beige/70">
              <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-accent-taupe font-medium">
                <span className="text-chocolate-espresso font-semibold">Premium Quality</span>
                <span className="text-gold-champagne">•</span>
                <span className="text-chocolate-espresso font-semibold">Delicious Flavours</span>
                <span className="text-gold-champagne">•</span>
                <span className="text-chocolate-espresso font-semibold">Beautifully Crafted</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT: Editorial Studio Showcase in true 4:3 ratio without ugly cropping */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Gold decorative border offset */}
              <div className="absolute -inset-3 rounded-3xl border border-gold-champagne/30 -rotate-1 pointer-events-none" />

              {/* Main Image Frame: Pure white photography backdrop, 4:3 aspect ratio */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-luxury-lg border border-accent-beige/90 aspect-[4/3] p-3 group">
                <div className="relative w-full h-full">
                  <Image
                    key={current.image}
                    src={current.image}
                    alt={current.title}
                    fill
                    priority
                    className="object-contain object-center drop-shadow-md group-hover:scale-105 transition-all duration-700 ease-out contrast-[1.03]"
                    sizes="(max-width: 1024px) 90vw, 520px"
                  />
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-gold-champagne/40 shadow-xs">
                  <Award className="w-3.5 h-3.5 text-gold-antique" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-chocolate-espresso">
                    {current.badge}
                  </span>
                </div>
              </div>

              {/* Showcase switcher pills under image */}
              <div className="mt-4 flex items-center justify-between gap-2 p-2 rounded-2xl bg-white/80 backdrop-blur-xs border border-accent-beige shadow-xs">
                {HERO_SHOWCASES.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex-1 py-1.5 px-2 rounded-xl text-[10px] uppercase tracking-wider font-semibold transition-all ${
                      activeIndex === idx
                        ? "bg-chocolate-espresso text-gold-champagne shadow-xs"
                        : "text-chocolate-rich/70 hover:text-chocolate-espresso"
                    }`}
                  >
                    {item.shortLabel}
                  </button>
                ))}
              </div>

              {/* Floating Siliguri seal badge */}
              <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-luxury border border-gold-champagne/40 flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gold-champagne/50 flex-shrink-0">
                  <Image
                    src="/images/logo/logo.jpeg"
                    alt="Noir & Nuts Seal"
                    fill
                    className="object-contain p-0.5"
                    sizes="36px"
                  />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-accent-taupe font-semibold">Handcrafted in</p>
                  <p className="font-serif text-xs font-bold text-chocolate-espresso">Siliguri, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
