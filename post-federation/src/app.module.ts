import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Comment } from './post/entities/comment.entity';
import { User } from './post/entities/user.entity';
import { PostModule } from './post/post.module';





@Module({
  imports: [PostModule,
    GraphQLFederationModule.forRoot({ autoSchemaFile: join(process.cwd(), 'src/schema.gql'),buildSchemaOptions:{orphanedTypes:[User,Comment]}}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'vladgray',
      password: 'vlados9600',
      database: 'gql-federation',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}
