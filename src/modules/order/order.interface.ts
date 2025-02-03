import { Product } from '../product/product.interface';

export type TShiping = {
  Apartment: string,
  address: string,
  city: string,
  firstName: string,
  lastName: string,
  postCode: string,
};
export type TProduct = {
  user: string,
  product: Product,
  date: string,
  quantity: number,
};
export type TOrder = {
  porducts: TProduct[],
  shiping: TShiping,
};
