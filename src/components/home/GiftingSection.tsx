"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Gift, Cake, Sparkles, Heart, Play, Pause, Film } from "lucide-react";
import { generateGiftingInquiryUrl } from "@/lib/whatsapp";

const OCCASIONS = [
  {
    icon: Heart,
    title: "Wedding Trousseau & Thalis",
    description: "Bespoke Shubh Bibaha & Sindur Daan chocolate thalis adorned with gold silk and pearls.",
  },
  {
    icon: Cake,
    title: "Birthday Surprises",
    description: "Make milestone years and personal celebrations genuinely sweeter with artisan assorted boxes.",
  },
  {
    icon: Sparkles,
    title: "Festive Celebrations",
    description: "Celebrate Diwali, Eid, Christmas, and traditional festivals with Indian-fusion chocolate treasures.",
  },
  {
    icon: Gift,
    title: "Bespoke Gift Hampers",
    description: "Woven baskets draped in pink tulle with hand-piped floral chocolate bars and truffles.",
  },
];

export default function GiftingSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const giftingUrl = generateGiftingInquiryUrl("Wedding & Festive Celebration Hamper");

  return (
    <section className="py-24 bg-chocolate-deep text-ivory-warm relative overflow-hidden">
      {/* Subtle gold radial shimmer */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-champagne/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-champagne font-semibold">
            Bespoke Confectionery Gifting
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ivory-warm">
            Make Every Occasion a Little Sweeter.
          </h2>
          <p className="text-sm sm:text-base text-ivory-warm/75 max-w-lg mx-auto leading-relaxed">
            From bridal trousseau thalis to woven celebration hampers, share handcrafted happiness tailored for your
            special moments in Siliguri.
          </p>
          <div className="w-16 h-0.5 bg-gold-champagne mx-auto mt-4" />
        </div>

        {/* 4 Occasion Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OCCASIONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-chocolate-rich/70 border border-gold-champagne/20 hover:border-gold-champagne/60 hover:bg-chocolate-rich transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-chocolate-espresso border border-gold-champagne/40 flex items-center justify-center text-gold-champagne mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-ivory-warm mb-2 group-hover:text-gold-champagne transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-ivory-warm/75 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Video Reel & Bespoke Hamper Feature Grid */}
        <div className="rounded-3xl bg-chocolate-espresso/90 border border-gold-champagne/30 p-8 sm:p-12 overflow-hidden shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Narrative & CTA */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-chocolate-rich border border-gold-champagne/40 text-gold-champagne text-xs font-semibold uppercase tracking-wider">
                <Film className="w-3.5 h-3.5" />
                <span>Atelier in Motion • Authentic Video</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                Bespoke Wedding Thalis & Celebratory Hampers
              </h3>
              <p className="text-sm text-ivory-warm/80 leading-relaxed">
                Watch our handcrafted celebration hamper in motion. Every basket features woven golden arches, rich
                pink tulle, dried botanical roses, and individually hand-piped chocolate art bars and truffles.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={giftingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium text-xs uppercase tracking-[0.16em] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-chocolate-rich hover:bg-chocolate-deep text-ivory-warm border border-gold-champagne/40 text-xs uppercase tracking-wider font-medium transition-colors"
                >
                  <span>View All Hampers</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Embedded Video & Wedding Thali Preview */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Video Player Card */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold-champagne/40 bg-black shadow-lg group">
                <video
                  id="confectionery-video"
                  src="/videos/confectionery-craft.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2 rounded-xl bg-chocolate-espresso/80 backdrop-blur-xs text-[11px] text-ivory-warm border border-gold-champagne/30">
                  <span className="font-serif">Festive Hamper Reel</span>
                  <button
                    onClick={() => {
                      const v = document.getElementById("confectionery-video") as HTMLVideoElement;
                      if (v) {
                        if (v.paused) {
                          v.play();
                          setIsPlaying(true);
                        } else {
                          v.pause();
                          setIsPlaying(false);
                        }
                      }
                    }}
                    className="p-1 text-gold-champagne hover:scale-110 transition-transform"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-gold-champagne" />}
                  </button>
                </div>
              </div>

              {/* Royal Wedding Thali Card */}
              <Link
                href="/product/wedding-trousseau-chocolate-thali"
                className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold-champagne/40 bg-white p-3 shadow-lg group flex flex-col justify-between"
              >
                <div className="relative w-full h-3/4">
                  <Image
                    src="/images/products/wedding-trousseau-thali.jpeg"
                    alt="Noir & Nuts Royal Wedding Trousseau Chocolate Thali"
                    fill
                    className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-500 contrast-[1.03]"
                    sizes="260px"
                  />
                </div>
                <div className="pt-2 border-t border-accent-beige/60">
                  <p className="text-[10px] uppercase tracking-wider text-accent-taupe font-semibold">Bridal Special</p>
                  <p className="font-serif text-sm font-bold text-chocolate-espresso truncate group-hover:text-gold-antique transition-colors">
                    Wedding Trousseau Thali
                  </p>
                  <p className="text-xs text-gold-antique font-semibold">₹1,499</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
