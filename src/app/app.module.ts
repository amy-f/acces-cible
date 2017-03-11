import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { ThePageComponent } from './the-page/the-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent,
    ThePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
