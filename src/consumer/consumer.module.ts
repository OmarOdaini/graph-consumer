import { Module } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { PubSubService } from '../pub-sub/pub-sub.service'
@Module({
  // Things this module uses / injectable imports
  providers: [ConsumerService, PubSubService],
  // Things this module exposes
  exports: [ConsumerService]
})
export class ConsumerModule { }
