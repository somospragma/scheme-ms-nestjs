import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { ResponseUtils } from 'src/utils/ResponseUtils.util';
import { ConstMessages } from 'src/utils/ConstMessages.util';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);

    let hashMap = new Map<string, object>();

    errors.forEach( (value) => {
      hashMap.set(value.property,value.constraints);
    }); 

    const obj = Object.fromEntries(hashMap);

    let hashMapResp = new Map<string, object>();
    Object.entries(obj).forEach(([key, value]) => {
      console.log(value);
      let internalMsn = [];
      Object.entries(value).forEach(([keyInternal, valueInternal]) => {
        console.log(valueInternal);
        internalMsn.push(valueInternal);
      });

      hashMapResp.set(key, internalMsn);

    });
    
    const objResp = Object.fromEntries(hashMapResp);

    console.log(objResp);
    
    const responseBody = ResponseUtils.callResponse(ConstMessages.BAD_REQUEST,objResp,HttpStatus.BAD_REQUEST);

    if (errors.length > 0) {
      throw new BadRequestException(responseBody);
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}