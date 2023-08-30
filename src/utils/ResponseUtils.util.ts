import { HttpStatus } from '@nestjs/common';
import { Response } from '../domain/response/Response.request';

export class ResponseUtils {
	constructor() {
	}

	public static callResponse<T>(msg: string, data: T | null | undefined, status: number) {

        const response: Response<typeof data> = new Response<typeof data>();
		response.setData(data);
		response.setMessage(msg);
		response.setStatus(status);
		return response;
	}
}
