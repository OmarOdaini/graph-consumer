import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConsumerModule } from './consumer/consumer.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQlModule } from './graph-ql/graph-ql.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PubSubModule } from './pub-sub/pub-sub.module';

@Module({
  // Modules that are required by current module
  imports: [
    // kafka consumer module
    ConsumerModule,
    // resolver module
    GraphQlModule,
    // global configs 
    ConfigModule.forRoot(),
    // Start up GraphQL webSocket
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      subscriptions: {
        'subscriptions-transport-ws': true,
      },
    }),
    PubSubModule
  ],
  controllers: [AppController],
})
export class AppModule { }
