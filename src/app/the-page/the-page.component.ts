import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router } from '@angular/router';

import { AdressService } from '../util/adress.service';

import { Address } from '../models/address';

import {Message} from 'primeng/primeng';


@Component({
  selector: 'app-the-page',
  templateUrl: './the-page.component.html',
  styleUrls: ['./the-page.component.css'],
})
export class ThePageComponent implements OnInit {

  adresse: any;

  adressString: string;

  msgs: Message[] = [];

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

    if (this.adressString === undefined) {
      this.msgs.push({severity:'error', summary:'Adresse invalide', detail:'Veuillez saisir une adresse'});
    } else {
       let resultingAddress: any;
      this.adressService.getAddress(this.adressString).subscribe(response => {
        console.log(response);
        resultingAddress = response;
        this.adressService.address = resultingAddress;
        this.router.navigate(['/resultats']);
      });
    }
  }

  onInputChange(event: any) {
    this.adressString = event.value;
    console.log(event.value);
  }

}
