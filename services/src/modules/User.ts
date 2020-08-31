import { Resolver, Query, Arg } from 'type-graphql';
import { User } from '#root/models/User';

@Resolver()
export default class UserResolver {
  @Query(() => User)
  async user(@Arg('id') id: string) {
    return await User.findOne({
      where: { id },
    });
  }

  @Query(() => [User])
  async users() {
    return await User.findAll();
  }
}
