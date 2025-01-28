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
});
export const CartModal = model<TCart>('Carts', cartSchema);
