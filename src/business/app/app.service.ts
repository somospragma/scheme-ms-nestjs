import { Injectable,HttpStatus} from '@nestjs/common';
import { Response } from 'src/domain/response/response.request';
import { ResponseUtils } from 'src/utils/ResponseUtils.util';

@Injectable()
export class AppService {
  public getHello(): Response<string | null> {
    
    const responseBody = ResponseUtils.callResponse("LUG001","Hello Wold",HttpStatus.OK);

    return responseBody;
  }

  public getNullData(): Response<string | null> {
    
    const responseBody = ResponseUtils.callResponse("LUG001",null,HttpStatus.BAD_GATEWAY);

    return responseBody;
  }
}
