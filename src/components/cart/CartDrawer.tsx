"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { generateCartOrderUrl } from "@/lib/whatsapp";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, totalItems, subtotal } = useCart();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeCart]);

  // Prevent body scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const whatsappOrderUrl = generateCartOrderUrl(items);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-chocolate-espresso/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-ivory-warm shadow-2xl flex flex-col border-l border-gold-champagne/20">
          {/* Header */}
          <div className="p-6 bg-white border-b border-accent-beige/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-ivory-warm border border-gold-champagne/30 flex items-center justify-center text-gold-antique">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xl font-serif font-bold text-chocolate-espresso">Your Sweet Bag</h2>
                <p className="text-xs text-chocolate-rich/70 tracking-wide">
                  {totalItems === 0
                    ? "No treats selected yet"
                    : `${totalItems} ${totalItems === 1 ? "treat" : "treats"} selected`}
                </p>
              </div>
            </div>
            <button
              onClick={closeCart}
              aria-label="Close sweet bag"
              className="p-2 text-chocolate-rich/60 hover:text-chocolate-espresso hover:bg-ivory-warm rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="w-20 h-20 rounded-full bg-accent-beige/40 border border-gold-champagne/30 flex items-center justify-center mb-5 text-gold-antique">
                  <ShoppingBag className="w-9 h-9 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-serif text-chocolate-espresso mb-2">Your Bag is Empty</h3>
                <p className="text-sm text-chocolate-rich/75 max-w-xs mb-8 leading-relaxed">
                  Discover our freshly handcrafted chocolate boxes, roasted nut delights, and gifting treats.
                </p>
                <button
                  onClick={closeCart}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-chocolate-deep text-ivory-warm hover:bg-chocolate-espresso hover:text-gold-champagne text-xs font-medium tracking-wider uppercase transition-all duration-300 shadow-sm"
                >
                  <Link href="/shop" onClick={closeCart} className="flex items-center gap-2">
                    Explore Collection <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-accent-beige/70 shadow-sm hover:border-gold-champagne/40 transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-ivory-cream flex-shrink-0 border border-accent-beige">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/product/${item.product.slug}`}
                          onClick={closeCart}
                          className="text-sm font-serif font-semibold text-chocolate-espresso hover:text-gold-antique truncate transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          aria-label={`Remove ${item.product.name}`}
                          className="text-chocolate-rich/40 hover:text-red-700 p-1 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[11px] text-accent-taupe uppercase tracking-wider mt-0.5">
                        {item.product.category}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-accent-beige/40">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-accent-beige rounded-full bg-ivory-warm/60">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="p-1.5 text-chocolate-rich hover:text-chocolate-espresso transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-medium text-chocolate-espresso select-none">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="p-1.5 text-chocolate-rich hover:text-chocolate-espresso transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line Price */}
                      <span className="text-sm font-semibold text-chocolate-espresso">
                        {item.product.price ? formatPrice(item.product.price * item.quantity) : "Inquire"}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with WhatsApp Order */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-accent-beige/70 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-chocolate-rich/70">
                  <span>Selection Subtotal</span>
                  <span className="font-medium text-chocolate-espresso text-sm">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-chocolate-rich/60">
                  <span>Delivery & Order Confirmation</span>
                  <span className="text-gold-antique font-medium">Via WhatsApp</span>
                </div>
              </div>

              {/* Order on WhatsApp button */}
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span>Order on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-center text-chocolate-rich/60 leading-tight">
                Direct order with Noir & Nuts atelier in Siliguri. No upfront website payment required.
              </p>

              <div className="text-center">
                <button
                  onClick={closeCart}
                  className="text-xs text-chocolate-rich/75 hover:text-gold-antique underline underline-offset-4 transition-colors"
                >
                  Continue Browsing Chocolates
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
