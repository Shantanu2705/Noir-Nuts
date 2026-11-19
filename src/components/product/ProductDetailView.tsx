"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  ShoppingBag,
  Plus,
  Minus,
  Sparkles,
  ShieldCheck,
  Package,
  Calendar,
  Check,
  ArrowLeft,
} from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { generateSingleProductOrderUrl } from "@/lib/whatsapp";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/shop/ProductCard";

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailView({ product, relatedProducts }: ProductDetailViewProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const directWhatsAppUrl = generateSingleProductOrderUrl(product, quantity);

  return (
    <div className="space-y-20">
      {/* Breadcrumb / Back Link */}
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-accent-taupe">
        <Link href="/shop" className="hover:text-chocolate-espresso flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Chocolates</span>
        </Link>
        <span>/</span>
        <span className="text-chocolate-espresso font-medium truncate">{product.name}</span>
      </div>

      {/* Main Product Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative rounded-3xl overflow-hidden bg-ivory-cream border border-accent-beige shadow-luxury aspect-square">
            <Image
              src={product.images[selectedImage] || product.images[0]}
              alt={product.name}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 550px"
            />
            {product.isBestseller && (
              <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-gold-champagne text-chocolate-espresso text-xs font-bold uppercase tracking-wider shadow-sm">
                Bestseller
              </span>
            )}
          </div>

          {/* Multiple Image Thumbnails if present */}
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? "border-gold-champagne shadow-sm scale-105"
                      : "border-accent-beige opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`${product.name} preview ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Information & Purchase Flow */}
        <div className="lg:col-span-6 space-y-7">
          {/* Header & Category */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-[0.25em] text-accent-taupe font-semibold">
                {product.category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-champagne" />
              <span className="text-xs text-green-700 font-medium tracking-wide">
                Freshly Handcrafted to Order
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-chocolate-espresso leading-tight">
              {product.name}
            </h1>

            {product.tagline && (
              <p className="text-sm font-medium text-gold-antique tracking-wide font-serif italic">
                {product.tagline}
              </p>
            )}
          </div>

          {/* Price Block */}
          <div className="p-4 rounded-2xl bg-white border border-accent-beige flex items-baseline justify-between shadow-xs">
            <div>
              {product.price ? (
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-chocolate-espresso">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-accent-taupe line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                  <span className="text-xs text-chocolate-rich/70">Per Box</span>
                </div>
              ) : (
                <span className="text-sm uppercase tracking-wider font-medium text-chocolate-espresso">
                  Price Available on WhatsApp Inquiry
                </span>
              )}
            </div>

            {product.weight && (
              <span className="text-xs text-accent-taupe uppercase tracking-wider font-medium">
                Approx. {product.weight}
              </span>
            )}
          </div>

          {/* Detailed Narrative */}
          <p className="text-sm sm:text-base text-chocolate-rich/80 leading-relaxed">
            {product.detailedDescription || product.description}
          </p>

          {/* Box Contents Breakdown */}
          {product.boxContents && product.boxContents.length > 0 && (
            <div className="p-6 rounded-2xl bg-white border border-accent-beige/90 space-y-3.5 shadow-xs">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-chocolate-espresso">
                <Package className="w-4 h-4 text-gold-antique" />
                <span>Box Assortment Breakdown</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-chocolate-rich/85">
                {product.boxContents.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-champagne mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-chocolate-espresso">{item.name}</span>
                      {item.count && <span className="text-accent-taupe"> ({item.count})</span>}
                      {item.notes && <p className="text-[11px] text-chocolate-rich/70">{item.notes}</p>}
                    </div>
                  </li>
                ))}
              </ul>
              {product.customisationNotice && (
                <div className="pt-3 border-t border-accent-beige/60">
                  <p className="text-xs text-gold-antique font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{product.customisationNotice}</span>
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Quantity Selector & Order Buttons */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-chocolate-rich font-medium">
                Quantity:
              </span>
              <div className="flex items-center border border-accent-beige rounded-full bg-white shadow-xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                  className="p-2.5 text-chocolate-rich hover:text-chocolate-espresso transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-sm font-semibold text-chocolate-espresso select-none">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                  className="p-2.5 text-chocolate-rich hover:text-chocolate-espresso transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-chocolate-deep hover:bg-chocolate-espresso text-ivory-warm border border-gold-champagne/40 hover:border-gold-champagne text-xs uppercase tracking-[0.16em] font-medium shadow-luxury transition-all duration-300"
              >
                {addedNotice ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Added to Sweet Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-gold-champagne" />
                    <span>Add to Sweet Bag</span>
                  </>
                )}
              </button>

              {/* Direct WhatsApp Order */}
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs uppercase tracking-[0.16em] font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-center text-chocolate-rich/65 pt-1">
              WhatsApp connects directly to our confectionery in Hakim Para, Siliguri.
            </p>
          </div>

          {/* Specifications Accordion / Meta */}
          <div className="pt-6 border-t border-accent-beige/70 space-y-3 text-xs text-chocolate-rich/80">
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="flex items-start gap-2">
                <span className="font-semibold text-chocolate-espresso min-w-[100px]">Ingredients:</span>
                <span>{product.ingredients.join(", ")}</span>
              </div>
            )}
            {product.shelfLife && (
              <div className="flex items-start gap-2">
                <span className="font-semibold text-chocolate-espresso min-w-[100px]">Shelf Life:</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-accent-taupe" />
                  {product.shelfLife}
                </span>
              </div>
            )}
            {product.storageInstructions && (
              <div className="flex items-start gap-2">
                <span className="font-semibold text-chocolate-espresso min-w-[100px]">Storage:</span>
                <span>{product.storageInstructions}</span>
              </div>
            )}
            <div className="flex items-start gap-2">
              <span className="font-semibold text-chocolate-espresso min-w-[100px]">Origin:</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-antique" />
                Handmade in Siliguri – 734001, West Bengal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Recommendation Grid */}
      {relatedProducts.length > 0 && (
        <div className="pt-16 border-t border-accent-beige/80 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <p className="text-xs uppercase tracking-[0.22em] text-accent-taupe font-semibold">
              More Sweet Delights
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-chocolate-espresso">
              You May Also Love
            </h2>
            <div className="w-12 h-0.5 bg-gold-champagne mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.slice(0, 3).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
