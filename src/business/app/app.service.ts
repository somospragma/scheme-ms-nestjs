import { Injectable,HttpStatus} from '@nestjs/common';
import { Response } from '../../domain/response/Response.request';
import { ResponseUtils } from '../../utils/ResponseUtils.util';

@Injectable()
export class AppService {
  public getHello(): Response<string> {
    
    const responseBody = ResponseUtils.callResponse("LUG001","Hello Wold",HttpStatus.OK);

    return responseBody;
  }

  public getNullData(): Response<string> {
    
    const responseBody = ResponseUtils.callResponse("LUG001",null,HttpStatus.BAD_GATEWAY);

    return responseBody;
  }
}
