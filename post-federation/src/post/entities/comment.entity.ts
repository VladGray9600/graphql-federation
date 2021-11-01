import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Post } from "./post.entity";

@ObjectType()
@Directive('@extends')
@Directive('@key(fields:"id")')

export class Comment {

    @Field((type) => ID)
    @Directive('@external')
    id: string

    @Field((type) => [Post])
    post: Post[]

}