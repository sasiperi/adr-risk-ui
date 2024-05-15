import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service';
import { ADR_DATA_ENDPOINT , OAUTH_ENABLE}                     from './variables';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  accessToken = '';
  errorMessage = '';
  readonly apiBasePath = ADR_DATA_ENDPOINT;
  
  constructor(private _authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(req.url.startsWith(this.apiBasePath.toString())  &&  OAUTH_ENABLE){
   

      this._authService.accessTokenCached$.subscribe({
        next: token => {    
          this.accessToken = token;    
          //this.accessToken = JSON.parse(token).access_token;;  
          /* const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
          const authRequest = req.clone({ headers });
          return next.handle(authRequest); */
        },      
        error: err => this.errorMessage = err + this.errorMessage
      })

      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
      const authRequest = req.clone({ headers });
      return next.handle(authRequest);
    }else
    {
      return next.handle(req);
    }
    
   
  }
}