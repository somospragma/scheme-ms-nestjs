import { HttpException } from "@nestjs/common";
import { ContextException } from "../context/contextException.exception";
import { IStrategy } from "src/exception/interfaces/IStrategy.exception";
import { Response } from 'src/domain/response/response.request';
import { DefaultExeptionStrategy } from "../strategies/DefaultExeptionStrategy.exception";
import { ContentErrors } from "./content-errors.exception";
import { object } from "joi";

/* context factory */
export class GetMessagesStrategy {
    private readonly defaultExeption   = new DefaultExeptionStrategy();

    constructor() { }

    public getType(type: string): IStrategy {

        let resultData = ContentErrors.filter((obj) => 
            obj.name === type
        ).map(filteredObj => filteredObj.exception);

        return resultData.length > 0  ? resultData[0] : this.defaultExeption;
    }

    public run(type: string, exception: HttpException): Response<any> {
        const context = new ContextException();
        context.setIStrategy(this.getType(type));
        return context.doAction(exception);
    }
}