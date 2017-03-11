export class Result {
    bus: TransportCom;
    metro: TransportCom;
    velo: Velo[];
}

export class TransportCom {
  positionsPol : {
    lat: number;
    lng: number;
  }[];
  ligne: {
    stop: {
      lat: number;
      lng: number;
    },
    nom: string;
    distance: number;
  }[]
}

export class Velo {
  start: {
    lat: number;
    lng: number;
  };
  distance: number;
}


