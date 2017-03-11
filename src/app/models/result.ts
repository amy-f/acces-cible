export class Result {
    bus: {
      positionsPol : {
        lat: string;
        long: string;
      }[],
      ligne: {
        stop: {
          lat: string;
          long: string;
        },
        distance: number;
      }[]
    };
    metro: {
      positionsPol : {
        lat: string;
        long: string;
      }[],
      ligne: {
        stop: {
          lat: string;
          long: string;
        },
        distance: number;
      }[]
    };
    velo: {
      start: {
        lat: string;
        long: string;
      },
      distance: number;
    }
}
