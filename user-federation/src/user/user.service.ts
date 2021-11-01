import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async create(createUserInput: CreateUserInput) : Promise<User>{
    let newUser = await this.userRepository.create(createUserInput);
    return this.userRepository.save(newUser)
  }

    async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

    async findOne(id: string) {
    return this.userRepository.findOne(id);
  }

    async update(id: string, updateUserInput: UpdateUserInput) {
      let user: User = await this.userRepository.create(updateUserInput)
      user.id = id
      return this.userRepository.save(user);
  }

    async remove(id: string) {
      let user = this.userRepository.findOne(id)
      if (user) {
        return this.userRepository.delete(id)
      }
    }
  }

