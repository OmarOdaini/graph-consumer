import { Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

const globalPubSub = new PubSub();

@Injectable()
export class PubSubService {
    pubSub = globalPubSub;
}
