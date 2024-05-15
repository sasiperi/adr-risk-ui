import { Component } from '@angular/core';
import { AdrDataInComponent } from './adr-data-in/adr-data-in.component';

@Component({
  selector: 'app-root',
  //templateUrl: './adr-data-in/adr-data-in.component.html',
  //styleUrls: ['./adr-data-in/adr-data-in.component.css']
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link btn-outline-info' routerLinkActive='active' [routerLink]="['/adrdata']">Home</a></li>          
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Adverse Drug Reaction - Risk Prediction';
  title = this.pageTitle;
}
