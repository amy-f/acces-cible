import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { DialogModule } from 'primeng/primeng';


import { InputTextModule, ButtonModule, AutoCompleteModule, SliderModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { InputSwitchModule } from 'primeng/primeng';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { ThePageComponent } from './the-page/the-page.component';
import { PageResultatComponent } from './page-resultat/page-resultat.component';

import { AdressService } from './util/adress.service';
import { AutoCompleteAdressComponent } from './auto-complete-adress/auto-complete-adress.component';
import { AccesCibleService } from './service/access-cible.service';
import { NoteCalculatorService } from './service/note-calculator.service';
import { PageSettingsComponent } from './page-settings/page-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent,
    ThePageComponent,
    PageResultatComponent,
    AutoCompleteAdressComponent,
    PageSettingsComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/accueil', pathMatch: 'full' },
      { path: 'resultats', component: PageResultatComponent },
      { path: 'accueil', component: ThePageComponent }
    ]),
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      libraries: ["places"],
      apiKey: 'AIzaSyAmdLnTfE2KzdRjmsyYtXjNer11yUgU3Ig'
    }),
    InputTextModule,
    ButtonModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    InputSwitchModule,
    SliderModule
  ],
  providers: [
    AdressService,
    AccesCibleService,
    NoteCalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
