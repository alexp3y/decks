import { InputType, Field } from 'type-graphql';
import { MaxLength, Length, IsEmail } from 'class-validator';
import { IsEmailAlreadyExist } from './isEmailAlreadyExist';

@InputType()
export class UserInput {
  @Field()
  @Length(1, 255)
  firstName!: string;

  @Field()
  @Length(1, 255)
  lastName!: string;

  @Field()
  @Length(1, 255)
  @IsEmail()
  @IsEmailAlreadyExist({ message: 'Email Already Exists' })
  email!: string;

  @Field()
  @Length(8, 30) //, { message: 'Password Incorrect Length' })
  password!: string;

  @Field({ nullable: true })
  @MaxLength(255)
  bio?: string;
}
