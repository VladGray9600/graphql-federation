import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@ObjectType()
@Directive('@key(fields:"id")')
@Entity()
export class Post {

  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  content: string;

  //Many to one relationships
  @Field(() => User)
  user: User

  @Field(() => Comment)
  comment : Comment

  @Column()
  @Field()
  userId: string;

  @Column()
  @Field()
  commentId: string;

}
