import { HttpException } from "@nestjs/common";

export interface AbstractFactory {
    createExceptionResponse(exception: HttpException): Object;
}
