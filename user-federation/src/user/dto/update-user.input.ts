import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {

  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Int)
  age: number;
}
