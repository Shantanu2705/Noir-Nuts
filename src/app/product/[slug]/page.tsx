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
  const baseUrl = "https://noirandnuts.vercel.app";

  return {
    title: `${product.name} | Handcrafted Chocolates`,
    description: `${product.description} Available in Siliguri for ${priceText}. Handcrafted by Noir & Nuts.`,
    alternates: {
      canonical: `${baseUrl}/product/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} - Noir & Nuts Siliguri`,
      description: product.description,
      url: `${baseUrl}/product/${product.slug}`,
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 900,
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

  const baseUrl = "https://noirandnuts.vercel.app";

  // Product JSON-LD Schema
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images.map((img) => `${baseUrl}${img}`),
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Noir & Nuts",
    },
    offers: {
      "@type": "Offer",
      url: `${baseUrl}/product/${product.slug}`,
      priceCurrency: "INR",
      price: product.price || 0,
      availability: product.isAvailable ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Noir & Nuts",
      },
    },
  };

  // Breadcrumbs JSON-LD Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Shop",
        item: `${baseUrl}/shop`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${baseUrl}/product/${product.slug}`,
      },
    ],
  };

  // Related products from same category or other featured items
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-ivory-warm pt-28 pb-20 sm:pt-36 sm:pb-28 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductDetailView product={product} relatedProducts={relatedProducts} />
      </div>
    </div>
  );
}
