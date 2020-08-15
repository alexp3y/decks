import { Query, Resolver } from 'type-graphql';
import Message from '#root/models/Message';

@Resolver(Message)
export default class MessageResolver {
  @Query((returns) => [Message])
  async messages() {
    return await Message.findAll();
  }
}
