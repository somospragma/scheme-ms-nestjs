import { IsString, IsInt, IsDefined } from 'class-validator';

export class CreateUserRequest {
  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsInt()
  age: number;

  @IsDefined()
  @IsString()
  company: string;
}
