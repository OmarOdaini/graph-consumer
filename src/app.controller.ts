import { Controller, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from 'src/consumer/consumer.service';
@Controller()
export class AppController implements OnModuleInit {
  constructor(private readonly consumerSvc: ConsumerService) { }

  // Start up consumer 
  async onModuleInit() {
    await this.consumerSvc.consume();
  }
}
