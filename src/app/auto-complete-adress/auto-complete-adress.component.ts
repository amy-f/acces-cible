import { Component, OnInit, ViewChild, ElementRef, NgZone, Output, EventEmitter, Directive } from '@angular/core';
import { FormControl, NgModel } from "@angular/forms";

import { MapsAPILoader } from 'angular2-google-maps/core';

import { Address } from '../models/address';

@Component({
  selector: 'app-auto-complete-adress',
  templateUrl: './auto-complete-adress.component.html',
  styleUrls: ['./auto-complete-adress.component.css']
})
export class AutoCompleteAdressComponent {

  public searchControl: FormControl;

  address: Address = new Address();

  // @ViewChild("search")
  // public searchElementRef: ElementRef;

  // constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}


  //   ngOnInit() {

  //   //create search FormControl
  //   this.searchControl = new FormControl();

  //   //load Places Autocomplete
  //   this.mapsAPILoader.load().then(() => {
  //     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
  //       types: ["address"]
  //     });
  //     autocomplete.addListener("place_changed", () => {
  //       this.ngZone.run(() => {
  //         //get the place result
  //         let place: google.maps.places.PlaceResult = autocomplete.getPlace();

  //         console.log(place);

  //         //verify result
  //         if (place.geometry === undefined || place.geometry === null) {
  //           return;
  //         }

  //         //set latitude, longitude and zoom
  //         this.address.latitude = place.geometry.location.lat();
  //         this.address.longitude = place.geometry.location.lng();
  //         this.address.name = this.searchControl.value;
  //       });
  //     });
  //   });
  // }



}
