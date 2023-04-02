import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ClipboardModule, MatProgressBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
