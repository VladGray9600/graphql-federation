import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {

  @Field()
  title: string;

  @Field()
  content: string;
}
