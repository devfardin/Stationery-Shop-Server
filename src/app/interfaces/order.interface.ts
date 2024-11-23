import { ObjectId } from 'mongoose';

export interface Order {
  email: string;
  product: ObjectId;
  quantity: number;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
