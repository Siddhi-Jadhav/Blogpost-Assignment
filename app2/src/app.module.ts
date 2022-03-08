import { TypeORMConfiguration } from './config/typeorm.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    BlogModule,
    UserModule,
    //adding dependency for TypeORM
    TypeOrmModule.forRoot(TypeORMConfiguration),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
