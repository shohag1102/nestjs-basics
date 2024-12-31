/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(limit, page);
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id, id);
    return this.userService.getUserById(id);
  }

  //basic usage
  //   @Post()
  //   createUser() {
  //     this.userService.createUser({
  //       id: 2,
  //       name: 'Jane Doe',
  //       email: 'jane.doe@example.com',
  //       isMarried: true,
  //       gender: 'Female',
  //     });
  //     return 'success';
  //   }
  // from body
  @Post()
  createUser(@Body(new ValidationPipe()) user: CreateUserDto) {
    return user;
  }
}
