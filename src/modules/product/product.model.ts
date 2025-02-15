import { model, Schema } from 'mongoose';
import { Product } from '../../modules/product/product.interface';

// create product scheme
export const productSchema = new Schema<Product>(
  {
    title: {
      type: String,
      required: [true, 'Product name is required.'],
    },
    author: {
      type: Schema.Types.ObjectId,
      required: [true, 'Auther id is required'],
      ref: 'Users',
    },
    description: {
      type: String,
      required: [
        true,
        'Description is required. Please provide details about the product.',
      ],
    },
    price: {
      type: Number,
      required: [
        true,
        "Price is required. Please provide the product's price.",
      ],
      min: [0, 'Price must be a positive number.'],
    },
    discount: {
      type: Number,
    },
    quantity: {
      type: Number,
      required: [
        true,
        'Quantity is required. Please specify the stock quantity.',
      ],
      min: [0, 'Quantity must be a non-negative number.'],
    },
    sku: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: [true, 'Category is required.'],
      ref: 'Categories',
    },
    brand: {
      type: String,
      required: [
        true,
        "Brand is required. Please specify the product's brand.",
      ],
    },
    feature: {
      type: String,
    },
    id: {
      type: String,
      require: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

// Export the produt model functions.
export const ProductModel = model<Product>('Product', productSchema);
