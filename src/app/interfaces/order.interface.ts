import { ObjectId } from 'mongoose';
// Order interface
export interface Order {
  email: string;
  product: ObjectId;
  quantity: number;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
