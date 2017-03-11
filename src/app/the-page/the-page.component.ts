import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-page',
  templateUrl: './the-page.component.html',
  styleUrls: ['./the-page.component.css']
})
export class ThePageComponent implements OnInit {

  adresse: string;

  constructor() { }

  ngOnInit() {

  }

  onClickSearch () {
    alert("this.adresse");
  }

}
