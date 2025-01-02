/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('createUser')
  @HttpCode(200)
  async createCustomer(
    @Body(new ValidationPipe())
    userDto: CreateUserDto,
  ): Promise<any> {
    console.log('user', userDto);
    return this.userService.createUser(userDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async getAllUsers() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.userService.findOneUser(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body(new ValidationPipe()) user: CreateUserDto,
  ) {
    return this.userService.updateUser(id, user);
  }
}
