import { HttpService } from '@nestjs/axios';
import { Injectable, HttpStatus, ForbiddenException } from '@nestjs/common';
import { map, catchError, lastValueFrom } from 'rxjs';
import { ConstMessages } from 'src/utils/ConstMessages.util';
import { ResponseUtils } from 'src/utils/ResponseUtils.util';

@Injectable()
export class DogClient {
  private readonly baseUrl = 'https://dog.ceo/api/';

  constructor(private readonly httpService: HttpService) { }

  public async getTerriers(): Promise<{ data: string[] }> {
    const request = this.httpService
      .get(this.baseUrl + 'breeds/list/all')
      .pipe(
        map((res) => res.data?.message),
        map((message) => message?.terrier),
      )
      .pipe(
        catchError(() => {
          const responseBody = ResponseUtils.callResponse(
            ConstMessages.BAD_REQUEST,
            { msn: 'Error called get terriers appi' },
            HttpStatus.FORBIDDEN,
          );
          throw new ForbiddenException(responseBody);
        }),
      );

    const fact: string[] = await lastValueFrom(request);

    return {
      data: fact,
    };
  }
}
