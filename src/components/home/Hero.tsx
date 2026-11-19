"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles, Award } from "lucide-react";
import { BRAND_WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Noir & Nuts! I saw your luxury collection and would like to order handcrafted chocolates."
  )}`;

  return (
    <section className="relative overflow-hidden bg-ivory-warm pt-28 pb-16 lg:pt-36 lg:pb-28">
      {/* Subtle warm backdrop glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-gold-champagne/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent-caramel/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT CONTENT: Editorial Typography */}
          <div className="lg:col-span-7 space-y-7">
            {/* Small introductory label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-gold-champagne/40 shadow-xs">
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

          {/* RIGHT CONTENT: Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Gold decorative border offset */}
              <div className="absolute -inset-2.5 rounded-3xl border border-gold-champagne/30 -rotate-1 pointer-events-none" />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-luxury-lg border border-accent-beige/80 aspect-[4/4.5] group">
                <Image
                  src="/images/products/choco-fusion-12.jpeg"
                  alt="Noir & Nuts Choco Fusion Box - 12 Handcrafted Chocolates with Kunafa, Dates and Roasted Nuts"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 90vw, 480px"
                />

                {/* Subtle dark gradient overlay at bottom for caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-espresso/70 via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-5 left-5 right-5 text-ivory-warm">
                  <div className="flex items-center gap-2 text-gold-champagne text-[11px] uppercase tracking-widest font-semibold mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Signature Collection</span>
                  </div>
                  <p className="font-serif text-lg font-medium text-white">Choco Fusion Box (12 Assorted)</p>
                  <p className="text-xs text-ivory-warm/80">Pista Kunafa • Hazelnut • Stuffed Dates • Rasamalai</p>
                </div>
              </div>

              {/* Floating secondary accent badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-luxury border border-gold-champagne/40 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold-champagne/50 flex-shrink-0">
                  <Image
                    src="/images/logo/logo.jpeg"
                    alt="Noir & Nuts Seal"
                    fill
                    className="object-contain p-0.5"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-accent-taupe font-semibold">Handcrafted in</p>
                  <p className="font-serif text-sm font-bold text-chocolate-espresso">Siliguri, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
