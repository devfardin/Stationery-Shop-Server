export interface Product {
  name: string;
  brand: string;
  price: number;
  category:
    | 'Writing'
    | 'Office Supplies'
    | 'Art Supplies'
    | 'Educational'
    | 'Technology';
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductUpdateInfo {
  name?: string;
  brand?: string;
  price?: number;
  category?: string;
  description?: string;
  quantity?: number;
  inStock?: boolean;
  updatedAt: Date;
}
