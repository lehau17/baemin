import { UsersService } from 'src/user/user.service';
import { Module } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { UsersController } from './user.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UserModule {}
