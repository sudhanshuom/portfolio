import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BrowserModule } from '@angular/platform-browser';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AWSNotesComponent } from './blogs/aws-notes/aws-notes.component';

const routes: Routes = [
  {
    path: "",
    component: PortfolioComponent
  },
  {
    path: "blogs",
    component: BlogsComponent
  },
  {
    path: "articles",
    component: BlogsComponent
  },
  {
    path: "articles/AWS-Notes",
    component: AWSNotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
