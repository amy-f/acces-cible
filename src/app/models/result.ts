export class Cote {
  coteGlobal: number;
  coteBus: number;
  coteVelo: number;
  coteMetro: number;

  constructor(){
    this.coteGlobal = 0;
    this.coteVelo = 0;
    this.coteBus = 0;
    this.coteMetro = 0;
  }
}

export class Result {
  bus: TransportCom;
  metro: TransportCom;
  velo: Velo[];

  constructor() {
    this.bus = new TransportCom();
    this.metro = new TransportCom();
    this.velo = [];
  }
}

export class TransportCom {
  positionsPol: {
    lat: number;
    lng: number;
  }[];
  ligne: Ligne[];

  constructor(){
    this.positionsPol = [];
    this.ligne = [];
  }
}

export class Velo {
  start: {
    lat: number;
    lng: number;
  };
  distance: number;
}

export class Ligne {
  stop: {
    lat: number;
    lng: number;
  };
  nom: string;
  distance: number;
}
