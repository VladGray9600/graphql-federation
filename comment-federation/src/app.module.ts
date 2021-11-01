import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CommentModule } from './comment/comment.module';




@Module({
  imports: [CommentModule,
    GraphQLFederationModule.forRoot({ autoSchemaFile: join(process.cwd(), 'src/schema.gql')}),
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
