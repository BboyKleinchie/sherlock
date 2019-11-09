import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ScoutMissionModule } from './scoutmissions/scoutmission.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot({
      prefix: '_sherlock.storage',
      separator: '.',
      caseSensitive: false
    }),
    ScoutMissionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
