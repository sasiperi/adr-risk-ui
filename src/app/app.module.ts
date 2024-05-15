import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdrDataInComponent } from './adr-data-in/adr-data-in.component';
import { AdrPredictionComponent } from './adr-prediction/adr-prediction.component';
import { ChartsModule } from 'ng2-charts';
import { AuthInterceptorService } from './service/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,    
    AdrDataInComponent, 
    AdrPredictionComponent   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
