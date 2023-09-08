import { AbstractFactory } from "src/exception/interfaces/IAbstractFactory.exception";
import { NotFoundExceptionStrategy } from "src/exception/strategy/strategies/NotFoundExceptionStrategy.exception";

export class NotFoundExceptionImpl implements AbstractFactory {
    public createExceptionResponse(): Object {
        return new NotFoundExceptionStrategy();
    }
}    