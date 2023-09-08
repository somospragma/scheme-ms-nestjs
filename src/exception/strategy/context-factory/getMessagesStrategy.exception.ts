import { HttpException } from "@nestjs/common";
import { ContextException } from "../context/contextException.exception";
import { IStrategy } from "src/exception/interfaces/IStrategy.exception";
import { Response } from 'src/domain/response/response.request';
import { ValidationRequestStrategy } from "../strategies/ValidationRequestStrategy.exception";
import { NotFoundExceptionStrategy } from "../strategies/NotFoundExceptionStrategy.exception";
import { DefaultExeptionStrategy } from "../strategies/DefaultExeptionStrategy.exception";

/* context factory */
export class GetMessagesStrategy {
    private readonly notFoundExpetion  = new NotFoundExceptionStrategy();
    private readonly validationRequest = new ValidationRequestStrategy();
    private readonly defaultExeption   = new DefaultExeptionStrategy();

    constructor() { }

    public getType(type: string): IStrategy {

        let resultData;

        switch (type) {
            
            case 'NotFoundException':
                resultData = this.notFoundExpetion;
                break;
            case 'ValidationRequestError':
                resultData = this.validationRequest;
                break;
            default:
                resultData = this.defaultExeption;
                break;
        }

        return resultData;
    }

    public run(type: string, exception: HttpException): Response<string> {
        const context = new ContextException();
        context.setIStrategy(this.getType(type));
        return context.doAction(exception);
    }
}