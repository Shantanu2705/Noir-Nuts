"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Navigation,
  ExternalLink,
  Send,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import {
  BRAND_PHONE,
  BRAND_WHATSAPP_NUMBER,
  BRAND_EMAIL,
  BRAND_ADDRESS,
  GOOGLE_MAPS_URL,
  buildWhatsAppUrl,
} from "@/lib/whatsapp";

const FAQS = [
  {
    question: "How do I place an order with Noir & Nuts?",
    answer:
      "All orders are placed directly through WhatsApp! You can add products to your sweet bag on our website and click 'Order on WhatsApp', or contact us directly at +91 9246250014 with your selected chocolates.",
  },
  {
    question: "Do you offer delivery in Siliguri?",
    answer:
      "Yes, we provide fresh local delivery across Siliguri and nearby regions. When messaging us on WhatsApp, share your location and required date to confirm delivery arrangements.",
  },
  {
    question: "Can I customize the chocolate flavours in my box?",
    answer:
      "Yes! Flavour customisation is available for our Choco Fusion Boxes and special collection orders. Simply mention your preferred favourites when chatting with our atelier team on WhatsApp.",
  },
  {
    question: "What is the shelf life of handcrafted chocolates?",
    answer:
      "Our confections are made fresh without artificial preservatives. Most chocolate boxes stay fresh for 30 to 45 days when stored in a cool, dry place between 15°C and 20°C.",
  },
];

