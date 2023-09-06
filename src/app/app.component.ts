import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPortfolio';
  public isCollapsed = true;

  constructor(private router: Router) {}

  navigateToUrl(type:any){
    this.router.navigate(["articles"])
  }
}


