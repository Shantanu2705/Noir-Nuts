import React from "react";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-ivory-warm min-h-[75vh] flex items-center justify-center px-4 py-24 sm:py-32">
      <div className="text-center max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-full bg-white border border-gold-champagne/40 flex items-center justify-center mx-auto text-gold-antique shadow-luxury">
          <ShoppingBag className="w-9 h-9 stroke-[1.5]" />
        </div>

        <p className="text-xs uppercase tracking-[0.25em] text-accent-taupe font-semibold">
          Error 404 • Page Not Found
        </p>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-chocolate-espresso">
          Looking for a Sweet Delight?
        </h1>

        <p className="text-sm text-chocolate-rich/75 leading-relaxed">
          The confection or page you are looking for may have moved or is currently not in our catalog.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-chocolate-espresso hover:bg-chocolate-deep text-ivory-warm text-xs uppercase tracking-[0.16em] font-medium transition-all shadow-xs"
          >
            Return Home
          </Link>

          <Link
            href="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-ivory-warm text-chocolate-espresso border border-accent-beige text-xs uppercase tracking-[0.16em] font-medium transition-all shadow-xs"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-antique" />
          </Link>
        </div>
      </div>
    </div>
  );
}
