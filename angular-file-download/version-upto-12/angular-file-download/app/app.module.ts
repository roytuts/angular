import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpModule } from '@angular/http'; //Angular 7/8
import { HttpClientModule } from '@angular/common/http'; //Angular 11
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	//HttpModule //Angular 7/8
	HttpClientModule //Angular 11
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }