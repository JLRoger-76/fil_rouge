import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

@Component({
  selector: 'app-auth.interceptor',
  template: ` <p>auth.interceptor works!</p> `,
  styleUrls: [],
})
@Injectable()
export class AuthInterceptorComponent implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // const authToken = this.authService.getToken();
    const authToken =
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmcmFuY2lzIiwiZXhwIjoxNjk0NjIyNjM2LCJpYXQiOjE2OTQ2MTY2MzYsInNjb3BlIjoiUk9MRV9NQU5BR0VSIFJPTEVfVVNFUiJ9.gTkkEW01KzgUv4Cyq9hFYZ2iC7iERx_vgMbmPq08Eb-N9FVAXAKInBRhyLA_NVMuUpQlyI4ErfrXBH_0pgEYtQ';
    if (authToken && req.url.startsWith('http://localhost:8080/')) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + authToken,
        },
      });
    }
    return next.handle(req);
  }
}
