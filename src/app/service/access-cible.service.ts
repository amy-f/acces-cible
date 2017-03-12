import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Result, TransportCom, Velo, Ligne} from '../models/result';

@Injectable()
export class AccesCibleService {

  private heroesUrl = 'http://localhost:1337/superGoodUrl'

  constructor (private http: Http) {}

  getHttp(lat, lng): Observable<Result> {
    return this.http.get(this.heroesUrl+'/'+ lat + '/' + lng).map(res => res.json())
    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getMock(): Result{
    let result: Result = new Result();

    //BUS

    let positionBus: {lat: number, lng: number}[] = [];
    positionBus.push({'lat':45.48452, 'lng': -73.565586});
    positionBus.push({'lat':45.4920, 'lng': -73.585435});
    positionBus.push({'lat':45.47456, 'lng': -73.5554895});
    positionBus.push({'lat':45.4665, 'lng': 42.-73.565646});

    result.bus = new TransportCom();
    result.bus.ligne = [];

    let busStop = new Ligne();
    busStop.stop = {lat: 45.500217, lng: -73.569052};
    busStop.nom = 'ligne 150';

    result.bus.ligne.push(busStop);

    busStop = new Ligne();
    busStop.stop = {lat: 45.500217, lng: -73.569052};
    busStop.nom = 'ligne 178';

    result.bus.ligne.push(busStop);

    busStop = new Ligne();
    busStop.stop = {lat: 45.500217, lng: -73.569052};
    busStop.nom = 'ligne 350';

    result.bus.ligne.push(busStop);


    busStop = new Ligne();
    busStop.stop = {lat: 45.500217, lng: -73.569052};
    busStop.nom = 'ligne 355';
    result.bus.ligne.push(busStop);


    busStop = new Ligne();
    busStop.stop = {lat: 45.501195, lng: -73.571707};
    busStop.nom = 'ligne 358';

    result.bus.ligne.push(busStop);


    busStop = new Ligne();
    busStop.stop = {lat: 45.502300, lng: -73.573316};
    busStop.nom = 'ligne 420';

    result.bus.ligne.push(busStop);

    result.bus.positionsPol = positionBus;


    //METRO

    result.metro = new TransportCom();

    let positionMetro: {lat: number, lng: number}[] = [];
    positionMetro.push({'lat':45.49509, 'lng': -73.575676});
    positionMetro.push({'lat':45.4961, 'lng': -73.57564});
    positionMetro.push({'lat':45.4954, 'lng': -73.575664});
    positionMetro.push({'lat':45.4941, 'lng': -73.5756512});
    positionMetro.push({'lat':45.4941, 'lng': -73.575675});
    positionMetro.push({'lat':45.4931, 'lng': -73.575625});

    result.metro.positionsPol = positionMetro;

    result.metro = new TransportCom();
    result.metro.positionsPol = positionMetro;

    result.metro.ligne = [];

    let metroStop = new Ligne();
    metroStop.stop = {lat: 45.501434, lng: -73.574176};
    metroStop.nom = 'Ligne Verte';

    result.metro.ligne.push(metroStop);

    metroStop = new Ligne();
    metroStop.stop = {lat: 45.501562, lng: -73.563442};
    metroStop.nom = 'Ligne Orange';

    result.metro.ligne.push(metroStop);


    result.metro.ligne.push(metroStop);


    //VELO

    let veloList: Velo[] = [];

    let velo = new Velo();
    velo.start = {'lat': 45.502186, 'lng': -73.573356};
    veloList.push(velo);

    result.velo = veloList;

    return result;
  }
}
