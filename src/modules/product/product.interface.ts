import { Types } from 'mongoose';

// Product Interface
export interface Product {
  title: string;
  author: Types.ObjectId;
  description: string;
  price: number;
  discount: number;
  quantity: number;
  sku: string;
  category: Types.ObjectId;
  brand: string;
  feature: string;
}

// ProductUpdateInfo Interface
export interface ProductUpdateInfo {
  title?: string;
  author: Types.ObjectId;
  brand?: string;
  price?: number;
  category?: Types.ObjectId;
  discount: number;
  description?: string;
  quantity?: number;
  inStock?: boolean;
  updatedAt?: Date;
}
