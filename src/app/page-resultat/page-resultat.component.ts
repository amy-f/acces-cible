import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';

import { Address } from '../models/address';
import { Ligne } from '../models/result';

import { AdressService } from '../util/adress.service';
import { AccesCibleService } from '../service/access-cible.service';
import { NoteCalculatorService } from '../service/note-calculator.service';

import { Result, Cote} from '../models/result';

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

  cote: Cote;

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

    this.noteService.getObservable().subscribe(cote => {
      this.cote = cote
      console.log("cote" + cote);
    }
    );

    this.getPaths();
  }

  getPaths() {
    let result = this.accesCibleService.getHttp(this.address.latitude, this.address.longitude).subscribe(
      res => this.compute(res)
    );
  }

  private compute(result) {

    this.computeDistance(result);

    this.noteService.setResult(result);

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

  computeDistance(result: Result) {

    for (let bus of result.bus.ligne) {
      bus.distance = this.distance(bus.stop.lat, bus.stop.lng);
    }
    for (let metro of result.metro.ligne) {
      metro.distance = this.distance(metro.stop.lat, metro.stop.lng);
    }
  }

  public convertRad(input){
    return (Math.PI * input)/180;
  }

  public distance(lat_b_degre, lon_b_degre): number{

    let R = 6378000 //Rayon de la terre en mètre

    let lat_a = this.convertRad(this.address.latitude);
    let lon_a = this.convertRad(this.address.longitude);
    let lat_b = this.convertRad(lat_b_degre);
    let lon_b = this.convertRad(lon_b_degre);

    let d = R * (Math.PI/2 - Math.asin( Math.sin(lat_b) * Math.sin(lat_a) + Math.cos(lon_b - lon_a) * Math.cos(lat_b) * Math.cos(lat_a)))
    return Math.round(d / (1.3888888 * 60));
  }
}
