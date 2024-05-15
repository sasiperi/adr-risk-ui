import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdrDataInComponent } from './adr-data-in/adr-data-in.component';
import { AdrPredictionComponent } from './adr-prediction/adr-prediction.component';

const routes: Routes = [
  { path: 'adrdata', component: AdrDataInComponent },
  { path: 'adrprediction', component: AdrPredictionComponent },
  { path: '', redirectTo: 'adrdata', pathMatch: 'full' },
  { path: '**', redirectTo: 'adrdata', pathMatch: 'full' }
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
