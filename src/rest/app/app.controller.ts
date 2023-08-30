import { Controller, Get, Res} from '@nestjs/common';
import { AppService } from '../../business/app/app.service';
import { Response } from '../../domain/response/Response.request';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getHello(@Res({ passthrough: true }) res): Response<string> {
    const response = this.appService.getHello();

    res.status(response.getStatus());
    return response;
  }

  @Get("/nulldata")
  public getNullData(@Res({ passthrough: true }) res): Response<string> {

    const response = this.appService.getNullData();
    
    res.status(response.getStatus());
    return response;
  }
}
