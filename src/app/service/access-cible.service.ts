import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Result, TransportCom } from '../models/result';

@Injectable()
export class AccesCibleService {
  getMock(): Result{
    let result: Result = new Result();

    let positionBus: {lat: number, lng: number}[] = [];
    position.push({'lat':7.464655, 'lng': 42.5655});
    position.push({'lat':7.464789, 'lng': 42.5681});
    position.push({'lat':7.464962, 'lng': 42.5560});
    position.push({'lat':7.464800, 'lng': 42.5792});

    result.bus = new TransportCom();
    result.bus.positionsPol = positionBus;

    return result;
  }

}
