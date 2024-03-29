import { HttpException, HttpStatus } from "@nestjs/common";
import { IStrategy } from "../../interfaces/IStrategy.exception";
import { Response } from 'src/domain/response/response.request';

export class ValidationRequestStrategy implements IStrategy {
    public doProcessError(exception: HttpException): Response<string> {
        /* aqui va un logger */
        const getType = exception.name.toString();
        console.log(getType);
                
        return (<Response<string>>exception.getResponse());
    }
}