import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ClipboardModule,
    MatProgressBarModule,
    NgbCollapseModule,
    NgbModule,
    MatTooltipModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
