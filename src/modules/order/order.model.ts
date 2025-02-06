import { model, Schema } from 'mongoose';
import { TOrder, TShiping, Tuser } from './order.interface';
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
  phone: {
    type: String,
    trim: true,
    required: [true, 'Phone number is required'],
  },
});

const userSchema = new Schema<Tuser>({
  email: {
    type: String,
  },
  id: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
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
  // cartId: {
  //   type: [String],
  //   required: [true, 'cart id is required'],
  // },
  status: {
    type: String,
    default: 'pending',
  },
  user: {
    type: userSchema,
  },
  paymentStatus: {
    type: String,
    default: 'pending',
  },
  TotalPrice: {
    type: Number,
  },
});

// Export the order model functions.
export const OrderModel = model<TOrder>('Order', orderSchema);
