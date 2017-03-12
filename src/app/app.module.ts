import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { InputTextModule, ButtonModule, AutoCompleteModule, DialogModule, AccordionModule,PanelModule } from 'primeng/primeng';
import { MenuItem, ChartModule } from 'primeng/primeng';
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
import { MapSettingsComponent } from './map-settings/map-settings.component';
import {SliderModule} from "primeng/components/slider/slider";
import { DisplayResultComponent } from './display-result/display-result.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent,
    ThePageComponent,
    PageResultatComponent,
    AutoCompleteAdressComponent,
    PageSettingsComponent,
    MapSettingsComponent,
<<<<<<< HEAD
    // GoogleplaceDirective,
    PageSettingsComponent
=======
    GoogleplaceDirective,
    PageSettingsComponent,
    DisplayResultComponent
>>>>>>> a8f078886002eace30ecdf6c9c9528c1348ae0b9
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
      apiKey: 'AIzaSyAmdLnTfE2KzdRjmsyYtXjNer11yUgU3Ig'
    }),
    InputTextModule,
    ButtonModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    InputSwitchModule,
    AccordionModule,
    SliderModule,
    PanelModule,
    ChartModule
  ],
  providers: [
    AdressService,
    AccesCibleService,
    NoteCalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
