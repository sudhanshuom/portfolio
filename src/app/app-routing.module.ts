import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BrowserModule } from '@angular/platform-browser';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AWSNotesForInterviewComponent } from './blogs/aws-notes-for-interview/aws-notes-for-interview.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/portfolio",
    pathMatch: 'full'
  },
  {
    path: "portfolio",
    component: PortfolioComponent
  },
  {
    path: "blogs",
    component: BlogsComponent
  },
  {
    path: "notes",
    component: BlogsComponent
  },
  {
    path: "notes/AWS-Notes-for-Interview",
    component: AWSNotesForInterviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
