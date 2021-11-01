import { Resolver, Query, Mutation, Args, Int, ResolveReference } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Comment } from './entities/comment.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Mutation(() => Comment)
  createComment(@Args('creatCommentInput') createCommentInput: CreateCommentInput) {
    return this.commentService.create(createCommentInput);
  }

  @Query(() => [Comment])
  findAll() {
    return this.commentService.findAll();
  }

  @Query(() => Comment)
  findOne(@Args('id') id: string) {
    return this.commentService.findOne(id);
  }

  @Mutation(() => Comment)
  updateComment(@Args('updateCommentInput') updateCommentInput: UpdateCommentInput) {
    return this.commentService.update(updateCommentInput.id, updateCommentInput);
  }

  @Mutation(() => Comment)
  removeComment(@Args('id') id: string) {
    return this.commentService.remove(id);
  }

  @ResolveReference()
  resolvereferenct(ref:{__typename:string,id: string}){
    return this.commentService.findOne(ref.id)
  }


}
