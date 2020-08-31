import * as bcrypt from 'bcryptjs';

import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import { User } from '#root/models/User';
import { ReqContext } from '#root/types/ReqContext';

@Resolver()
export class LoginResolver {
  @Mutation(() => User, { nullable: true })
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() ctx: ReqContext
  ): Promise<User | null> {
    const user = await User.findOne({ where: { email } });

    if (!user) return null;

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) return null;

    ctx.req.session!.userId = user.id;

    return user;
  }
}
