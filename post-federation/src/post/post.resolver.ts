import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Info } from '@nestjs/graphql';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';
import { User } from './entities/user.entity';
import { PostService } from './post.service';
import { Comment } from './entities/comment.entity';




@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }

  @Query(() => [Post])
  findAll() {
    return this.postService.findAll();
  }

  @Query(() => Post)
  findOne(@Args('id') id: string, @Info() info) {
    const keys = info.fieldNodes[0].selectionSet.selections
      .filter((selection) => !selection.selectionSet)
      .map((item) => item.name.value);
      console.log(keys);
      
    return this.postService.findOne(id);
  }

  @Mutation(() => Post)
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postService.update(updatePostInput.id, updatePostInput);
  }

  @Mutation(() => Post)
  removePost(@Args('id') id: string) {
    return this.postService.remove(id);
  }

  @ResolveField((of) => User)
  user(@Parent() post:Post){
    return {__typename:"User", id: post.userId} 
  }

  @ResolveField((of) => Comment)
  comment(@Parent() post: Post){
    return {__typename:"Comment", id: post.commentId} 
  }


}
