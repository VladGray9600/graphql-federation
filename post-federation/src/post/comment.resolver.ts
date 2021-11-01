import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Post } from "./entities/post.entity";
import { PostService } from "./post.service";
import { Comment } from "./entities/comment.entity";


@Resolver((of) => Comment)
export class CommentResolver {
    constructor(private readonly postService:PostService){}

    @ResolveField((of) => [Post])
    post(@Parent() user: Comment): Promise<Post[]>{
        return this.postService.forComment(user.id)
    }
}