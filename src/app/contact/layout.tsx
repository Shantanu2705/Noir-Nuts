import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Location | Noir & Nuts Siliguri",
  description:
    "Get in touch with Noir & Nuts in Hakim Para, Siliguri – 734001, West Bengal. Direct phone calling, WhatsApp orders, and Google Maps directions.",
  alternates: {
    canonical: "https://noirandnuts.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Noir & Nuts Atelier - Siliguri",
    description: "Connect with our confectionery team in Hakim Para, Siliguri via WhatsApp or telephone.",
    url: "https://noirandnuts.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
