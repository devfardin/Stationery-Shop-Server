import { z } from 'zod';

const createProductValidation = z.object({
  body: z.object({
    title: z.string(),
    descriiption: z.string(),
    price: z.number(),
    discount: z.number(),
    quantity: z.number(),
    sku: z.string(),
    category: z.string(),
    brand: z.string(),
    feature: z.string(),
  }),
});
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
  createProductValidation,
};
