"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BRAND_WHATSAPP_NUMBER } from "@/lib/whatsapp";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/our-story" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const quickWhatsAppUrl = `https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Noir & Nuts! I would like to place an order from your chocolate collection."
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-ivory-warm/95 backdrop-blur-md shadow-luxury py-2.5 border-b border-accent-beige/80"
          : "bg-ivory-warm/80 backdrop-blur-sm py-4 border-b border-accent-beige/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LEFT: Official Noir & Nuts Logo */}
          <Link
            href="/"
            aria-label="Noir & Nuts - Back to Home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-gold-champagne/40 bg-white p-0.5 shadow-sm group-hover:border-gold-champagne group-hover:shadow-gold-glow transition-all duration-300 flex-shrink-0">
              <Image
                src="/images/logo/logo.jpeg"
                alt="Noir & Nuts Official Brand Logo"
                fill
                priority
                className="object-contain p-0.5 rounded-full"
                sizes="(max-width: 640px) 48px, 56px"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-chocolate-espresso group-hover:text-gold-antique transition-colors leading-none">
                NOIR & NUTS
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-accent-taupe mt-0.5 font-medium">
                Siliguri Confectionery
              </span>
            </div>
          </Link>

          {/* CENTER: Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs uppercase tracking-[0.18em] font-medium transition-colors py-1 ${
                    isActive
                      ? "text-gold-antique font-semibold"
                      : "text-chocolate-rich/85 hover:text-gold-antique"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-champagne rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* WhatsApp Order Button */}
            <a
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chocolate-deep hover:bg-chocolate-espresso text-ivory-warm border border-gold-champagne/40 text-xs uppercase tracking-wider font-medium hover:border-gold-champagne transition-all duration-300 shadow-sm hover:shadow"
            >
              <MessageCircle className="w-3.5 h-3.5 text-gold-champagne fill-gold-champagne/20" />
              <span>WhatsApp Order</span>
            </a>

            {/* Shopping Bag Icon with Count */}
            <button
              onClick={openCart}
              aria-label={`Open shopping cart with ${totalItems} items`}
              className="relative p-2.5 rounded-full bg-white text-chocolate-espresso hover:text-gold-antique border border-accent-beige hover:border-gold-champagne/50 transition-all duration-200 shadow-sm focus:outline-none"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.6]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-gold-champagne text-chocolate-espresso text-[11px] font-bold shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="md:hidden p-2 text-chocolate-espresso hover:text-gold-antique focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory-warm border-b border-accent-beige px-6 pt-3 pb-6 space-y-4 shadow-luxury animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 pt-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm uppercase tracking-widest py-2 border-b border-accent-beige/50 font-serif ${
                    isActive ? "text-gold-antique font-semibold" : "text-chocolate-espresso"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2">
            <a
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-medium shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
