import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-ivory-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent-taupe font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-gold-antique" />
              <span>Handcrafted Confections</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-chocolate-espresso">
              Our Sweetest Favourites
            </h2>
            <p className="text-sm sm:text-base text-chocolate-rich/75 leading-relaxed">
              Explore our most cherished chocolate boxes and roasted nut delights, carefully prepared fresh in Siliguri.
            </p>
          </div>

          <div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-chocolate-espresso text-chocolate-espresso hover:text-gold-champagne border border-accent-beige hover:border-gold-champagne/40 text-xs uppercase tracking-[0.16em] font-medium shadow-xs transition-all duration-300 group"
            >
              <span>Discover All Chocolates</span>
              <ArrowRight className="w-4 h-4 text-gold-antique group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
