import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { Http, Headers, RequestOptions, Response } from '@angular/http';

import {  Address } from '../models/address';


@Injectable()
export class AdressService {

  public address: Address = new Address();

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  // calls the Google Maps API to get the address
  getAddress(addressString: string): Observable<any> {
    let googleMapsURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(addressString)}&key=AIzaSyAmdLnTfE2KzdRjmsyYtXjNer11yUgU3Ig`;
    console.log(googleMapsURL);
    return this.http.get(googleMapsURL, this.options)
            .map((response: Response) => {
                console.log(response.json());

                let address = new Address();
                let result: any;
                let responseCopy = response.json();

                result = responseCopy.results[0];

                console.log(result.formatted_address);

                address.name = result.formatted_address;
                address.latitude = result.geometry.location.lat;
                address.longitude = result.geometry.location.lng;

                console.log(address);
                return address;
            })
            .catch((error: any) => this.handleError(error));
    }

    private handleError(error: any): Observable<any> {
        return Observable.throw(error.json().error || 'Server error');
    }

  }
