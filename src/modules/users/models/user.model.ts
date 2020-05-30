import { Schema } from 'mongoose';
import mongooseTypes from '@app/utils/mongo/types';
import { User } from '../interfaces/user.interface';
import { encrypt, decrypt } from '@app/utils/security';

const UserSchema = new Schema(
  {
    name: mongooseTypes.required.string,
    email: mongooseTypes.required.string,
    role: mongooseTypes.required.string,
    password: mongooseTypes.required.string,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

UserSchema.pre<User>('save', function(next) {
  if (!this.isModified('password')) return next();

  this.password = encrypt(this.password);
  return next();
});

UserSchema.pre('findOne', function(next) {
  const { password } = this.getQuery();
  if (password)
    this.setQuery({ ...this.getQuery(), password: encrypt(password) });
  return next();
});

UserSchema.post('findOne', function(user: User, next) {
  if (user) user.password = decrypt(user.password);
  return next();
});

UserSchema.pre('find', function(next) {
  const { password } = this.getQuery();
  if (password)
    this.setQuery({ ...this.getQuery(), password: encrypt(password) });
  return next();
});

export { UserSchema };
