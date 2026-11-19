export type ProductCategory =
  | "All Products"
  | "Handmade Chocolates"
  | "Chocolate Treats"
  | "Nut Delights"
  | "Chocolate Gifts"
  | "Special Collections";

export interface ProductItemContent {
  name: string;
  count?: number | string;
  notes?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline?: string;
  description: string;
  detailedDescription?: string;
  boxContents?: ProductItemContent[];
  customisationNotice?: string;
  customizationNotice?: string;
  images: string[];
  price?: number;
  originalPrice?: number;
  category: ProductCategory;
  secondaryCategories?: ProductCategory[];
  weight?: string;
  piecesCount?: number;
  ingredients?: string[];
  dietaryInfo?: string[];
  shelfLife?: string;
  storageInstructions?: string;
  isAvailable: boolean;
  isFeatured: boolean;
  isBestseller?: boolean;
  displayOrder: number;
  badges?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
