import { Timestamps } from '@app/abstracts/interfaces/timestamp';
import { Document } from 'mongoose';

export interface User extends Document, Timestamps {
  name: string;
  email: string;
}
