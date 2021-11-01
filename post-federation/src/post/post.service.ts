import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Post) private postRepository: Repository<Post>){}

  async create(createPostInput: CreatePostInput) : Promise<Post>{
      let newPost = await this.postRepository.create(createPostInput)
      return this.postRepository.save(newPost)
  }

  async findAll(): Promise<Post[]> {
      return this.postRepository.find()
  }

  async findOne(id: string) {
      return this.postRepository.findOne(id)
  }

  async update(id: string, updatePostInput: UpdatePostInput) {
      let post : Post = await this.postRepository.create(updatePostInput)
      post.id = id
      return this.postRepository.save(post)
  }

  async remove(id: string) {
      let post = await this.postRepository.findOne(id)
      if(post) {
        return this.postRepository.delete(id)
      }
  }

  async forUser(id: string) {
    return await this.postRepository.find({"userId": id})
  }

  async forComment(id: string) {
    return await this.postRepository.find({"commentId": id})
  }


  }

