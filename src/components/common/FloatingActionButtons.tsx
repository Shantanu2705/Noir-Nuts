"use client";

import React, { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BRAND_PHONE, BRAND_WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function FloatingActionButtons() {
  const [hoveredButton, setHoveredButton] = useState<"phone" | "whatsapp" | null>(null);

  const phoneUrl = `tel:${BRAND_PHONE.replace(/\s+/g, "")}`;
  const whatsappUrl = `https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Noir & Nuts! I would like to inquire about your handcrafted chocolates and gifts."
  )}`;

  return (
    <aside
      aria-label="Direct contact options"
      className="fixed bottom-6 right-5 sm:right-7 z-50 flex flex-col items-center gap-3.5 print:hidden pointer-events-auto"
    >
      {/* Call Now Button */}
      <div className="relative flex items-center justify-end">
        {/* Tooltip on hover */}
        <span
          className={`hidden md:block absolute right-16 px-3 py-1.5 rounded-md text-xs font-medium tracking-wide shadow-md whitespace-nowrap transition-all duration-300 pointer-events-none ${
            hoveredButton === "phone"
              ? "opacity-100 translate-x-0 bg-chocolate-espresso text-ivory-warm"
              : "opacity-0 translate-x-2"
          }`}
        >
          Call Us: +91 9246250014
        </span>

        <a
          href={phoneUrl}
          aria-label="Call Noir & Nuts at +91 9246250014"
          onMouseEnter={() => setHoveredButton("phone")}
          onMouseLeave={() => setHoveredButton(null)}
          className="relative group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-chocolate-espresso text-gold-champagne border border-gold-champagne/40 shadow-luxury hover:shadow-gold-glow hover:border-gold-champagne hover:scale-105 transition-all duration-300 pulse-ring-gold focus:outline-none focus:ring-2 focus:ring-gold-champagne"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-12 duration-300" />
        </a>
      </div>

      {/* WhatsApp Button */}
      <div className="relative flex items-center justify-end">
        {/* Tooltip on hover */}
        <span
          className={`hidden md:block absolute right-16 px-3 py-1.5 rounded-md text-xs font-medium tracking-wide shadow-md whitespace-nowrap transition-all duration-300 pointer-events-none ${
            hoveredButton === "whatsapp"
              ? "opacity-100 translate-x-0 bg-chocolate-espresso text-ivory-warm"
              : "opacity-0 translate-x-2"
          }`}
        >
          Order & Inquire on WhatsApp
        </span>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Noir & Nuts on WhatsApp"
          onMouseEnter={() => setHoveredButton("whatsapp")}
          onMouseLeave={() => setHoveredButton(null)}
          className="relative group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-luxury hover:shadow-lg hover:scale-105 transition-all duration-300 pulse-ring-whatsapp focus:outline-none focus:ring-2 focus:ring-[#25D366]"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white stroke-[#25D366] transition-transform group-hover:scale-110 duration-300" />
        </a>
      </div>
    </aside>
  );
}
