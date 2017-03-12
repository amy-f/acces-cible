import { MapSettingsToggle } from '../page-resultat/page-resultat.component';
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

  @Input() mapSettingsToggle: MapSettingsToggle;

  constructor() { }

  ngOnInit() {
  }
}
