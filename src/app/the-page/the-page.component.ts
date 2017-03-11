import { Component, OnInit } from '@angular/core';
import { AccesCibleService } from '../service/access-cible.service';

@Component({
  selector: 'app-the-page',
  templateUrl: './the-page.component.html',
  styleUrls: ['./the-page.component.css'],
  providers: [AccesCibleService]
})
export class ThePageComponent implements OnInit {

  adresse: string;

  constructor() { }

  ngOnInit() {
  }

  onClickSearch () {
    console.log("Jordane");
    console.log(this.adresse);
  }

}
