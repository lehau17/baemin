import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CartsController } from './carts.controller';

@Module({
  controllers: [CartsController],
  providers: [CartsService, PrismaService],
})
export class CartsModule {}
