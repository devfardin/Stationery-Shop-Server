// Product Interface
export interface Product {
  title: string;
  description: string;
  price: number;
  discount: number;
  quantity: number;
  sku: string;
  category: string;
  brand: string;
  feature: string;
}

// ProductUpdateInfo Interface
export interface ProductUpdateInfo {
  title?: string;
  brand?: string;
  price?: number;
  category?: string;
  description?: string;
  quantity?: number;
  inStock?: boolean;
  updatedAt?: Date;
}
