import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentResolver } from './comment.resolver';
import { Post } from './entities/post.entity';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';
import { UserResolver } from './user.resolver';


@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostResolver,PostService,UserResolver,CommentResolver]
})
export class PostModule {}
