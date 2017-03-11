import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';

import { Address } from '../models/address';
import { Ligne } from '../models/result';

import { AdressService } from '../util/adress.service';
import { AccesCibleService } from '../service/access-cible.service';
import { NoteCalculatorService } from '../service/note-calculator.service';

import { LatLngLiteral } from 'angular2-google-maps/core';

export class MapSettingsToggle {
  toggleMetro: boolean;
  toggleBus: boolean;
  toggleWalk: boolean;
  toggleBike: boolean;

  constructor() {
    this.toggleMetro = true;
    this.toggleBus = true;
    this.toggleBike = true;
    this.toggleWalk = true;
  }
}


@Component({
  selector: 'app-page-resultat',
  templateUrl: './page-resultat.component.html',
  styleUrls: ['./page-resultat.component.css']
})
export class PageResultatComponent implements OnInit {

  address: Address;

  metroPaths: Array<LatLngLiteral> = Array<LatLngLiteral>();
  busPaths: Array<LatLngLiteral> = Array<LatLngLiteral>();
  walkPaths: Array<LatLngLiteral> = Array<LatLngLiteral>();
  bikePaths: Array<LatLngLiteral> = Array<LatLngLiteral>();

  bikeStartPoints: Array<LatLngLiteral> = Array<LatLngLiteral>();

  busLines: Ligne[] = [];
  metroLines: Ligne[] = [];

  mapSettingsToggle: MapSettingsToggle = new MapSettingsToggle();

  constructor(
    private adressService: AdressService,
    private accesCibleService: AccesCibleService,
    private router: Router,
    private noteService: NoteCalculatorService
  ) { }

  ngOnInit() {
    console.log(this.adressService.address);

    this.address = this.adressService.address;

    this.getPaths();
  }

  getPaths() {
    const result = this.accesCibleService.getMock();

    this.noteService.computeNote(result);

    this.busPaths = result.bus.positionsPol as Array<LatLngLiteral>;
    this.metroPaths = result.metro.positionsPol as Array<LatLngLiteral>;

    if (result.velo) {
      for (let bikePoint of result.velo) {
        this.bikeStartPoints.push(bikePoint.start);
      }
    }

    if (result.bus.ligne) {
      for (let busLine of result.bus.ligne) {
        this.busLines.push(busLine);
      }
    }

    if (result.metro.ligne) {
      for (let metroLine of result.metro.ligne) {
        this.metroLines.push(metroLine);
      }
    }
  }

  onGoBack() {
    this.router.navigate(['/accueil']);
  }
}
