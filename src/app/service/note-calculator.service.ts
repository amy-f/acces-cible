import { Injectable } from '@angular/core';
import { Result, TransportCom, Velo } from '../models/result';


@Injectable()
export class NoteCalculatorService {

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

  constructor() { }

  public getCoeff() {
    return this.coeff;
  }

  public setCoeff(coeff) {
    this.coeff = coeff;
  }

  public computeNote(result: Result) {
    this.computeBus(result.bus);
    this.computeMetro(result.metro);
    this.computeBike(result.velo);
  }

  private computeBus(bus: TransportCom) {

  }

  private computeMetro(bus: TransportCom) {

  }

  private computeBike(bus: Velo[]) {

  }

}
