import { TCart } from './cart.interface';
import { CartModal } from './cart.modal';

const createCartIntoDB = async (payload: TCart) => {
  const result = await CartModal.create(payload);
  return result;
};
const getAllCartItmsFromDB = async () => {
  const result = await CartModal.find().populate('product');
  return result;
};

export const CartService = {
  createCartIntoDB,
  getAllCartItmsFromDB,
};
