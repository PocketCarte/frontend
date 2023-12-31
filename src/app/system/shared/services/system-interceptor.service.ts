import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SystemInterceptorService {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");

    if (token) {
      request = request.clone({
        setHeaders: {
          "PocketCarte-System-Token": `${token}`,
        },
      });
    }
    return next.handle(request);
  }
}
