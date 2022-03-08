import { UserEntity } from 'src/user/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateBlogDTO } from './dto/create.blog.dto';
import { SearchBlogDTO } from './dto/search.blog.dto';
import { BlogEntity } from './blog.entity';
import { UpdateBlogDTO } from './dto/update.blog.dto';

@EntityRepository(BlogEntity)
export class BlogRepository extends Repository<BlogEntity> {
  async getBlogs(searchBlogDto: SearchBlogDTO, user: UserEntity) {
    const { search, id } = searchBlogDto;

    const query = this.createQueryBuilder('blog');
    if (search) {
      query.andWhere(
        `(blog.title LIKE :search) OR (blog.content LIKE :search)`,
        { search: `%${search}%` },
      );
    }

    /*if (id) {
      query.andWhere(`blog.id = id`, { id: `%${id}` });
    }*/
    query.andWhere(`blog.userId = :userId`, { userId: user.id });

    return await query.getMany();
  }

  async createBlog(createBlogDto: CreateBlogDTO, user: UserEntity) {
    const blog = new BlogEntity();
    blog.title = createBlogDto.title;
    blog.content = createBlogDto.content;
    blog.tags = createBlogDto.tags;
    // the logged in user will own the blog
    blog.user = user;
    // create a new row in the blog Table
    await blog.save();
    // delete user property
    delete blog.user;

    return blog;
  }

  /*async updateBlog(updateBlogDto: UpdateBlogDTO, user: UserEntity) {
    const blog = new BlogEntity();
    blog.id = updateBlogDto.id;
    blog.title = updateBlogDto.title;
    blog.content = updateBlogDto.content;
    blog.tags = updateBlogDto.tags;
    // the logged in user will own the blog
    blog.user = user;
    // create a new row in the blog Table
    await blog.save();
    // delete user property
    delete blog.user;

    return blog;
  }*/
}
