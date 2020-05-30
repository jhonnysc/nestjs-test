import { Timestamps } from '@app/common/interfaces/timestamp';
import { Document } from 'mongoose';

export interface User extends Document, Timestamps {
  name: string;
  email: string;
}
