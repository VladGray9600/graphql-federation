
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput {

  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

}
