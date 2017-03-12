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
    positionBus.push({'lat':45.508999, 'lng': -73.571598});
    positionBus.push({'lat':45.503732, 'lng': -73.573572});
    positionBus.push({'lat':45.501731, 'lng': -73.581294});
    positionBus.push({'lat':45.497620, 'lng': -73.582477});
    positionBus.push({'lat':45.494210, 'lng': -73.577157});
    positionBus.push({'lat':45.493993, 'lng': -73.565396});
    positionBus.push({'lat':45.500254, 'lng': -73.559896});
    positionBus.push({'lat':45.505010, 'lng': -73.556646});
    positionBus.push({'lat':45.515078, 'lng': -73.558435});

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
    positionMetro.push({'lat':45.511223, 'lng': -73.565534});
    positionMetro.push({'lat':45.489604, 'lng': -73.585833});
    positionMetro.push({'lat':45.488633, 'lng': -73.583986});
    positionMetro.push({'lat':45.500977, 'lng': -73.571610});
    positionMetro.push({'lat':45.498798, 'lng': -73.567761});
    positionMetro.push({'lat':45.488559, 'lng': -73.579185});
    positionMetro.push({'lat':45.48776, 'lng': -73.577673});
    positionMetro.push({'lat':45.509911, 'lng': -73.555480});
    positionMetro.push({'lat':45.510919, 'lng': -73.558098});
    positionMetro.push({'lat':45.499702, 'lng': -73.567096});
    positionMetro.push({'lat':45.501976, 'lng': -73.571559});
    positionMetro.push({'lat':45.510530, 'lng': -73.564160});

    result.metro = new TransportCom();
    result.metro.positionsPol = positionMetro;

    result.metro.ligne = [];

    let metroStop = new Ligne();
    metroStop.stop = {lat: 45.501434, lng: -73.574176};
    metroStop.nom = 'Ligne Verte';

    result.metro.ligne.push(metroStop);

    metroStop = new Ligne();
    metroStop.stop = {lat: 45.49732, lng: -73.566899};
    metroStop.nom = 'Ligne Orange';

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
