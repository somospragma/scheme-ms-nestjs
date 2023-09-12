import { HttpException, HttpStatus } from "@nestjs/common";
import { IStrategy } from "../../interfaces/IStrategy.exception";
import { ResponseUtils } from "src/utils/ResponseUtils.util";
import { ConstMessages } from "src/utils/ConstMessages.util";
import { Response } from 'src/domain/response/response.request';

export class NotFoundExceptionStrategy implements IStrategy {
    public doProcessError(exception: HttpException): Response<string> {
        /* aqui va un logger */
        const getType = exception.name.toString();
        console.log(getType);
                
        return ResponseUtils.callResponse(ConstMessages.NOT_FOUND, exception.message, HttpStatus.NOT_FOUND);
    }
}