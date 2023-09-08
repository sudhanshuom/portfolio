import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BlogsComponent } from './blogs/blogs.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AWSNotesForInterviewComponent } from './blogs/aws-notes-for-interview/aws-notes-for-interview.component';

@NgModule({
  declarations: [AppComponent, BlogsComponent, PortfolioComponent, AWSNotesForInterviewComponent],
  imports: [
    BrowserModule,
    ClipboardModule,
    MatProgressBarModule,
    NgbCollapseModule,
    NgbModule,
    MatTooltipModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
