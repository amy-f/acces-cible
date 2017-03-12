import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router } from '@angular/router';

import { AdressService } from '../util/adress.service';

import { Address } from '../models/address';


@Component({
  selector: 'app-the-page',
  templateUrl: './the-page.component.html',
  styleUrls: ['./the-page.component.css'],
})
export class ThePageComponent implements OnInit {

  adresse: any;

  adressString: string;

  constructor(
    private router: Router,
    private adressService: AdressService,
  ) { }

  ngOnInit() {
  }

  onTypeAddress(address: Address) {
    console.log(address);
  }

  onClickSearch() {
    //this.adressService.adress = this.adresse;
    //Récupérer l'adresse du composant
    let address: Address;
    address = new Address();

    address.name = "FarFarAway";
    address.latitude = 7.7256;
    address.longitude = 42.2564;

    this.adressService.address = address;
    this.router.navigate(['/resultats']);
  }

  onInputChange(event: any) {
    this.adressString = event.value;
    console.log(event.value);
  }

}
