import { Component, OnInit, Input } from '@angular/core';

import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';

import { Address } from '../models/address';
import { Ligne } from '../models/result';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
})
export class GoogleMapsComponent implements OnInit {

  @Input() address: Address;

  @Input() metroPaths: Array<LatLngLiteral> = Array<LatLngLiteral>();
  @Input() busPaths: Array<LatLngLiteral> = Array<LatLngLiteral>();
  @Input() trainPaths: Array<LatLngLiteral> = Array<LatLngLiteral>();
  @Input() walkPaths: Array<LatLngLiteral> = Array<LatLngLiteral>();
  @Input() bikePaths: Array<LatLngLiteral> = Array<LatLngLiteral>();

  @Input() bikeStartPoints: Array<LatLngLiteral> = Array<LatLngLiteral>();

  @Input() busLines: Ligne[] = [];
  @Input() metroLines: Ligne[] = [];

  toggleMetro: boolean;
  toggleBus: boolean;
  toggleTrain: boolean;
  toggleWalk: boolean;
  toggleBike: boolean;

  constructor() { }

  ngOnInit() {
    this.initToggle();
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

  initToggle() {
    this.toggleBus = true;
    this.toggleBike = true;
    this.toggleMetro = true;
    this.toggleTrain = true;
    this.toggleWalk = true;
  }

}
