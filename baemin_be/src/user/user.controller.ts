import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Prisma, users } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './user.service';
import { RegisterDto } from 'src/auth/dto/register.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: RegisterDto): Promise<users> {
    return this.usersService.create(data);
  }

  @Get()
  async findAll(): Promise<users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<users> {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.usersUpdateInput,
  ): Promise<users> {
    return this.usersService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<users> {
    return this.usersService.remove(+id);
  }
}
