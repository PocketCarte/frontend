import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminInterceptorService {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const adminToken = localStorage.getItem("adminToken");

    if(adminToken){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${adminToken}`,
        },
      });
    }
    return next.handle(request);
  }
}
