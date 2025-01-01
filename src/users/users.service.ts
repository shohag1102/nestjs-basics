/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUserDto);
    return createUser.save();
  }

  async findAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOneUser(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async updateUser(id: string, user: CreateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true });
  }
}
