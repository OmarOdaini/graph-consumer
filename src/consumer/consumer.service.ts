import { Injectable, OnApplicationShutdown, Inject } from '@nestjs/common';
import { Kafka, KafkaConfig } from 'kafkajs';
import { User } from '../generics.model'
import { PubSubService } from '../pub-sub/pub-sub.service';

@Injectable()
export class ConsumerService implements OnApplicationShutdown {
    constructor(private readonly pubSub: PubSubService) { }

    kafkaConfig: KafkaConfig = {
        brokers: process.env.KAFKA_BROKERS.split(','),
        ssl: true,
        sasl: {
            mechanism: 'plain',
            username: process.env.KAFKA_USER,
            password: process.env.KAFKA_PASSWORD,
        },
    };

    private readonly kafka = new Kafka(this.kafkaConfig);

    private readonly consumer = this.kafka.consumer({
        groupId: process.env.IAM_API_NAME
    });

    async consume() {
        const topicConfig = {
            topics: [process.env.KAFKA_TOPIC],
            fromBeginning: true
        };

        const msgHandler = {
            eachMessage: async ({ topic, partition, message }) => {
                console.log("Received a message from topic: ", topic);
                const msg = JSON.parse(message.value.toString());
                const user = new User();
                user.name = msg.name;
                user.age = msg.age;

                console.log("A user has been created, publishing!");
                this.pubSub.pubSub.publish('userCreated', { userCreated: user });
            }
        }

        await this.consumer.connect();
        await this.consumer.subscribe(topicConfig);
        console.log("Consumer up and running!");
        await this.consumer.run(msgHandler);
    }

    // destructor
    async onApplicationShutdown() {
        await this.consumer.disconnect();
    }
}
