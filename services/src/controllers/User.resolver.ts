import {
  Resolver,
  Query,
  Arg,
  FieldResolver,
  Root,
  Mutation,
} from 'type-graphql';
import User from '#root/models/User';
import * as bcrypt from 'bcrypt';

@Resolver(User)
export default class UserResolver {
  @FieldResolver()
  async name(@Root() parent: User) {
    return `${parent.firstName} ${parent.lastName}`;
  }

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

  @Mutation(() => User)
  async register(
    @Arg('firstName') firstName: string,
    @Arg('lastName') lastName: string,
    @Arg('email') email: string,
    @Arg('password') password: string
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
