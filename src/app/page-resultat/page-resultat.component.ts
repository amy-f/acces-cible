import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

import { Address } from '../models/address';
import { Ligne } from '../models/result';

import { AdressService } from '../util/adress.service';
import { AccesCibleService } from '../service/access-cible.service';

import { LatLngLiteral } from 'angular2-google-maps/core';


@Component({
  selector: 'app-page-resultat',
  templateUrl: './page-resultat.component.html',
  styleUrls: ['./page-resultat.component.css']
})
export class PageResultatComponent implements OnInit {

  address: Address;

  metroPaths: Array<LatLngLiteral> = Array<LatLngLiteral>();
  busPaths: Array<LatLngLiteral> = Array<LatLngLiteral>();
  trainPaths: Array<LatLngLiteral> = Array<LatLngLiteral>();
  walkPaths: Array<LatLngLiteral> = Array<LatLngLiteral>();
  bikePaths: Array<LatLngLiteral> = Array<LatLngLiteral>();

  bikeStartPoints: Array<LatLngLiteral> = Array<LatLngLiteral>();

  busLines: Ligne[] = [];
  metroLines: Ligne[] = [];

  constructor(
    private adressService: AdressService,
    private accesCibleService: AccesCibleService
  ) { }

  ngOnInit() {
    console.log(this.adressService.address);

    this.address = this.adressService.address;

    this.getPaths();
  }

  getPaths() {
    const result = this.accesCibleService.getMock();

    this.busPaths = result.bus.positionsPol as Array<LatLngLiteral>;
    this.metroPaths = result.metro.positionsPol as Array<LatLngLiteral>;

    for (let bikePoint of result.velo) {
        this.bikeStartPoints.push(bikePoint.start);
    }

    for (let busLine of result.bus.ligne) {
      this.busLines.push(busLine);
    }

    for (let metroLine of result.metro.ligne) {
      this.metroLines.push(metroLine);
    }
  }

}
