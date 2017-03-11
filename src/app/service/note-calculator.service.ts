import { Injectable } from '@angular/core';

@Injectable()
export class NoteCalculatorService {

  coef = {
    bus: 1,
    metro: 1,
    marche: 1,
    velo: 1
  }

  constructor() { }

  public getCoeff() {
    return {

    }
  }

}
