import { UserModule } from '../user/user.module';
import { BlogRepository } from './blog.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
  //use typeORM to create the table Task using repository
  //forFeature() method to define which repositories are registered in the current scope
  imports: [TypeOrmModule.forFeature([BlogRepository]), UserModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
