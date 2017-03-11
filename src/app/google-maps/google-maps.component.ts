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

  lat: number = 51.673858;
  lng: number = 7.815982;

  paths: Array<LatLngLiteral>;

  metroPaths: Array<LatLngLiteral>;
  busPaths: Array<LatLngLiteral>;
  trainPaths: Array<LatLngLiteral>;
  walkPaths: Array<LatLngLiteral>;
  bikePaths: Array<LatLngLiteral>;

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
        this.getBusPaths();

    this.metroPaths = [
      { lat: 51.373858,  lng: 7.815982 },
      { lat: 51.673858,  lng: 7.215982 },
      { lat: 51.673858,  lng: 8.011111 },
      { lat: 51.373858,  lng: 7.215982 },
      { lat: 51.373858,  lng: 7.895982 }
    ];

    this.bikePaths = [
      { lat: 51.373858,  lng: 7.815982 },
      { lat: 51.673858,  lng: 7.215982 },
      { lat: 51.673858,  lng: 8.011111 },
      { lat: 51.373858,  lng: 7.215982 },
      { lat: 51.373858,  lng: 7.895982 }
    ];

    this.walkPaths = [
      { lat: 51.373858,  lng: 7.815982 },
      { lat: 51.673858,  lng: 7.215982 },
      { lat: 51.673858,  lng: 8.011111 },
      { lat: 51.373858,  lng: 7.215982 },
      { lat: 51.373858,  lng: 7.895982 }
    ];

    this.trainPaths = [
      { lat: 51.373858,  lng: 7.815982 },
      { lat: 51.673858,  lng: 7.215982 },
      { lat: 51.673858,  lng: 8.011111 },
      { lat: 51.373858,  lng: 7.215982 },
      { lat: 51.373858,  lng: 7.895982 }
    ];
  }

  getBusPaths() {
    let result = this.accesCibleService.getMock();

  }

}
