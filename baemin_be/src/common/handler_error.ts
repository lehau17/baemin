import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    console.log(exception);
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      message: status == 500 ? "Server loi roi may dua oi" : exception.message,
    });
  }
}
