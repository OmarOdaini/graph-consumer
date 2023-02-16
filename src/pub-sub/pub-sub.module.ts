import { Module } from '@nestjs/common';
import { PubSubService } from './pub-sub.service';

@Module({
  // Things this module uses / injectable imports
  providers: [PubSubService],
  // Things this module exposes
  exports: [PubSubService]
})
export class PubSubModule { }
