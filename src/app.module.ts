/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    TweetModule,
    MongooseModule.forRoot(
      'mongodb+srv://selise:selise@selise-attachment.jq2br.mongodb.net/',
    ),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
