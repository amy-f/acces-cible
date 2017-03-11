import { Injectable } from '@angular/core';

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

}
