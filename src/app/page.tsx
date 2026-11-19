import React from "react";
import Hero from "@/components/home/Hero";
import BrandPromise from "@/components/home/BrandPromise";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandStorySection from "@/components/home/BrandStorySection";
import GiftingSection from "@/components/home/GiftingSection";
import CustomerExperience from "@/components/home/CustomerExperience";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandPromise />
      <FeaturedProducts />
      <BrandStorySection />
      <GiftingSection />
      <CustomerExperience />
      <ContactSection />
    </>
  );
}
