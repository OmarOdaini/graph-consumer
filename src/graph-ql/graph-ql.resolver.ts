import { Resolver, Query, Subscription } from '@nestjs/graphql';
import { User } from '../generics.model';
import { PubSubService } from '../pub-sub/pub-sub.service';

@Resolver(() => User)
export class GraphQlResolver {
  constructor(private readonly pubSub: PubSubService) { }

  // Health Check
  @Query(() => String)
  userCount(): String {
    return "GraphQL is running";
  }

  @Subscription(() => User)
  userCreated() {
    return this.pubSub.pubSub.asyncIterator('userCreated');
  }

}
