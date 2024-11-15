import { UsersService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { users } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findUserBeUserName(username);
    if (user && user.usr_password === password) {
      const { usr_password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(payload: RegisterDto) {
    return this.usersService.create(payload);
  }

  async login(user: users) {
    const tokens = await this.getTokens(user.id, user.usr_email);
    return tokens;
  }

  async getTokens(userId: number, username: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: '15d',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
