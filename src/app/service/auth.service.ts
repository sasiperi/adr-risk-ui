import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { Prediction } from '../model/models';
import { ACCESS_TOKEN_ENDPOINT, CLIENT_ID, CLIENT_SECRET, SCOPES, GRANT_TYPE }  from './variables';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly accessTokenEndPoint = ACCESS_TOKEN_ENDPOINT;
  readonly clientId = CLIENT_ID;
  readonly clientSecret = CLIENT_SECRET;
  readonly grantType = GRANT_TYPE;
  readonly scopes = SCOPES;
  public defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient) { 


  }
 /*  
  body:  `{
    'client_id': ${this.clientId},
    'client_secret': ${this.clientSecret},
    'scopes': ${this.scopes},
    'grant_type': ${this.grantType}
    
  }`,   */  

  accessTokenCached$:Observable<any> = this.getAccessToken()
    .pipe(
        tap(data => console.log('conditions:', JSON.stringify(data))),
        shareReplay(4),
        catchError(this.handleError)
  );


 public getAccessToken(): Observable<any>{

    let headers = this.defaultHeaders;

    
    
    //const body = { client_id: this.clientId, client_secret: this.clientSecret, scopes: this.scopes, grant_type: this.grantType};
    const body = { client_id: this.clientId, client_secret: this.clientSecret, grant_type: this.grantType};

    return this.httpClient.post<any>(this.accessTokenEndPoint,
            {
              body: body,            
              //withCredentials: true,
              headers: headers,           
              reportProgress: true
            }
          );

    
  }
 


  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
