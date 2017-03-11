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
    this.router.navigate(['/resultats']);
  }

}
