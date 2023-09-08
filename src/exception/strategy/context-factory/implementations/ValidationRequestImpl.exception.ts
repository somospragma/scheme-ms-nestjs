import { AbstractFactory } from "src/exception/interfaces/IAbstractFactory.exception";
import { ValidationRequestStrategy } from "../../strategies/ValidationRequestStrategy.exception";

export class ValidationRequestImpl implements AbstractFactory {
    public createExceptionResponse(): Object {
        return new ValidationRequestStrategy();
    }
}    