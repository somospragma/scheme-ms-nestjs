import { HttpException } from "@nestjs/common";
import { Response } from 'src/domain/response/response.request';

export interface IStrategy {
    doProcessError(exception: HttpException): Response<any>;
}