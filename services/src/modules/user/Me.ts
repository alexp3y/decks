import { Resolver, Query, Ctx } from 'type-graphql';
import { ReqContext } from '#root/types/ReqContext';
import { User } from '#root/models/User';

@Resolver()
export class MeResolver {
  @Query(() => Boolean)
  async me(@Ctx() ctx: ReqContext): Promise<boolean> {
    if (!ctx.req.session!.userId) return false;

    return !!User.findOne(ctx.req.session!.userId);
  }
}
