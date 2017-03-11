import { Injectable } from '@angular/core';
import { Result, TransportCom, Velo, Cote } from '../models/result';
import {Observable, Subscriber} from 'rxjs/Rx';



@Injectable()
export class NoteCalculatorService {

  observable: Observable<Cote>;
  subscriber: Subscriber<Cote>;

  cote: Cote = new Cote();

  coeff = [
    {
      nom: "bus",
      coef: 50
    },
    {
      nom: "metro",
      coef: 60
    },
    {
      nom: "marche",
      coef: 30
    },
    {
      nom: "velo",
      coef: 42
    },
  ];

  totalCoeef: number = 182;

  constructor() {
    this.observable = new Observable(subscriber => {
      this.subscriber = subscriber;
    });

  }

  public getCoeff() {
    return this.coeff;
  }


  public setCoeff(coeff) {
    this.coeff = coeff;
    this.totalCoeef = 0;

    for(let co of coeff) {
      this.totalCoeef+= co.coef;
    }
  }

  //public

  public computeNote(result: Result): Cote {
    this.computeBus(result.bus);
    this.computeMetro(result.metro);
    this.computeBike(result.velo);

    this.cote.coteGlobal = (this.cote.coteVelo + this.cote.coteBus + this.cote.coteMetro) / this.totalCoeef * 100;

    console.log(this.cote);

    return this.cote;
  }

  private computeBus(bus: TransportCom) {
    let nbBusStop = bus.ligne.length;
     if(nbBusStop > 10) {
       nbBusStop = 10;
     }

     this.cote.coteBus = nbBusStop / 10 * this.coeff[0].coef;
  }

  private computeMetro(metro: TransportCom) {
    let nbMetroStop = metro.ligne.length;

    if( nbMetroStop > 3) {
      nbMetroStop = 3;
    }

    this.cote.coteMetro = nbMetroStop / 3 * this.coeff[1].coef;
  }

  private computeBike(velo: Velo[]) {
    let nbVelo = velo.length;

    if (nbVelo > 3) {
      nbVelo = 3;
    }

    this.cote.coteVelo = nbVelo / 3 * this.coeff[3].coef;
  }
}
