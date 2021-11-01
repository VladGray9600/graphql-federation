import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateCommentInput {

  @Field()
  id: string;
  
  @Field()
  title: string;

  @Field()
  content: string;
}
