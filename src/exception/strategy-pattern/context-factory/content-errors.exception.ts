import { ValidationRequestStrategy } from "../strategies/ValidationRequestStrategy.exception";
import { NotFoundExceptionStrategy } from "../strategies/NotFoundExceptionStrategy.exception";
import { IObjStrategy } from "src/exception/interfaces/IContentErrors.exception";

export const ContentErrors: IObjStrategy[]  = [
    {
        "name":  'NotFoundException',
        "exception": new NotFoundExceptionStrategy()
    },
    {
        "name":  'ValidationRequestError',
        "exception": new ValidationRequestStrategy()
    }
]