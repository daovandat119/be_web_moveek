import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
  } from '@nestjs/common';
  import { Observable, tap } from 'rxjs';
  
  @Injectable()
  export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const now = Date.now();
      const request = context.switchToHttp().getRequest();
      const method = request.method;
      const url = request.url;
  
      console.log(`[${method}] ${url} - Start`);

      return next.handle().pipe(
        tap(() => console.log(`[${method}] ${url} - End: ${Date.now() - now}ms`)),
      );
    }
  }
  