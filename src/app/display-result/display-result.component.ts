import { Component, OnInit, Input } from '@angular/core';

import { Cote } from '../models/result';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {

  @Input()
  cote: Cote;

  data: any;

  options: any;

  constructor() {

  }

  ngOnInit() {
      this.cote;
    this.data = {
      labels: ['Bus', 'Velo', 'Metro'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: [
            "rgba(255, 97, 131, 0.6)",
            "rgba(74, 191, 191, 0.6)",
            "rgba(255, 207, 87, 0.6)"
            //"#E7E9ED",
            //"#36A2EB"
          ],
          data: [this.cote.coteBus, this.cote.coteVelo, this.cote.coteMetro],
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  max: 100,
                  min: 0,
                  stepSize: 10
                }
              }]
            }
          }
        }
      ]
    };

    this.options = {
      title: {
        display: false,
      },
      legend: {
        position: 'bottom'
      },
      scale: {
        reverse: false,
        ticks: {
          beginAtZero: true
        }
      }
    };
  }

}
