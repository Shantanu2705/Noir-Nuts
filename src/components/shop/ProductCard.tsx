"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ShoppingBag, Eye } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { generateSingleProductOrderUrl } from "@/lib/whatsapp";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const initialQty = product.minOrderQuantity || 1;
  const whatsappOrderUrl = generateSingleProductOrderUrl(product, initialQty);

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-accent-beige/90 hover:border-gold-champagne/60 shadow-xs hover:shadow-luxury transition-all duration-300 flex flex-col h-full">
      {/* Product Image Frame: Clean pure white studio container, 4:3 ratio matching actual photo proportions */}
      <div className="relative aspect-[4/3] bg-white overflow-hidden p-3 flex items-center justify-center border-b border-accent-beige/40">
        {product.images && product.images[0] ? (
          <div className="relative w-full h-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain object-center drop-shadow-sm group-hover:scale-105 group-hover:drop-shadow-md transition-all duration-500 ease-out contrast-[1.03]"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-accent-beige/20 text-accent-taupe font-serif">
            <span>Noir & Nuts Confection</span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
          {product.isBestseller && (
            <span className="px-2.5 py-1 rounded-full bg-gold-champagne text-chocolate-espresso text-[10px] font-bold uppercase tracking-wider shadow-sm">
              Bestseller
            </span>
          )}
          {product.category && (
            <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-chocolate-espresso text-[10px] font-medium uppercase tracking-wider border border-accent-beige shadow-xs">
              {product.category}
            </span>
          )}
        </div>

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-chocolate-espresso/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Link
            href={`/product/${product.slug}`}
            className="p-3 rounded-full bg-white text-chocolate-espresso hover:text-gold-antique hover:scale-110 shadow-md transition-all duration-200"
            aria-label={`View details of ${product.name}`}
          >
            <Eye className="w-4 h-4" />
          </Link>
          <button
            onClick={() => addToCart(product, initialQty)}
            aria-label={`Add ${product.name} to sweet bag`}
            className="p-3 rounded-full bg-gold-champagne text-chocolate-espresso hover:bg-gold-antique hover:scale-110 shadow-md transition-all duration-200"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
        <div className="space-y-2">
          <Link href={`/product/${product.slug}`} className="block">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-chocolate-espresso group-hover:text-gold-antique transition-colors leading-snug line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs sm:text-sm text-chocolate-rich/70 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-4 mt-4 border-t border-accent-beige/60 space-y-3.5">
          <div className="flex items-baseline justify-between">
            <div>
              {product.price ? (
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-chocolate-espresso">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-xs text-accent-taupe line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              ) : (
                <span className="text-xs uppercase tracking-wider text-accent-taupe font-medium">
                  Price on WhatsApp Request
                </span>
              )}
            </div>

            {product.weight && (
              <span className="text-[11px] text-accent-taupe uppercase tracking-wider font-medium">
                {product.weight}
              </span>
            )}
          </div>

          {product.minOrderQuantity && (
            <div className="text-[11px] font-semibold text-chocolate-espresso bg-accent-beige/60 px-2.5 py-1 rounded-md text-center">
              Min. Order: {product.minOrderQuantity} boxes
            </div>
          )}

          {/* Action Buttons: View Details & WhatsApp Order */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              href={`/product/${product.slug}`}
              className="w-full inline-flex items-center justify-center py-2.5 px-3 rounded-full bg-ivory-warm hover:bg-accent-beige text-chocolate-espresso text-xs font-medium tracking-wide border border-accent-beige transition-colors text-center"
            >
              View Details
            </Link>

            <a
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-medium tracking-wide shadow-xs hover:shadow transition-colors text-center"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Order</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
