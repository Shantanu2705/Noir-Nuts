import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { BRAND_EMAIL, BRAND_PHONE, BRAND_ADDRESS } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Privacy Policy | Noir & Nuts Siliguri",
  description:
    "Privacy Policy for Noir & Nuts. We respect your privacy — all orders are processed directly through WhatsApp and phone communication with zero backend tracking.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-ivory-warm pt-28 pb-20 sm:pt-36 sm:pb-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-accent-taupe hover:text-chocolate-espresso transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gold-champagne/40 text-gold-antique text-xs uppercase tracking-wider font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Transparency & Trust</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-chocolate-espresso">
            Privacy Policy
          </h1>

          <p className="text-xs text-accent-taupe uppercase tracking-wider">
            Last Updated: November 2026 • Noir & Nuts, Siliguri
          </p>

          <div className="w-16 h-0.5 bg-gold-champagne mt-4" />
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-accent-beige space-y-8 text-sm text-chocolate-rich/80 leading-relaxed shadow-sm">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-chocolate-espresso">
              1. Overview
            </h2>
            <p>
              Noir & Nuts (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates this website as an artisanal
              showcase for our handcrafted chocolates and nut confections based in Hakim Para, Siliguri – 734001, West
              Bengal, India.
            </p>
            <p>
              We believe in complete transparency. Our website does not maintain user accounts, does not process online
              payments, and does not operate backend databases that collect, store, or sell your personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-chocolate-espresso">
              2. How Orders Are Placed (WhatsApp & Direct Contact)
            </h2>
            <p>
              All customer inquiries and orders are received exclusively through official direct channels:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-chocolate-espresso font-medium">
              <li>WhatsApp Messenger: +91 9246250014</li>
              <li>Telephone Calls: +91 9246250014</li>
              <li>Official Email: {BRAND_EMAIL}</li>
            </ul>
            <p>
              When you click &ldquo;Order on WhatsApp&rdquo;, your browser or mobile device opens the official WhatsApp
              application with a pre-filled summary of your selected chocolate boxes. Any personal details you choose to
              share (such as your name, delivery address in Siliguri, and celebration date) are transmitted directly to
              us through WhatsApp and are used solely to fulfil your chocolate order.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-chocolate-espresso">
              3. Local Storage for Your Sweet Bag
            </h2>
            <p>
              To provide a smooth shopping bag experience, our website uses your web browser&apos;s standard local storage
              (localStorage). This allows the items and quantities in your bag to remain saved while you browse between
              pages. This information remains strictly stored on your own device and is never sent to any external server.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-chocolate-espresso">
              4. External Links
            </h2>
            <p>
              Our website provides direct links to external services such as WhatsApp (Meta) and Google Maps (for
              confectionery directions). When you navigate to those third-party services, their respective privacy
              policies apply.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-chocolate-espresso">
              5. Contact Us Regarding Your Privacy
            </h2>
            <p>
              If you have any questions regarding this policy or how we manage your orders, please reach out to us
              directly:
            </p>
            <div className="p-4 rounded-xl bg-ivory-warm border border-accent-beige text-xs space-y-1 text-chocolate-espresso">
              <p><strong>Noir & Nuts Atelier</strong></p>
              <p>Address: {BRAND_ADDRESS}</p>
              <p>Phone / WhatsApp: {BRAND_PHONE}</p>
              <p>Email: {BRAND_EMAIL}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
