import { Document } from 'mongoose';

import { Timestamps } from '@app/common/interfaces/timestamp';
import { Roles } from '@app/common/roles';

export interface User extends Document, Timestamps {
  name: string;
  email: string;
  password: string;
  role: Roles;
}
