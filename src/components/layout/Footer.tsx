import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, Heart } from "lucide-react";
import { BRAND_PHONE, BRAND_WHATSAPP_NUMBER, BRAND_EMAIL, BRAND_ADDRESS, GOOGLE_MAPS_URL } from "@/lib/whatsapp";

export default function Footer() {
  const phoneUrl = `tel:${BRAND_PHONE.replace(/\s+/g, "")}`;
  const whatsappUrl = `https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Noir & Nuts! I would like to place an order or inquire about your collection."
  )}`;

  return (
    <footer className="bg-chocolate-espresso text-ivory-warm border-t border-gold-champagne/20">
      {/* Decorative top gold hairline */}
      <div className="h-[2px] w-full gold-line opacity-75" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT: Official Noir & Nuts Logo & Brand Tagline */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-white p-1 border-2 border-gold-champagne/60 shadow-lg group-hover:border-gold-champagne transition-all duration-300 flex-shrink-0">
                <Image
                  src="/images/logo/logo.jpeg"
                  alt="Noir & Nuts Luxury Handcrafted Confections Logo"
                  fill
                  className="object-contain p-1 rounded-full"
                  sizes="80px"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-wider text-ivory-warm group-hover:text-gold-champagne transition-colors">
                  NOIR & NUTS
                </h3>
                <p className="text-xs uppercase tracking-[0.25em] text-gold-champagne/90 font-medium">
                  Artisanal Chocolate Atelier
                </p>
              </div>
            </Link>

            <blockquote className="text-gold-champagne font-serif text-xl italic font-normal tracking-wide pt-1">
              &ldquo;A Little Chocolate, A Lot of Happiness!&rdquo;
            </blockquote>

            <p className="text-sm text-ivory-warm/70 leading-relaxed max-w-sm">
              Indulge in handcrafted gourmet chocolate boxes, roasted nut delights, and exquisite confectionery gifts
              made with passion in Siliguri, West Bengal.
            </p>
          </div>

          {/* CENTRE: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-champagne">
              Boutique Navigation
            </h4>
            <nav className="flex flex-col space-y-2.5">
              <Link href="/" className="text-sm text-ivory-warm/80 hover:text-gold-champagne transition-colors">
                Home
              </Link>
              <Link href="/our-story" className="text-sm text-ivory-warm/80 hover:text-gold-champagne transition-colors">
                Our Story
              </Link>
              <Link href="/shop" className="text-sm text-ivory-warm/80 hover:text-gold-champagne transition-colors">
                Shop / All Products
              </Link>
              <Link href="/contact" className="text-sm text-ivory-warm/80 hover:text-gold-champagne transition-colors">
                Contact & Location
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm text-ivory-warm/80 hover:text-gold-champagne transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* RIGHT: Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-champagne">
              Contact & Orders
            </h4>
            <div className="space-y-3.5 text-sm text-ivory-warm/80">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-gold-champagne transition-colors group"
              >
                <MapPin className="w-4 h-4 text-gold-champagne mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="leading-snug">{BRAND_ADDRESS}</span>
              </a>

              <a
                href={phoneUrl}
                className="flex items-center gap-3 hover:text-gold-champagne transition-colors group"
              >
                <Phone className="w-4 h-4 text-gold-champagne flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>{BRAND_PHONE}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-gold-champagne transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Order on WhatsApp (+91 9246250014)</span>
              </a>

              <a
                href={`mailto:${BRAND_EMAIL}`}
                className="flex items-center gap-3 hover:text-gold-champagne transition-colors group"
              >
                <Mail className="w-4 h-4 text-gold-champagne flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all">{BRAND_EMAIL}</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM: Copyright & Credits */}
        <div className="mt-14 pt-8 border-t border-chocolate-rich/80 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory-warm/60 gap-4">
          <p>© 2026 Noir & Nuts. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 text-gold-champagne/80 font-serif text-sm">
            <span>Made with love and a little chocolate</span>
            <Heart className="w-3.5 h-3.5 fill-gold-champagne text-gold-champagne inline-block" />
          </p>
        </div>
      </div>
    </footer>
  );
}
