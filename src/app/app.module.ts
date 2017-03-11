import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { ThePageComponent } from './the-page/the-page.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { InputTextModule, ButtonModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent,
    ThePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmdLnTfE2KzdRjmsyYtXjNer11yUgU3Ig'
    }),
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
