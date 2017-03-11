import { Component, OnInit } from '@angular/core';

import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  lat: number = 51.673858;
  lng: number = 7.815982;

  paths: Array<LatLngLiteral>;

  busPolygon: SebmGoogleMapPolygon;

  metroPaths: Array<LatLngLiteral>;
  busPaths: Array<LatLngLiteral>;
  trainPaths: Array<LatLngLiteral>;
  walkPaths: Array<LatLngLiteral>;
  bikePaths: Array<LatLngLiteral>;

  busFillColor: 'rgb(255,0,0)';
  walkFillColor: '#000000';

  constructor() { }

  ngOnInit() {

    this.busPaths = [
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

  }

  initPathColors() {

  }

}
