import { Resolver, Mutation, Arg, UseMiddleware } from 'type-graphql';
import * as bcrypt from 'bcryptjs';

import { User } from '#root/models/User';
import { RegisterInput } from './register/RegisterInput';
import { logger } from '../middleware/logger';

@Resolver()
export class RegisterResolver {
  @UseMiddleware(logger)
  @Mutation(() => User)
  async register(
    @Arg('input')
    { firstName, lastName, bio, email, password }: RegisterInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    return await User.create({
      firstName,
      lastName,
      bio,
      email,
      password: hashedPassword,
    });
  }
}
