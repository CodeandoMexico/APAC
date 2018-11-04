import { Injectable } from '@angular/core';
import {
  HttpRequest,  HttpHandler,  HttpEvent,  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = request.clone({ setHeaders: { Authorization: `Basic ${btoa('apac_root:$ecR3t1')}`} });

    return next.handle(authReq);
  }
}
