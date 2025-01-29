import { TCart, TUpdateCartItems } from './cart.interface';
import { CartModal } from './cart.modal';

const createCartIntoDB = async (payload: TCart) => {
  const result = await CartModal.create(payload);
  return result;
};
const getAllCartItmsFromDB = async () => {
  const result = await CartModal.find().populate('product');
  return result;
};
const getCartItemsByUser = async (email: string) => {
  if (!email) {
    return null;
  }
  const query = { user: email };
  const result = await CartModal.find(query).populate('product');
  return result;
};
const upDateCartItem = async (payload: TUpdateCartItems) => {
  const result = await CartModal.updateOne(
    { _id: payload.id },
    { quantity: payload.newQuantity },
    {
      new: true,
    },
  );
  return result;
};

// Deletes a product from the database by its ID.
const deleteCartItemFromDB = async (productId: string) => {
  const result = await CartModal.deleteOne({ _id: productId });
  return result;
};

export const CartService = {
  createCartIntoDB,
  getAllCartItmsFromDB,
  getCartItemsByUser,
  upDateCartItem,
  deleteCartItemFromDB,
};
