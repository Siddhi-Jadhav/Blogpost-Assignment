import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';
//this is data transfer object
//which is used to transfer data from one to another entity
export class UpdateBlogDTO {
  @Exclude()
  id: number;

  @IsNotEmpty()
  @IsOptional()
  title: string;

  @IsNotEmpty()
  @IsOptional()
  content: string;

  tags: string;
}
