import { model, Schema } from 'mongoose';
import { TCategory } from './category.interface';

const creatCategoryInDB = new Schema<TCategory>(
  {
    userId: {
      type: String,
      required: [true, 'User is is required'],
      ref: 'Users',
    },
    name: {
      type: String,
      required: [true, 'Category name is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Category description is required'],
      trim: true,
    },
    feature: {
      type: String,
      required: [true, 'Category Feature image is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);
export const CategoryModel = model<TCategory>('Categories', creatCategoryInDB);
