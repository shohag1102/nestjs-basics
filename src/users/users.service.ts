/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  

  //   ------------- practiced below --------------------------------\\\
  //   users: {
  //     id: number;
  //     name: string;
  //     email: string;
  //     isMarried: boolean;
  //     gender: string;
  //   }[] = [
  //     {
  //       id: 1,
  //       name: 'John Doe',
  //       email: 'john.doe@example.com',
  //       isMarried: false,
  //       gender: 'Male',
  //     },
  //     {
  //       id: 2,
  //       name: 'Jane Doe',
  //       email: 'jane.doe@example.com',
  //       isMarried: true,
  //       gender: 'Female',
  //     },
  //     {
  //       id: 3,
  //       name: 'Alice Doe',
  //       email: 'alice.doe@example.com',
  //       isMarried: false,
  //       gender: 'Female',
  //     },
  //   ];
  //   getUsers() {
  //     return this.users;
  //   }

  //   getUserById(id: number) {
  //     return this.users.find((x) => x.id == id);
  //   }

  //   createUser(user: {
  //     id: number;
  //     name: string;
  //     email: string;
  //     isMarried: boolean;
  //     gender: string;
  //   }): void {
  //     this.users.push(user);
  //   }
}
