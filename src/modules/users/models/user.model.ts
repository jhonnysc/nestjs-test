import { Schema } from 'mongoose';
import mongooseTypes from '@app/utils/mongo/types';

export const UserSchema = new Schema(
  {
    name: mongooseTypes.required.string,
    email: mongooseTypes.required.string,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);
