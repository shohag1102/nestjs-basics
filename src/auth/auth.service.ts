/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async signIn(email: string, password: string): Promise<any> {
    const user = await this.usersService.findUserByEmailandPassword(
      email,
      password,
    );

    if (user.email == email && user.password == password) {
      const payload = { email: user.email, sub: user._id };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
  }
}
