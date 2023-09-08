import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { ContextException } from './strategy/context/contextException.exception';
import { Request, Response } from 'express';
import { GetMessagesStrategy } from './strategy/context-factory/getMessagesStrategy.exception';

@Catch(HttpException)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const getType = exception.name.toString();
    console.log(exception);
    console.log(getType);


    const makeErrorResponse = new GetMessagesStrategy();
    const responseMsn =  makeErrorResponse.run(getType,exception);

    response
      .status(status)
      .send(responseMsn);
  }
}