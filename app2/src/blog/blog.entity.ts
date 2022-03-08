import { UserEntity } from '../user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { type } from 'os';

@Entity('Blog')
export class BlogEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  tags: string;

  @ManyToOne((type) => UserEntity, (user) => user.blogs, { eager: false })
  user: UserEntity;

  @Column()
  userId: number;
}
