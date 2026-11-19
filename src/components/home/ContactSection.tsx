import React from "react";
import { Phone, MessageCircle, Mail, MapPin, Navigation, ExternalLink } from "lucide-react";
import { BRAND_PHONE, BRAND_WHATSAPP_NUMBER, BRAND_EMAIL, BRAND_ADDRESS, GOOGLE_MAPS_URL } from "@/lib/whatsapp";

export default function ContactSection() {
  const phoneUrl = `tel:${BRAND_PHONE.replace(/\s+/g, "")}`;
  const whatsappUrl = `https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Noir & Nuts! I have a question about your handcrafted chocolates."
  )}`;
  const emailUrl = `mailto:${BRAND_EMAIL}`;

  return (
    <section className="py-24 bg-white border-t border-accent-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-taupe font-semibold">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-chocolate-espresso">
            We&apos;d Love to Hear From You.
          </h2>
          <p className="text-sm sm:text-base text-chocolate-rich/75 leading-relaxed">
            Have a question, want to explore our collection, or planning something special? Get in touch with us.
          </p>
          <div className="w-16 h-0.5 bg-gold-champagne mx-auto mt-4" />
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Address & Location */}
          <div className="p-8 rounded-2xl bg-ivory-warm/50 border border-accent-beige/80 hover:border-gold-champagne/40 transition-all flex flex-col justify-between text-center items-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-white border border-gold-champagne/30 flex items-center justify-center text-gold-antique mb-5 shadow-xs">
                <MapPin className="w-6 h-6 stroke-[1.7]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-chocolate-espresso mb-2">Our Confectionery Atelier</h3>
              <p className="text-sm text-chocolate-rich/80 max-w-xs leading-relaxed mb-6">
                {BRAND_ADDRESS}
              </p>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-chocolate-espresso text-chocolate-espresso hover:text-gold-champagne border border-accent-beige text-xs uppercase tracking-wider font-medium shadow-xs transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-gold-antique" />
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>

          {/* Card 2: Phone & Calling */}
          <div className="p-8 rounded-2xl bg-ivory-warm/50 border border-accent-beige/80 hover:border-gold-champagne/40 transition-all flex flex-col justify-between text-center items-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-white border border-gold-champagne/30 flex items-center justify-center text-gold-antique mb-5 shadow-xs">
                <Phone className="w-6 h-6 stroke-[1.7]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-chocolate-espresso mb-2">Speak With Us</h3>
              <p className="text-base font-semibold text-chocolate-espresso mb-6">
                {BRAND_PHONE}
              </p>
            </div>
            <a
              href={phoneUrl}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-chocolate-deep hover:bg-chocolate-espresso text-ivory-warm border border-gold-champagne/40 text-xs uppercase tracking-wider font-medium shadow-xs hover:border-gold-champagne transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-champagne" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Card 3: WhatsApp & Orders */}
          <div className="p-8 rounded-2xl bg-ivory-warm/50 border border-accent-beige/80 hover:border-gold-champagne/40 transition-all flex flex-col justify-between text-center items-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-white border border-gold-champagne/30 flex items-center justify-center text-[#25D366] mb-5 shadow-xs">
                <MessageCircle className="w-6 h-6 fill-[#25D366] stroke-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-chocolate-espresso mb-2">WhatsApp Orders</h3>
              <p className="text-sm text-chocolate-rich/80 max-w-xs leading-relaxed mb-6">
                Instant order placement, flavour customization, and availability inquiries.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs uppercase tracking-wider font-medium shadow-xs hover:shadow transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>
        </div>

        {/* Email support banner */}
        <div className="text-center pt-6 border-t border-accent-beige/60">
          <p className="text-xs uppercase tracking-wider text-accent-taupe font-medium mb-1">
            Email Correspondence
          </p>
          <a
            href={emailUrl}
            className="text-base sm:text-lg font-serif font-semibold text-chocolate-espresso hover:text-gold-antique transition-colors underline underline-offset-4"
          >
            {BRAND_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
