import { Controller, Get, Res, Post, Body, UseFilters } from '@nestjs/common';
import { AppService } from '../../business/app/app.service';
import { Response } from '../../domain/response/response.request';
import { CreateUserRequest } from 'src/domain/request/create-user.request';
import { ApiConsumes, ApiHeader, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('NestJs')
@ApiHeader({
  name: 'X-MyHeader',
  description: 'Custom header',
})
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  public getHello(
    @Res({ passthrough: true }) res: any): Response<string | null> {
    const response = this.appService.getHello();

    res.status(response.getStatus());
    return response;
  }

  @Get('/nulldata')
  public getNullData(@Res({ passthrough: true }) res: any): Response<string | null> {
    const response = this.appService.getNullData();

    res.status(response.getStatus());
    return response;
  }

  
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiConsumes('application/json')
  @ApiBody({
    description: 'Example validate request',
    type: CreateUserRequest,
  })
  @Post('/example-validation')
  public getExampleValidation(@Body() createUserReq: CreateUserRequest, @Res({ passthrough: true }) res: any): Response<string | null> {
    const response = this.appService.getNullData();

    res.status(response.getStatus());
    return response;
  }

  @Get('/called-api')
  public async calledApi(@Res({ passthrough: true }) res: any): Promise<Response<string[]>> {
    const response = await this.appService.calledApi();

    res.status(response.getStatus());
    return response;
  }
}
