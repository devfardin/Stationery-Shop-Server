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
  id: string,
};
export type TOrder = {
  porducts: TProduct[],
  shiping: TShiping,
  cartId: string[],
  status: string,
  paymentStatus: string,
  TotalPrice: number,
};

export type TPaymentData = {
  total_amount: number, // Should be a number, not `any`
  currency: string,
  tran_id: string,
  success_url: string,
  fail_url: string,
  cancel_url: string,
  ipn_url: string,
  shipping_method: string,
  product_name: string,
  product_category: string,
  product_profile: string,
  cus_name: string,
  cus_email: string,
  cus_add1: string,
  cus_add2: string,
  cus_city: string,
  cus_state: string,
  cus_postcode: string | number,
  cus_country: string,
  cus_phone: string,
  cus_fax?: string, // Optional field
  ship_name: string,
  ship_add1: string,
  ship_add2?: string, // Optional
  ship_city: string,
  ship_state: string,
  ship_postcode: string | number,
  ship_country: string,
  GatewayPageURL: string,
};
