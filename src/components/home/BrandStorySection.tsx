import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export default function BrandStorySection() {
  return (
    <section className="py-24 bg-white border-y border-accent-beige/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-3xl border border-gold-champagne/30 rotate-2 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden bg-ivory-cream shadow-luxury-lg aspect-[4/4.5] border border-accent-beige">
                <Image
                  src="/images/products/choco-floral-treats.jpeg"
                  alt="Noir & Nuts Artisanal Floral Chocolate Box Creation"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 480px"
                />
              </div>

              {/* Floating quote card */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-chocolate-espresso text-ivory-warm p-5 sm:p-6 rounded-2xl shadow-luxury max-w-xs border border-gold-champagne/40">
                <Quote className="w-6 h-6 text-gold-champagne mb-2 opacity-80" />
                <p className="font-serif italic text-sm text-ivory-warm leading-snug">
                  &ldquo;Taste the Luxury, Feel the Love!&rdquo;
                </p>
                <p className="text-[10px] uppercase tracking-widest text-gold-champagne/90 mt-2 font-medium">
                  Noir & Nuts • Siliguri
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Content Side */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-taupe">
                Handcrafted Confectionery Atelier
              </span>
              <div className="w-12 h-0.5 bg-gold-champagne mt-2" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-chocolate-espresso leading-tight">
              A Passion for Every Little Indulgence.
            </h2>

            <div className="space-y-4 text-base text-chocolate-rich/85 leading-relaxed font-normal">
              <p>
                At Noir & Nuts, we believe that happiness can be found in the smallest moments. A piece of chocolate
                shared with someone special, a thoughtful gift, or a little treat after a long day — these are the
                moments that make life sweeter.
              </p>
              <p>
                Our world revolves around premium chocolates, delightful nut-filled creations, and beautifully crafted
                treats designed to make every occasion memorable.
              </p>
              <p className="font-serif text-lg text-chocolate-espresso font-medium italic border-l-2 border-gold-champagne pl-4 my-2">
                &ldquo;Because at Noir & Nuts, it&apos;s never just about chocolate. It&apos;s about the happiness that comes
                with every bite.&rdquo;
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/our-story"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-chocolate-deep hover:bg-chocolate-espresso text-ivory-warm border border-gold-champagne/50 hover:border-gold-champagne text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 shadow-luxury group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 text-gold-champagne group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
