import React from "react";
import { Gem, Sparkles, Gift, HeartHandshake } from "lucide-react";

const PROMISES = [
  {
    icon: Gem,
    title: "Premium Quality",
    description: "Thoughtfully selected ingredients and indulgent chocolate experiences.",
  },
  {
    icon: Sparkles,
    title: "Beautifully Crafted",
    description: "Delicious creations presented with care and attention to detail.",
  },
  {
    icon: Gift,
    title: "Perfect for Gifting",
    description: "Make birthdays, celebrations, and special occasions sweeter.",
  },
  {
    icon: HeartHandshake,
    title: "Made to Delight",
    description: "Every treat brings a little more happiness to your moments.",
  },
];

export default function BrandPromise() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-accent-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-taupe font-semibold mb-2">
            The Noir & Nuts Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-chocolate-espresso">
            More Than Chocolate. A Little Happiness.
          </h2>
          <div className="w-16 h-0.5 bg-gold-champagne mx-auto mt-4" />
        </div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {PROMISES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-ivory-warm/40 border border-accent-beige/70 hover:border-gold-champagne/50 hover:bg-white hover:shadow-luxury transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-gold-champagne/30 flex items-center justify-center text-gold-antique mb-5 shadow-xs group-hover:scale-110 group-hover:bg-chocolate-deep group-hover:text-gold-champagne transition-all duration-300">
                  <Icon className="w-6 h-6 stroke-[1.6]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-chocolate-espresso mb-2 group-hover:text-gold-antique transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-chocolate-rich/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
