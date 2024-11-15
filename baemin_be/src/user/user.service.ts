import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, users } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { createHmac } from 'node:crypto';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: RegisterDto): Promise<users> {
    //fimd by email
    const foundUser = await this.prisma.users.findFirst({
      where: {
        usr_email: data.email,
        usr_username: data.username,
      },
    });
    if (foundUser) {
      throw new BadRequestException('email or username already exists');
    }

    const newUser = await this.prisma.users.create({
      data: {
        usr_email: data.email,
        usr_password: createHmac('sha256', data.password).digest('hex'),
        usr_username: data.username,
        usr_first_name: data.first_name,
        usr_last_name: data.last_name,
      },
    });
    await this.prisma.carts.create({
      data: {
        user_id: newUser.id,
      },
    });
    return newUser;
  }

  async findAll(): Promise<users[]> {
    return this.prisma.users.findMany();
  }

  async findOne(id: number): Promise<users> {
    return this.prisma.users.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.usersUpdateInput): Promise<users> {
    return this.prisma.users.update({
      where: { id },
      data,
    });
  }

  findUserBeUserName(email: string) {
    return this.prisma.users.findFirst({ where: { usr_email: email } });
  }

  async remove(id: number): Promise<users> {
    return this.prisma.users.delete({
      where: { id },
    });
  }
}
