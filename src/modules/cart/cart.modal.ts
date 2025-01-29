import { model, Schema } from 'mongoose';
import { TCart } from './cart.interface';

const cartSchema = new Schema<TCart>({
  user: {
    type: String,
    required: [true, 'User email is required'],
  },
  product: {
    type: Schema.Types.ObjectId,
    required: [true, 'Product id is required'],
    ref: 'Product',
  },
  date: {
    type: String,
    default: Date(),
  },
  quantity: {
    type: Number,
    required: [true, 'Product quantity is required'],
  },
});
export const CartModal = model<TCart>('Carts', cartSchema);
