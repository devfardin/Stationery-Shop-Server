import { Types } from 'mongoose';

export type TShiping = {
  Apartment: string,
  address: string,
  city: string,
  firstName: string,
  lastName: string,
  postCode: string,
};
export type TOrder = {
  product: Types.ObjectId,
  shiping: TShiping,
};
