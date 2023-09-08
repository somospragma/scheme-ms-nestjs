import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { GetMessagesStrategy } from './strategy-pattern/context-factory/getMessagesStrategy.exception';

@Catch(HttpException)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const getType = exception.name.toString();

    const makeErrorResponse = new GetMessagesStrategy();
    const responseMsn =  makeErrorResponse.run(getType,exception);

    response
      .status(status)
      .send(responseMsn);
  }
}