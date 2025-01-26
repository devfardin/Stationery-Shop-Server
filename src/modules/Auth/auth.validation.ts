import { z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'User email is required' }),
    password: z.string({ required_error: 'User Password is required' }),
  }),
});
const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh token is required!',
    }),
  }),
});
export const AuthValidation = {
  loginValidationSchema,
  refreshTokenValidationSchema,
};
