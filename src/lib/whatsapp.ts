import { CartItem, Product } from "@/types/product";

export const BRAND_PHONE = "+91 9246250014";
export const BRAND_WHATSAPP_NUMBER = "919246250014";
export const BRAND_EMAIL = "noirandnuts.siliguri@gmail.com";
export const BRAND_ADDRESS = "Hakim Para, Siliguri – 734001, West Bengal, India";
export const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Hakim+Para,+Siliguri+-+734001,+West+Bengal,+India";

/**
 * Creates the official wa.me direct URL with an encoded message.
 */
export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encoded}`;
}

/**
 * Generates an order message from the current shopping cart.
 */
export function generateCartOrderUrl(items: CartItem[]): string {
  if (items.length === 0) {
    return buildWhatsAppUrl("Hello Noir & Nuts! I would like to inquire about your handcrafted chocolates collection.");
  }

  const itemsList = items
    .map((item, index) => {
      const priceText = item.product.price ? ` (₹${item.product.price} each)` : "";
      return `${index + 1}. ${item.product.name} – Quantity: ${item.quantity}${priceText}`;
    })
    .join("\n");

  const totalCalculated = items.reduce((acc, item) => {
    return acc + (item.product.price || 0) * item.quantity;
  }, 0);

  const totalSummary = totalCalculated > 0 ? `\nEstimated Total: ₹${totalCalculated}` : "";

  const message = `Hello Noir & Nuts!
I would like to place an order.

Products:
${itemsList}${totalSummary}

Delivery Location: Siliguri / West Bengal
Please share the availability, packaging options, and ordering details.
Thank you!`;

  return buildWhatsAppUrl(message);
}

/**
 * Generates a direct single product order message from product card or detail page.
 */
export function generateSingleProductOrderUrl(product: Product, quantity?: number): string {
  const actualQty = quantity ?? (product.minOrderQuantity || 1);
  const priceInfo = product.price ? ` (₹${product.price} each)` : "";
  const total = product.price ? `\nEstimated Total: ₹${product.price * actualQty}` : "";
  const customNote = product.customisationNotice ? `\nCustomisation Request: Yes (Logo / Couple Name)` : "";

  const message = `Hello Noir & Nuts!
I would like to place an order.

Product: ${product.name} – Quantity: ${actualQty} boxes${priceInfo}${total}${customNote}

Delivery Location: Siliguri / West Bengal
Please share the availability and ordering details.
Thank you!`;

  return buildWhatsAppUrl(message);
}

/**
 * Generates a custom gifting enquiry message.
 */
export function generateGiftingInquiryUrl(occasion?: string): string {
  const occasionText = occasion ? ` for ${occasion}` : "";
  const message = `Hello Noir & Nuts!
I would like to inquire about handcrafted chocolate gifting${occasionText}.

Could you please share your available gift box assortments, customisation options, and bulk/celebration booking details?
Thank you!`;

  return buildWhatsAppUrl(message);
}

/**
 * Generates a general enquiry WhatsApp message.
 */
export function generateGeneralInquiryUrl(): string {
  const message = `Hello Noir & Nuts!
I am interested in your luxury handcrafted chocolates and nut confections. Could you please share more details about your current collection and availability in Siliguri?
Thank you!`;

  return buildWhatsAppUrl(message);
}
