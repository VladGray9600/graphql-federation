import { Injectable } from '@nestjs/common';
import { Info } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(@InjectRepository(Comment) private commentRepository: Repository<Comment>){}

    async create(createCommentInput: CreateCommentInput) : Promise<Comment>{
    let newComm = await this.commentRepository.create(createCommentInput);
    return this.commentRepository.save(newComm)
  }

    async findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

    async findOne(id: string) {
    return this.commentRepository.findOne(id);
  }

    async update(id: string, updateCommentInput: UpdateCommentInput) {
      let comm: Comment = await this.commentRepository.create(updateCommentInput)
      comm.id = id
      return this.commentRepository.save(comm);
  }

    async remove(id: string) {
      let comm = this.commentRepository.findOne(id)
      if (comm) {
        return this.commentRepository.delete(id)
      }
    }
  }

  

