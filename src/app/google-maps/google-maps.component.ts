import { Component, OnInit } from '@angular/core';

import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';

import { AccesCibleService } from '../service/access-cible.service';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
  providers: [AccesCibleService]
})
export class GoogleMapsComponent implements OnInit {

  lat: number = 7.464655;
  lng: number = -42.5655;
;

  paths: Array<LatLngLiteral>;

  metroPaths: Array<LatLngLiteral>;
  busPaths: Array<LatLngLiteral>;
  trainPaths: Array<LatLngLiteral>;
  walkPaths: Array<LatLngLiteral>;

  bikeStartPoints: Array<LatLngLiteral> = Array<LatLngLiteral>();
  busStops: Array<LatLngLiteral> = Array<LatLngLiteral>();

  toggleMetro: boolean;
  toggleBus: boolean;
  toggleTrain: boolean;
  toggleWalk: boolean;
  toggleBike: boolean;

  constructor(private accesCibleService: AccesCibleService) { }

  ngOnInit() {
    this.initToggle();
    this.initPaths();
  }

  onToggleBus(event) {
    this.toggleBus = event.checked;
  }

  onToggleWalk(event) {
    this.toggleWalk = event.checked;
  }

  onToggleTrain(event) {
    this.toggleTrain = event.checked;
  }

  onToggleMetro(event) {
    this.toggleMetro = event.checked;
  }

  onToggleBike(event) {
    this.toggleBike = event.checked;
  }

  findAddress() {

  }

  initToggle() {
    this.toggleBus = true;
    this.toggleBike = true;
    this.toggleMetro = true;
    this.toggleTrain = true;
    this.toggleWalk = true;
  }

  initPaths() {
        this.getPaths();
  }

  getPaths() {
    const result = this.accesCibleService.getMock();
    this.busPaths = result.bus.positionsPol as Array<LatLngLiteral>;
    this.metroPaths = result.metro.positionsPol as Array<LatLngLiteral>;

    console.log(this.busPaths);
    console.log(this.metroPaths);

    for (let bikePoint of result.velo) {
      console.log(bikePoint.start);
        this.bikeStartPoints.push(bikePoint.start);
      // todo: calculate distance at some point??
    }

    console.log(this.bikeStartPoints);
  }

}
