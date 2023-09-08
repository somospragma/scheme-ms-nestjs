import { HttpException } from "@nestjs/common";
import { IStrategy } from "../../interfaces/IStrategy.exception";
import { Response } from 'src/domain/response/response.request';

export class ContextException {
    /**
     * @type {IStrategy} The Context maintains a reference to one of the IStrategy
     * objects. The Context does not know the concrete class of a IStrategy. It
     * should work with all strategies via the IStrategy interface.
     */
    private IStrategy: IStrategy;

    /**
     * Usually, the Context accepts a IStrategy through the constructor, but also
     * provides a setter to change it at runtime.
     */

    
    /*constructor(IStrategy: IStrategy) {
        this.IStrategy = IStrategy;
    }*/

    constructor(){} 

    /**
     * Usually, the Context allows replacing a IStrategy object at runtime.
     */
    public setIStrategy(IStrategy: IStrategy) {
        this.IStrategy = IStrategy;
    }

    /**
     * The Context delegates some work to the IStrategy object instead of
     * implementing multiple versions of the algorithm on its own.
     */
    public doAction(exception: HttpException): Response<any> {
        // ...
        console.log('Context: data using the IStrategy (not sure how it\'ll do it)');
        const result = this.IStrategy.doProcessError(exception);
  
        return result;
        // ...
    }
}