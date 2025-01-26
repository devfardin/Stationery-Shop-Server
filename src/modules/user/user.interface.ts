export type TUser = {
  name: string,
  email: string,
  password: string,
  role: 'admin' | 'customer',
  status: 'active' | 'disabled',
  isDeleted: boolean,
};
