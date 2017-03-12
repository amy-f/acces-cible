export class Cote {
  coteGlobal: number;
  coteBus: number;
  coteVelo: number;
  coteMetro: number;
}

export class Result {
  bus: TransportCom;
  metro: TransportCom;
  velo: Velo[];
}

export class TransportCom {
  positionsPol: {
    lat: number;
    lng: number;
  }[];
  ligne: Ligne[];
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
