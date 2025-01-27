import { TCategory } from './category.interface';
import { CategoryModel } from './category.modal';

const creatCategoryInDB = async (payload: TCategory) => {
  const result = await CategoryModel.create(payload);
  return result;
};
export const CategoryService = {
  creatCategoryInDB,
};
