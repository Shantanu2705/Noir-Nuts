import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import ProductDetailView from "@/components/product/ProductDetailView";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Noir & Nuts",
    };
  }

  const priceText = product.price ? `₹${product.price}` : "Available on WhatsApp Inquiry";

  return {
    title: `${product.name} | Handcrafted Chocolates`,
    description: `${product.description} Available in Siliguri for ${priceText}. Handcrafted by Noir & Nuts.`,
    openGraph: {
      title: `${product.name} - Noir & Nuts Siliguri`,
      description: product.description,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related products from same category or other featured items
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-ivory-warm pt-28 pb-20 sm:pt-36 sm:pb-28 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductDetailView product={product} relatedProducts={relatedProducts} />
      </div>
    </div>
  );
}
