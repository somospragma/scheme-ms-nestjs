import { IsString, IsInt, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserRequest {
  @IsDefined()
  @IsString()
  @ApiProperty()
  name: string;

  @IsDefined()
  @IsInt()
  @ApiProperty()
  age: number;

  @IsDefined()
  @IsString()
  @ApiProperty()
  company: string;
}
