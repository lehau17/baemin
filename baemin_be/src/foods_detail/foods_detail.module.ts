import { Module } from '@nestjs/common';
import { FoodsDetailService } from './foods_detail.service';
import { FoodsDetailController } from './foods_detail.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FoodsDetailController],
  providers: [FoodsDetailService, PrismaService],
})
export class FoodsDetailModule {}
