import { Controller, Get, Res, Post, Body} from '@nestjs/common';
import { AppService } from '../../business/app/app.service';
import { Response } from '../../domain/response/response.request';
import { CreateUserRequest } from 'src/domain/request/create-user.request';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getHello(@Res({ passthrough: true }) res: any): Response<string | null > {
    const response = this.appService.getHello();

    res.status(response.getStatus());
    return response;
  }

  @Get("/nulldata")
  public getNullData(@Res({ passthrough: true }) res: any): Response<string | null > {

    const response = this.appService.getNullData();
    
    res.status(response.getStatus());
    return response;
  }

  @Post("/example-validation")
  public getExampleValidation(@Body(new ValidationPipe()) createUserRequest: CreateUserRequest, @Res({ passthrough: true }) res: any): Response<string | null > {

    const response = this.appService.getNullData();
    
    res.status(response.getStatus());
    return response;
  }

  @Get("/get-terriers")
  public async getTerriers(@Res({ passthrough: true }) res: any): Promise<Response<string[]>>  {

    const response = await this.appService.getTerriers();
    
    res.status(response.getStatus());
    return response;
  }

}
