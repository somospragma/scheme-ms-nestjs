import { Injectable,HttpStatus} from '@nestjs/common';
import { Response } from 'src/domain/response/response.request';
import { ResponseUtils } from 'src/utils/ResponseUtils.util';
import { DogClient } from 'src/rest-client/dog-client.rest-client';

@Injectable()
export class AppService {
 
  constructor(private readonly dogClient: DogClient) {}

  public getHello(): Response<string | null> {
    
    const responseBody = ResponseUtils.callResponse("LUG001","Hello Wold",HttpStatus.OK);

    return responseBody;
  }

  public getNullData(): Response<string | null> {
    
    const responseBody = ResponseUtils.callResponse("LUG001",null,HttpStatus.BAD_GATEWAY);

    return responseBody;
  }

  public async getTerriers(): Promise<Response<string[]>> {
    
    const getDogs: string[] = (await this.dogClient.getTerriers()).data;

    console.log(getDogs.length);

    const responseBody = ResponseUtils.callResponse("LUG001",getDogs,HttpStatus.OK);

    return responseBody;
  }
}
