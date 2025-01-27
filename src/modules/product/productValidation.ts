import { z } from 'zod';

const upateProductValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    descriiption: z.string().optional(),
    price: z.number().optional(),
    discount: z.number().optional(),
    quantity: z.number().optional(),
    sku: z.string().optional(),
    category: z.string().optional(),
    brand: z.string().optional(),
    feature: z.string().optional(),
  }),
});
export const ProductValidation = {
  upateProductValidation,
};
