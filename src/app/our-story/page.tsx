import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, Heart, Award, ArrowRight, MessageCircle } from "lucide-react";
import { BRAND_WHATSAPP_NUMBER } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Our Story | Handcrafted Passion in Siliguri",
  description:
    "Learn the story of Noir & Nuts — handcrafted artisanal chocolates, roasted nut delights, and confectionery confections crafted with love in Hakim Para, Siliguri.",
};

export default function OurStoryPage() {
  const whatsappUrl = `https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Noir & Nuts! I loved reading your story and would like to order handcrafted chocolates."
  )}`;

  return (
    <div className="bg-ivory-warm pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {/* Story Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-gold-champagne/40 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-antique" />
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-chocolate-espresso">
              The Atelier Story
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-chocolate-espresso leading-tight">
            A Passion for Every Little Indulgence.
          </h1>

          <p className="text-lg text-gold-antique font-serif italic max-w-xl mx-auto">
            &ldquo;Taste the Luxury, Feel the Love!&rdquo;
          </p>

          <div className="w-20 h-0.5 bg-gold-champagne mx-auto mt-4" />
        </div>

        {/* Narrative Section 1: Philosophy & Roots in Siliguri */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2.5 rounded-3xl border border-gold-champagne/30 -rotate-1 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-luxury-lg aspect-[4/4] border border-accent-beige">
                <Image
                  src="/images/logo/logo.jpeg"
                  alt="Noir & Nuts Monogram and Emblem"
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 90vw, 480px"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.25em] text-accent-taupe font-semibold">
                Born in Siliguri
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-chocolate-espresso">
                Where Artisanal Confection Meets Warm Hearted Giving
              </h2>
            </div>

            <div className="space-y-4 text-chocolate-rich/85 leading-relaxed text-sm sm:text-base">
              <p>
                At Noir & Nuts, we believe that happiness can be found in the smallest moments. A piece of chocolate
                shared with someone special, a thoughtful gift, or a little treat after a long day — these are the
                moments that make life sweeter.
              </p>
              <p>
                Founded in the vibrant city of Siliguri at Hakim Para, our atelier began with a clear purpose: to craft
                chocolates that transcend conventional commercial sweets. We marry traditional Indian dessert nostalgia
                — such as Rasamalai, Mawa, and Paan Pasinda — with global culinary sensations like Turkish Pista
                Kunafa, Belgian-style pralines, and Lotus Biscoff crunches.
              </p>
              <p>
                Every chocolate is created by hand in small, meticulous batches. No rushed production lines. No shortcuts.
                Just honest craftsmanship, pure cocoa butter, and generously slow-roasted dry fruits.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Section 2: Four Tenets of Craftsmanship */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-accent-beige/80 shadow-luxury">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <p className="text-xs uppercase tracking-[0.25em] text-accent-taupe font-semibold">
              Our Principles
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-chocolate-espresso">
              Crafted With Intention & Care
            </h2>
            <div className="w-14 h-0.5 bg-gold-champagne mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 p-6 rounded-2xl bg-ivory-warm/40 border border-accent-beige text-center">
              <div className="w-12 h-12 rounded-full bg-white border border-gold-champagne/30 mx-auto flex items-center justify-center text-gold-antique">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-chocolate-espresso">Selected Ingredients</h3>
              <p className="text-xs sm:text-sm text-chocolate-rich/75 leading-relaxed">
                Slow-roasted California almonds, hand-picked pistachios, seed blends, and selected Medjool dates enrobed
                in velvety chocolate.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-ivory-warm/40 border border-accent-beige text-center">
              <div className="w-12 h-12 rounded-full bg-white border border-gold-champagne/30 mx-auto flex items-center justify-center text-gold-antique">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-chocolate-espresso">Signature Fusion</h3>
              <p className="text-xs sm:text-sm text-chocolate-rich/75 leading-relaxed">
                Unique flavour harmony from saffron Rasamalai and refreshing Paan Pasinda to crunchy Pista Kunafa and
                rich Moca Espresso.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-ivory-warm/40 border border-accent-beige text-center">
              <div className="w-12 h-12 rounded-full bg-white border border-gold-champagne/30 mx-auto flex items-center justify-center text-gold-antique">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-chocolate-espresso">Made Fresh to Order</h3>
              <p className="text-xs sm:text-sm text-chocolate-rich/75 leading-relaxed">
                Your confections aren&apos;t sitting in a warehouse. They are molded and boxed fresh in Siliguri to
                ensure absolute peak flavour.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Section 3: Visual Collage & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-chocolate-espresso">
              &ldquo;Because at Noir & Nuts, it&apos;s never just about chocolate.&rdquo;
            </h2>
            <p className="text-base text-chocolate-rich/85 leading-relaxed">
              Whether you are sending a festive celebration hamper to loved ones across Siliguri, celebrating an
              anniversary, gifting birthday boxes, or treating yourself to roasted chocolate rings with evening tea,
              Noir & Nuts is here to make the experience unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-chocolate-espresso hover:bg-chocolate-deep text-ivory-warm text-xs uppercase tracking-[0.16em] font-medium transition-all shadow-luxury"
              >
                <span>Browse The Collection</span>
                <ArrowRight className="w-4 h-4 text-gold-champagne" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs uppercase tracking-[0.16em] font-medium shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-accent-beige shadow-sm">
              <Image
                src="/images/products/choco-fusion-9.jpeg"
                alt="Noir & Nuts 9 Piece Fusion Box"
                fill
                className="object-cover"
                sizes="260px"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-accent-beige shadow-sm">
              <Image
                src="/images/products/roasted-nut-choco-rings.jpeg"
                alt="Noir & Nuts Nut Loaded Chocolate Rings"
                fill
                className="object-cover"
                sizes="260px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
