import { Response } from 'express';
import { HttpStatusCode } from '@src/enums/statusCodeEnum';

export class ResponseBuilder {
  private res: Response;

  constructor(res: Response) {
    this.res = res;
  }

  public success<T>(data: T, message: string = 'Success'): Response {
    return this.res.status(HttpStatusCode.OK).json({
      message,
      data,
    });
  }

  public created<T>(
    data: T,
    message: string = 'Resource created successfully'
  ): Response {
    return this.res.status(HttpStatusCode.CREATED).json({
      message,
      data,
    });
  }

  public error<T>(
    statusCode: HttpStatusCode,
    message: string,
    data?: T
  ): Response {
    return this.res.status(statusCode).json({
      message,
      data,
    });
  }
}
