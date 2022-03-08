//configuration for DB connectivity

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeORMConfiguration: TypeOrmModuleOptions = {
  username: 'root',
  password: '3108',
  port: 3306,
  host: 'localhost',
  type: 'mysql',
  database: 'Blog_application',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  //true: all the properties in the entity classes will be synchronized with database
  synchronize: false,
};
