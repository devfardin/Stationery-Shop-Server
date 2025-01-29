import { Types } from 'mongoose';

export type TCart = {
  user: string,
  product: Types.ObjectId,
  date: string,
  quantity: number,
};
export type TUpdateCartItems = {
  id: string,
  newQuantity: number,
};
