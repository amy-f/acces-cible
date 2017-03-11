import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { InputTextModule, ButtonModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { InputSwitchModule } from 'primeng/primeng';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { ThePageComponent } from './the-page/the-page.component';
import { PageResultatComponent } from './page-resultat/page-resultat.component';

import { AdressService } from './util/adress.service';
import { AccesCibleService } from './service/access-cible.service';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent,
    ThePageComponent,
    PageResultatComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/accueil', pathMatch: 'full' },
      { path: 'resultats', component: PageResultatComponent },
      { path: 'accueil', component: ThePageComponent },
    ]),
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmdLnTfE2KzdRjmsyYtXjNer11yUgU3Ig'
    }),
    InputTextModule,
    ButtonModule,
    InputSwitchModule
  ],
  providers: [
    AdressService,
    AccesCibleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
