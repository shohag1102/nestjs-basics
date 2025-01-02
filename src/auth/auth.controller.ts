/* eslint-disable prettier/prettier */

import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  async signIn(@Body() user: any): Promise<any> {
    return this.authService.signIn(user.email, user.password);
  }
}
