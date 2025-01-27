import { TCategory } from './category.interface';
import { CategoryModel } from './category.modal';

const creatCategoryInDB = async (payload: TCategory) => {
  const result = await CategoryModel.create(payload);
  return result;
};
const getAllCategoriesFromDB = async () => {
  const result = await CategoryModel.find().populate('author');
  return result;
};

const deleteCategoryFromDB = async (productId: string) => {
  const result = await CategoryModel.deleteOne({ _id: productId });
  return result;
};
export const CategoryService = {
  creatCategoryInDB,
  getAllCategoriesFromDB,
  deleteCategoryFromDB,
};
