import { Component, OnInit, ViewChild, ElementRef, NgZone, Output, EventEmitter } from '@angular/core';
import { FormControl } from "@angular/forms";

import { MapsAPILoader } from 'angular2-google-maps/core';

import { Address } from '../models/address'

@Component({
  selector: 'app-auto-complete-adress',
  templateUrl: './auto-complete-adress.component.html',
  styleUrls: ['./auto-complete-adress.component.css']
})
export class AutoCompleteAdressComponent implements OnInit {

  //http://brianflove.com/2016/10/18/angular-2-google-maps-places-autocomplete/

  @Output()
  onTypeAddress = new EventEmitter<Address>();

  @ViewChild("search")
  public searchElementRef: ElementRef;
  public searchControl: FormControl;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
  }

  ngOnInit() {
    this.searchControl = new FormControl();
    this.loadPlaceAutocomplete();
    
  }

  private loadPlaceAutocomplete() {

    this.mapsAPILoader.load().then(() => {

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });

      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {

          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //this.coordonate.latitude = place.geometry.location.lat();
          //this.coordonate.longitude = place.geometry.location.lng();
        });
      });

    });
  }

}