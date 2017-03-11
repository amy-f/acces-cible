import {Component, OnInit, ViewChild, ElementRef, NgZone, Output, EventEmitter, Directive} from '@angular/core';
import {FormControl, NgModel} from "@angular/forms";

import { MapsAPILoader } from 'angular2-google-maps/core';

import { Address } from '../models/address'


@Directive({
  selector: '[Googleplace]',
  providers: [NgModel],
  host: {
    '(input)' : 'onInputChange()'
  }
})
export class GoogleplaceDirective {

  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  modelValue:any;
  autocomplete:any;
  private _el:HTMLInputElement;


  constructor(el: ElementRef,private model:NgModel) {
    this._el = el.nativeElement;
    this.modelValue = this.model;
    var input = this._el;

    this.autocomplete = new google.maps.places.Autocomplete(input, {});
    google.maps.event.addListener(this.autocomplete, 'place_changed', ()=> {
      var place = this.autocomplete.getPlace();
      this.invokeEvent(place);

    });
  }

  invokeEvent(place:Object) {
    this.setAddress.emit(place);
  }

  onInputChange() {
    console.log(this.model);
  }
}

@Component({
  selector: 'app-auto-complete-adress',
  templateUrl: './auto-complete-adress.component.html',
  styleUrls: ['./auto-complete-adress.component.css']
})
export class AutoCompleteAdressComponent {




  constructor(
  ) {
  }


}
