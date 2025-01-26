import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../app/config';
const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, 'User Name is required'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email Address is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      select: 0,
    },
    role: {
      type: String,
      enum: ['admin', 'customer'],
      default: 'customer',
    },
    status: {
      type: String,
      emit: ['active', 'disabled'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);
userSchema.pre('save', async function (next) {
  const user = this as TUser;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_roounds),
  );
  next();
});

// get hidden field like password
userSchema.statics.isUserExistById = async function (id: string) {
  return await UserModal.findOne({ _id: id }).select('+password');
};
userSchema.statics.isPasswordMatch = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const UserModal = model<TUser>('Users', userSchema);