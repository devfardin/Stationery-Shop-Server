import { Types } from 'mongoose';

export type TCategory = {
  author: Types.ObjectId,
  name: string,
  description: string,
  feature: string,
};
