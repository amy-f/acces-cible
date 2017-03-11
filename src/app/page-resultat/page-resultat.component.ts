import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { AdressService } from '../util/adress.service';


@Component({
  selector: 'app-page-resultat',
  templateUrl: './page-resultat.component.html',
  styleUrls: ['./page-resultat.component.css']
})
export class PageResultatComponent implements OnInit {

  constructor(
    private adressService: AdressService
  ) { }

  ngOnInit() {
    console.log(this.adressService.adress);
  }

}
