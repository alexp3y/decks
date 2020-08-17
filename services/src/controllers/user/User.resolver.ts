import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import User from '#root/models/User';
import * as bcrypt from 'bcryptjs';
import { UserInput } from './UserInput';

@Resolver((of) => User)
export default class UserResolver {
  @Query((returns) => User)
  async user(@Arg('id') id: string) {
    return await User.findOne({
      where: { id },
    });
  }

  @Query((returns) => [User])
  async users() {
    return await User.findAll();
  }

  @Mutation((returns) => User)
  async register(
    @Arg('input') { firstName, lastName, email, password, bio }: UserInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    return await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
  }
}
