import { model, Schema } from 'mongoose';
import { TUser, user } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../app/config';
const userSchema = new Schema<TUser, user>(
  {
    firstName: {
      type: String,
      required: [true, 'First Name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Last Name is required'],
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
userSchema.statics.isUserExistByEmail = async function (email: string) {
  return await UserModal.findOne({ email: email }).select('+password');
};
userSchema.statics.isPasswordMatch = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const UserModal = model<TUser, user>('Users', userSchema);
