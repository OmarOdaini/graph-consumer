import { Module } from '@nestjs/common';
import { GraphQlResolver } from './graph-ql.resolver'
import { PubSubService } from '../pub-sub/pub-sub.service'
@Module({
  // Things this module uses / injectable imports
  providers: [GraphQlResolver, PubSubService],
  // Things this module exposes
  exports: [GraphQlResolver]
})
export class GraphQlModule { }
