import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageAuthService } from 'src/app/shared/services/storage-auth.service';

@Injectable()
export class AuthorizatedInterceptor implements HttpInterceptor {

  constructor(
    private storage: StorageAuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({
      setHeaders: {
        Authorization: this.getToken()
      }
    })
    
    return next.handle(newRequest);
  }

  getToken(): string {
    const token = this.storage.getToken();
    return `JWT ${token}`;
  }
}
