import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Post } from "./entities/post.entity";
import { User } from "./entities/user.entity";
import { PostService } from "./post.service";

@Resolver((of) => User)
export class UserResolver {
    constructor(private readonly postService:PostService){}

    @ResolveField((of) => [Post])
    post(@Parent() user: User): Promise<Post[]>{
        return this.postService.forUser(user.id)
    }

}