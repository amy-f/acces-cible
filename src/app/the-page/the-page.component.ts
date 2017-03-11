import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";

import { AccesCibleService } from '../service/access-cible.service';
import { Router } from '@angular/router';

import { AdressService } from '../util/adress.service';

import { MapsAPILoader } from 'angular2-google-maps/core';

@Component({
  selector: 'app-the-page',
  templateUrl: './the-page.component.html',
  styleUrls: ['./the-page.component.css'],
  providers: [AccesCibleService]
})
export class ThePageComponent implements OnInit {

  @ViewChild("search")
  public searchElementRef: ElementRef;

  adresse: string;

  public searchControl: FormControl;

  constructor(
    private router: Router,
    private adressService: AdressService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {

    //create search FormControl
    this.searchControl = new FormControl();
  }

  onClickSearch() {
    this.adressService.adress = this.adresse;
    this.router.navigate(['/resultats']);
  }

}
