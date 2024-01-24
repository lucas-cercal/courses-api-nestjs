import { IsString, ArrayUnique } from 'class-validator';

export class CreateCourseDTO {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString({ each: true })
  @ArrayUnique()
  readonly tags: string[];
}
