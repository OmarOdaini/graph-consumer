import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
    @Field({ nullable: false })
    name: string;
    @Field(() => Int)
    age: number;
}