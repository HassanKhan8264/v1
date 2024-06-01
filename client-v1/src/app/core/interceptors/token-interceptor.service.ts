import { AuthService } from "./../../shared/services/auth.service";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let tokenizeReq = req.clone({
      setHeaders: {
        authorization: `Bearer ${this.authService.getToken()}`,
      },
    });
    return next.handle(tokenizeReq); // Corrected method call
  }
}
