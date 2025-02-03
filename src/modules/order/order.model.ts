import { model, Schema } from 'mongoose';
import { TOrder, TShiping } from './order.interface';
import { productSchema } from '../product/product.model';

// Create order scheme
const shipingSchema = new Schema<TShiping>({
  Apartment: {
    type: String,
    trim: true,
    required: [true, 'This Filed is required'],
  },
  address: {
    type: String,
    trim: true,
    required: [true, 'This Filed is required'],
  },
  city: {
    type: String,
    trim: true,
    required: [true, 'This Filed is required'],
  },
  firstName: {
    type: String,
    trim: true,
    required: [true, 'This Filed is required'],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'This Filed is required'],
  },
  postCode: {
    type: String,
    trim: true,
    required: [true, 'This Filed is required'],
  },
});

const orderSchema = new Schema<TOrder>({
  porducts: {
    type: [productSchema],
    required: [true, 'products is required'],
  },
  shiping: {
    type: shipingSchema,
  },
  cartId: {
    type: [String],
    required: [true, 'cart id is required'],
  },
  status: {
    type: String,
    default: 'pending',
  },
  TotalPrice: {
    type: Number,
  },
});

// Export the order model functions.
export const OrderModel = model<TOrder>('Order', orderSchema);
