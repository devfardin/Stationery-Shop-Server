import { model, Schema } from 'mongoose';
import { TOrder, TShiping } from './order.interface';

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
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Carts',
  },
  shiping: {
    type: shipingSchema,
  },
});

// Export the order model functions.
export const OrderModel = model<TOrder>('Order', orderSchema);
