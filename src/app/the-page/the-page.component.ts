import { Component, OnInit } from '@angular/core';
import { AccesCibleService } from '../service/access-cible.service';
import { Router } from '@angular/router';

import { AdressService } from '../util/adress.service';


@Component({
  selector: 'app-the-page',
  templateUrl: './the-page.component.html',
  styleUrls: ['./the-page.component.css'],
  providers: [AccesCibleService]
})
export class ThePageComponent implements OnInit {

  adresse: string;

  constructor(
    private router: Router,
    private adressService: AdressService
  ) { }

  ngOnInit() {
  }

  onClickSearch() {
    this.adressService.adress = this.adresse;
    this.router.navigate(['/resultats']);
  }

}
