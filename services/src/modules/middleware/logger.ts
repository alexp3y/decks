import { MiddlewareFn } from 'type-graphql';
import { ReqContext } from '#root/types/ReqContext';

export const logger: MiddlewareFn<ReqContext> = async ({ args }, next) => {
  console.log('args: ', args);

  return next();
};
