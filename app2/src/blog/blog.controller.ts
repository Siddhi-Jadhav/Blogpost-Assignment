import { UpdateBlogDTO } from './dto/update.blog.dto';
import { UserEntity } from '../user/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { SearchBlogDTO } from './dto/search.blog.dto';
import { BlogService } from './blog.service';
import { CreateBlogDTO } from './dto/create.blog.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GetUser } from 'src/user/get.user.decorator';

@Controller('blog')
@UseGuards(AuthGuard())
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createBlog(
    @GetUser() user: UserEntity,
    @Body() createBlogDto: CreateBlogDTO,
  ) {
    return this.blogService.createBlog(createBlogDto, user);
  }

  @Get()
  getBlogs(@GetUser() user: UserEntity, @Query() searchBlogDto: SearchBlogDTO) {
    console.log(searchBlogDto);
    return this.blogService.getBlogs(searchBlogDto, user);
  }

  @Put('/:id')
  updateBlog(
    @GetUser() user: UserEntity,
    @Body() updateBlogDto: UpdateBlogDTO,
    @Param('id') id: number,
  ) {
    return this.blogService.updateBlog(updateBlogDto, id);
  }

  @Delete('/:id')
  deleteBlog(@GetUser() user: UserEntity, @Param('id') id: number) {
    return this.blogService.deleteBlog(id);
  }
}
