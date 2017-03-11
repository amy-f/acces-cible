export class Result {
    bus: TransportCom;
    metro: TransportCom;
    velo: {
      start: {
        lat: string;
        lng: string;
      },
      distance: number;
    }
}

export class TransportCom {
  positionsPol : {
    lat: string;
    lng: string;
  }[];
  ligne: {
    stop: {
      lat: string;
      lng: string;
    },
    nom: string;
    distance: number;
  }[]
}

export class Velo {

}


