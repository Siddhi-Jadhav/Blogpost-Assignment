import { IsNotEmpty } from 'class-validator';
//this is data transfer object
//which is used to transfer data from one to another entity
export class CreateBlogDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  tags: string;
}
