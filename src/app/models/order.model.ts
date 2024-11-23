import { model, Schema } from 'mongoose';
import { Order } from '../interfaces/order.interface';

// const emailValidation = (email: string) => {
//   const check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return check.test(email);
// };
const orderSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      // validate: {
      //   validator: emailValidation,
      //   message: 'Please fill a valid email address',
      // },
      trim: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Products',
      require: [true, 'Product ID is required.'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required.'],
      min: [0, 'Price must be a positive number'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required.'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  },
);
export const OrderModel = model<Order>('Order', orderSchema);
