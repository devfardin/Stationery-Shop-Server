/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';
export type TUser = {
  name: string,
  email: string,
  password: string,
  role: 'admin' | 'customer',
  status: 'active' | 'disabled',
  isDeleted: boolean,
};

export interface user extends Model<TUser> {
  isUserExistByEmail(email: string): Promise<TUser>;
  isPasswordMatch(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
export type TUserRole = keyof typeof USER_ROLE;
