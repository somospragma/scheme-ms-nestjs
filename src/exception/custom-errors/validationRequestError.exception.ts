import { HttpException, HttpStatus } from "@nestjs/common";
import { Response } from 'src/domain/response/response.request';

export class ValidationRequestError extends HttpException {
    constructor(data: Response<{[k: string]: string[];}>) {
      super(data, HttpStatus.BAD_REQUEST);
    }
  }