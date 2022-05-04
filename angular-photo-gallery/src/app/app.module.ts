import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
