import React from "react";
import Image from "next/image";
import { MessageCircle, Gift, Cake, Sparkles, Heart } from "lucide-react";
import { generateGiftingInquiryUrl } from "@/lib/whatsapp";

const OCCASIONS = [
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
    icon: Heart,
    title: "Special Moments",
    description: "Anniversaries, proposals, date nights, or a heartfelt thank you crafted in fine cocoa.",
  },
  {
    icon: Gift,
    title: "Thoughtful Gifts",
    description: "Delight colleagues, friends, and family with beautifully presented confections.",
  },
];

export default function GiftingSection() {
  const giftingUrl = generateGiftingInquiryUrl("Special Occasions & Gifting");

  return (
    <section className="py-24 bg-chocolate-deep text-ivory-warm relative overflow-hidden">
      {/* Subtle gold radial shimmer */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-champagne/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-champagne font-semibold">
            Bespoke Confectionery Gifting
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ivory-warm">
            Make Every Occasion a Little Sweeter.
          </h2>
          <p className="text-sm sm:text-base text-ivory-warm/75 max-w-lg mx-auto leading-relaxed">
            From thoughtful surprises to special celebrations, share happiness through beautifully crafted chocolate
            delights.
          </p>
          <div className="w-16 h-0.5 bg-gold-champagne mx-auto mt-4" />
        </div>

        {/* 4 Occasion Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Visual Showcase & WhatsApp CTA Banner */}
        <div className="rounded-3xl bg-chocolate-espresso/90 border border-gold-champagne/30 p-8 sm:p-12 overflow-hidden shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-champagne font-semibold">
                Direct Atelier Inquiry
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                Planning a special gift or celebratory chocolate hamper in Siliguri?
              </h3>
              <p className="text-sm text-ivory-warm/80 leading-relaxed max-w-xl">
                Chat directly with our team on WhatsApp. Share your celebration date and preferred flavours, and we will
                recommend the sweetest assortment for your budget and occasion.
              </p>
              <div className="pt-2">
                <a
                  href={giftingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium text-xs uppercase tracking-[0.16em] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Create a Sweet Surprise</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold-champagne/30 bg-white p-2 shadow-sm group">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/products/choco-fusion-16.jpeg"
                    alt="Noir & Nuts 16 Piece Grand Fusion Gift Box"
                    fill
                    className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-500 contrast-[1.03]"
                    sizes="240px"
                  />
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold-champagne/30 bg-white p-2 shadow-sm group">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/products/choco-stick-box.jpeg"
                    alt="Noir & Nuts Choco Stick Confection Box"
                    fill
                    className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-500 contrast-[1.03]"
                    sizes="240px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
