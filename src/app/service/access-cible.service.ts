import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Result, TransportCom, Velo, Ligne} from '../models/result';

@Injectable()
export class AccesCibleService {
  getMock(): Result{
    let result: Result = new Result();


    //BUS

    let positionBus: {lat: number, lng: number}[] = [];
    positionBus.push({'lat':8.02454, 'lng': 43.45645});
    positionBus.push({'lat':7.23545, 'lng': 42.04564});
    positionBus.push({'lat':7.1045, 'lng': 42.94545});
    positionBus.push({'lat':7.84345, 'lng': 42.78435});

    result.bus = new TransportCom();
    result.bus.ligne = [];

    let busStop = new Ligne();
    busStop.stop = {lat: 7.15654, lng: 42.5465};
    busStop.nom = 'ligne 45';

    result.bus.ligne.push(busStop);

    busStop = new Ligne();
    busStop.stop = {lat: 7.4165, lng: 42.1645};
    busStop.nom = 'ligne 36';

    result.bus.ligne.push(busStop);

    busStop = new Ligne();
    busStop.stop = {lat: 7.3256, lng: 42.3564};
    busStop.nom = 'ligne 12';

    result.bus.ligne.push(busStop);

    result.bus.positionsPol = positionBus;


    //METRO


    let positionMetro: {lat: number, lng: number}[] = [];
    positionMetro.push({'lat':7.7854, 'lng': -42.9754});
    positionMetro.push({'lat':7.9543, 'lng': -42.78243});
    positionMetro.push({'lat':8.024462, 'lng': -42.7543});
    positionMetro.push({'lat':9.4545, 'lng': -42.78645});
    positionMetro.push({'lat':7.5745, 'lng': -42.973543});
    positionMetro.push({'lat':8.546786, 'lng': -43.56775});

    result.metro.positionsPol = positionMetro;

    result.metro = new TransportCom();
    result.metro.positionsPol = positionMetro;

    let metroStop = new Ligne();
    metroStop.stop = {lat: 7.15645, lng: -42.854};
    metroStop.nom = 'Ligne bleu';

    result.bus.ligne.push(metroStop);

    metroStop = new Ligne();
    metroStop.stop = {lat: 7.4754, lng: -42.1025};
    metroStop.nom = 'ligne verte';

    result.bus.ligne.push(metroStop);

    metroStop = new Ligne();
    metroStop.stop = {lat: 7.344545, lng: -42.2545};
    metroStop.nom = 'ligne orange';

    result.metro.ligne.push(metroStop);




    //VELO

    let veloList: Velo[] = [];

    let velo = new Velo();
    velo.start = {'lat': 7.25645, 'lng': -42.16654};
    veloList.push(velo);
    velo = new Velo();
    velo.start = {'lat': 7.32655, 'lng': -42.18954};
    veloList.push(velo);
    velo = new Velo();
    velo.start = {'lat': 7.56255, 'lng': -42.14254};
    veloList.push(velo);

    result.velo = veloList;

    return result;
  }
}
