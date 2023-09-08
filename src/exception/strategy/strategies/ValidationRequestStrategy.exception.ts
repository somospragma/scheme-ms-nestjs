import { HttpException, HttpStatus } from "@nestjs/common";
import { IStrategy } from "../../interfaces/IStrategy.exception";
import { ResponseUtils } from "src/utils/ResponseUtils.util";
import { ConstMessages } from "src/utils/ConstMessages.util";
import { Response } from 'src/domain/response/response.request';

export class ValidationRequestStrategy implements IStrategy {
    public doProcessError(exception: HttpException): Response<string> {
        return (<Response<string>>exception.getResponse());
    }
}