function sanitizeInput(str: string, maxLength = 300): string {
  return str
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLength);
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [message, setMessage] = useState("");

  const phoneUrl = `tel:${BRAND_PHONE.replace(/\s+/g, "")}`;
  const directWhatsAppUrl = `https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Noir & Nuts! I would like to get in touch regarding your chocolates."
  )}`;

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = sanitizeInput(name, 60) || "a chocolate lover";
    const cleanOccasion = sanitizeInput(occasion, 100) || "General Chocolate Inquiry";
    const cleanMessage =
      sanitizeInput(message, 500) ||
      "I would love to learn more about your handcrafted chocolates and available assortments in Siliguri.";

    const formatted = `Hello Noir & Nuts!
My name is ${cleanName}.
Occasion/Inquiry: ${cleanOccasion}

Note:
${cleanMessage}

Thank you!`;
    const url = buildWhatsAppUrl(formatted);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-ivory-warm pt-28 pb-20 sm:pt-36 sm:pb-28 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-gold-champagne/40 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-antique" />
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-chocolate-espresso">
              Connect With The Atelier
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-chocolate-espresso">
            We&apos;d Love to Hear From You.
          </h1>

          <p className="text-base text-chocolate-rich/75 leading-relaxed">
            Have a question, want to explore our collection, or planning something special? Get in touch with us.
          </p>

          <div className="w-16 h-0.5 bg-gold-champagne mx-auto mt-4" />
        </div>

        {/* 3 Core Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Atelier Address */}
          <div className="p-8 rounded-3xl bg-white border border-accent-beige shadow-xs hover:shadow-luxury transition-all flex flex-col justify-between items-center text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-ivory-warm border border-gold-champagne/40 flex items-center justify-center text-gold-antique mb-5">
                <MapPin className="w-6 h-6 stroke-[1.6]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-chocolate-espresso mb-2">Our Confectionery</h3>
              <p className="text-xs uppercase tracking-wider text-accent-taupe font-semibold mb-2">
                Hakim Para, Siliguri
              </p>
              <p className="text-sm text-chocolate-rich/80 max-w-xs leading-relaxed mb-6">
                {BRAND_ADDRESS}
              </p>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ivory-warm hover:bg-chocolate-espresso hover:text-gold-champagne text-chocolate-espresso border border-accent-beige text-xs uppercase tracking-wider font-medium transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-gold-antique" />
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="p-8 rounded-3xl bg-white border border-accent-beige shadow-xs hover:shadow-luxury transition-all flex flex-col justify-between items-center text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-ivory-warm border border-gold-champagne/40 flex items-center justify-center text-gold-antique mb-5">
                <Phone className="w-6 h-6 stroke-[1.6]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-chocolate-espresso mb-2">Call Directly</h3>
              <p className="text-xs uppercase tracking-wider text-accent-taupe font-semibold mb-2">
                Telephone Enquiries
              </p>
              <p className="text-base font-semibold text-chocolate-espresso mb-6">
                {BRAND_PHONE}
              </p>
            </div>
            <a
              href={phoneUrl}
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-chocolate-deep hover:bg-chocolate-espresso text-ivory-warm border border-gold-champagne/40 text-xs uppercase tracking-wider font-medium shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-champagne" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="p-8 rounded-3xl bg-white border border-accent-beige shadow-xs hover:shadow-luxury transition-all flex flex-col justify-between items-center text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#25D366]/10 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] mb-5">
                <MessageCircle className="w-6 h-6 fill-[#25D366] stroke-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-chocolate-espresso mb-2">WhatsApp Orders</h3>
              <p className="text-xs uppercase tracking-wider text-[#25D366] font-semibold mb-2">
                Instant Chat & Orders
              </p>
              <p className="text-sm text-chocolate-rich/80 max-w-xs leading-relaxed mb-6">
                Receive instant product photos, box customisation advice, and confirm delivery in Siliguri.
              </p>
            </div>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs uppercase tracking-wider font-medium shadow-xs hover:shadow transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>
        </div>

        {/* Email Highlight Banner */}
        <div className="p-6 rounded-2xl bg-white border border-accent-beige text-center max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-gold-antique mb-1">
            <Mail className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest font-semibold">Official Email</span>
          </div>
          <a
            href={`mailto:${BRAND_EMAIL}`}
            className="text-base sm:text-lg font-serif font-semibold text-chocolate-espresso hover:text-gold-antique transition-colors underline underline-offset-4"
          >
            {BRAND_EMAIL}
          </a>
        </div>

        {/* Interactive Quick WhatsApp Inquiry Composer */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-white border border-accent-beige/90 p-8 sm:p-12 shadow-luxury space-y-6">
          <div className="text-center space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-accent-taupe font-semibold">
              Quick Inquiry
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-chocolate-espresso">
              Send a Direct Note to Noir & Nuts
            </h2>
            <p className="text-xs sm:text-sm text-chocolate-rich/70">
              Type your message below and we will automatically format your enquiry for WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmitEnquiry} className="space-y-4">
            <div>
              <label htmlFor="user-name" className="block text-xs uppercase tracking-wider text-chocolate-rich font-medium mb-1.5">
                Your Name
              </label>
              <input
                id="user-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-ivory-warm/70 border border-accent-beige text-sm text-chocolate-espresso focus:outline-none focus:border-gold-champagne focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label htmlFor="user-occasion" className="block text-xs uppercase tracking-wider text-chocolate-rich font-medium mb-1.5">
                Occasion / Celebration (Optional)
              </label>
              <input
                id="user-occasion"
                type="text"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                placeholder="e.g. Birthday gift, Diwali hamper, Anniversaries, Personal treat"
                className="w-full px-4 py-3 rounded-xl bg-ivory-warm/70 border border-accent-beige text-sm text-chocolate-espresso focus:outline-none focus:border-gold-champagne focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label htmlFor="user-message" className="block text-xs uppercase tracking-wider text-chocolate-rich font-medium mb-1.5">
                Message / Requirement
              </label>
              <textarea
                id="user-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about the chocolates you'd like, quantity, or delivery requirements in Siliguri..."
                className="w-full px-4 py-3 rounded-xl bg-ivory-warm/70 border border-accent-beige text-sm text-chocolate-espresso focus:outline-none focus:border-gold-champagne focus:bg-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium text-xs uppercase tracking-[0.16em] shadow-md transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              <span>Send Enquiry via WhatsApp</span>
            </button>
          </form>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto space-y-8 pt-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-accent-taupe font-semibold">
              <HelpCircle className="w-4 h-4 text-gold-antique" />
              <span>Help & Details</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-chocolate-espresso">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-0.5 bg-gold-champagne mx-auto mt-2" />
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-accent-beige space-y-2">
                <h3 className="font-serif text-lg font-bold text-chocolate-espresso">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-chocolate-rich/75 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
