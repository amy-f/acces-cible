import { Component, OnInit, Input } from '@angular/core';

import { Result } from '../models/result';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {

  @Input()
  resultats: Result;

  constructor() { }

  ngOnInit() {

  }

}
