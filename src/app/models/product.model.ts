import { model, Schema } from 'mongoose';
import { Product } from '../interfaces/product.interface';

const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: [true, 'Product name is required.'],
  },
  brand: {
    type: String,
    required: [true, "Brand is required. Please specify the product's brand."],
  },
  price: {
    type: Number,
    required: [true, "Price is required. Please provide the product's price."],
    min: [0, 'Price must be a positive number.'],
  },
  category: {
    type: String,
    required: [true, 'Category is required.'],
    enum: [
      'Writing',
      'Office Supplies',
      'Art Supplies',
      'Educational',
      'Technology',
    ],
  },
  description: {
    type: String,
    required: [
      true,
      'Description is required. Please provide details about the product.',
    ],
  },
  quantity: {
    type: Number,
    required: [
      true,
      'Quantity is required. Please specify the stock quantity.',
    ],
    min: [0, 'Quantity must be a non-negative number.'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'In-stock status is required.'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

export const ProductModel = model<Product>('Product', productSchema);
