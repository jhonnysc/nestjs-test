import { AccessControlModule } from 'nest-access-control';

import { Module, Global } from '@nestjs/common';

import { roles } from './roles';

@Global()
@Module({
  imports: [AccessControlModule.forRoles(roles)],
})
export class RolesModule {}
