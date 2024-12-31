/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  isMarried: boolean;

  @Prop()
  gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User);