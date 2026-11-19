"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { Product, ProductCategory } from "@/types/product";
import { PRODUCT_CATEGORIES } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  initialProducts: Product[];
}

export default function ProductGrid({ initialProducts }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "name">("default");

  // Only display categories that actually contain products (per requirement)
  const availableCategories = useMemo(() => {
    return PRODUCT_CATEGORIES.filter((cat) => {
      if (cat === "All Products") return true;
      return initialProducts.some(
        (p) => p.category === cat || p.secondaryCategories?.includes(cat)
      );
    });
  }, [initialProducts]);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((p) => {
        // Category filter
        const matchesCategory =
          selectedCategory === "All Products" ||
          p.category === selectedCategory ||
          p.secondaryCategories?.includes(selectedCategory);

        // Search query filter (matches name, description, ingredients, or box contents)
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.boxContents?.some((item) => item.name.toLowerCase().includes(q)) ||
          p.ingredients?.some((item) => item.toLowerCase().includes(q));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") {
          return (a.price || 0) - (b.price || 0);
        }
        if (sortBy === "price-desc") {
          return (b.price || 0) - (a.price || 0);
        }
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        }
        return a.displayOrder - b.displayOrder;
      });
  }, [initialProducts, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="space-y-10">
      {/* Controls Bar: Search & Sort */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-accent-beige/80 shadow-xs">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-taupe" />
          <input
            type="text"
            placeholder="Search chocolates, hazelnut, kunafa, dates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-full bg-ivory-warm/70 border border-accent-beige text-xs sm:text-sm text-chocolate-espresso placeholder-chocolate-rich/50 focus:outline-none focus:border-gold-champagne focus:bg-white transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-accent-taupe hover:text-chocolate-espresso"
            >
              Clear
            </button>
          )}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          <SlidersHorizontal className="w-4 h-4 text-accent-taupe flex-shrink-0" />
          <label htmlFor="sort-products" className="text-xs uppercase tracking-wider text-accent-taupe font-medium">
            Sort:
          </label>
          <select
            id="sort-products"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="py-2 px-3 rounded-full bg-ivory-warm/70 border border-accent-beige text-xs font-medium text-chocolate-espresso focus:outline-none focus:border-gold-champagne cursor-pointer"
          >
            <option value="default">Featured Selection</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {availableCategories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider whitespace-nowrap font-medium transition-all duration-200 ${
                isSelected
                  ? "bg-chocolate-espresso text-gold-champagne border border-gold-champagne shadow-sm"
                  : "bg-white text-chocolate-rich/80 border border-accent-beige hover:border-gold-champagne/40 hover:text-chocolate-espresso"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Results Count Summary */}
      <div className="flex items-center justify-between text-xs text-accent-taupe tracking-wider uppercase font-medium">
        <span>
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? "creation" : "creations"}
        </span>
        {selectedCategory !== "All Products" && <span>Filtered by: {selectedCategory}</span>}
      </div>

      {/* Products Grid or Empty State */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-20 px-6 rounded-3xl bg-white border border-accent-beige text-center max-w-xl mx-auto shadow-sm">
          <div className="w-16 h-16 rounded-full bg-ivory-warm border border-gold-champagne/30 flex items-center justify-center mx-auto mb-4 text-gold-antique">
            <Sparkles className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-chocolate-espresso mb-2">
            No Confections Found
          </h3>
          <p className="text-sm text-chocolate-rich/70 max-w-sm mx-auto mb-6 leading-relaxed">
            We couldn&apos;t find any chocolates matching &ldquo;{searchQuery || selectedCategory}&rdquo;. Try clearing your search or browsing our all products collection.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Products");
            }}
            className="px-6 py-2.5 rounded-full bg-chocolate-espresso text-ivory-warm hover:text-gold-champagne text-xs uppercase tracking-wider font-medium transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
