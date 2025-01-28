import { Types } from 'mongoose';

export type TCart = {
  user: string,
  product: Types.ObjectId,
  date: string,
};
