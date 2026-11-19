import React from "react";
import { Compass, MessageSquareShare, Sparkles } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Explore",
    subtitle: "Discover the collection and choose your favourite treats.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Connect",
    subtitle: "Send your selected products directly to Noir & Nuts on WhatsApp.",
    icon: MessageSquareShare,
  },
  {
    number: "03",
    title: "Enjoy",
    subtitle: "Confirm the details with the team and enjoy your chocolate experience.",
    icon: Sparkles,
  },
];

export default function CustomerExperience() {
  return (
    <section className="py-20 sm:py-24 bg-ivory-warm border-b border-accent-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-taupe font-semibold">
            Simple & Transparent
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-chocolate-espresso">
            The Sweetest Way to Order.
          </h2>
          <div className="w-16 h-0.5 bg-gold-champagne mx-auto mt-4" />
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white p-8 rounded-2xl border border-accent-beige/80 hover:border-gold-champagne/50 shadow-xs hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-champagne/80 group-hover:text-gold-antique transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-ivory-warm border border-accent-beige flex items-center justify-center text-chocolate-deep group-hover:bg-chocolate-espresso group-hover:text-gold-champagne transition-all duration-300">
                      <Icon className="w-5 h-5 stroke-[1.7]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-chocolate-espresso mb-3 group-hover:text-gold-antique transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-chocolate-rich/75 leading-relaxed">{step.subtitle}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-accent-beige/40 flex items-center gap-2 text-xs text-accent-taupe font-medium uppercase tracking-wider">
                  <span>Step {step.number}</span>
                  <span className="w-8 h-[1px] bg-gold-champagne" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
