import { z } from 'zod';

const crateCategoryValidation = z.object({
  body: z.object({
    userId: z.string({ required_error: 'User id is required' }),
    name: z.string({ required_error: 'Category name is required' }),
    description: z.string({
      required_error: 'Category descriiption is requires',
    }),
    feature: z.string(),
  }),
});
export const CategoryValidation = {
  crateCategoryValidation,
};
