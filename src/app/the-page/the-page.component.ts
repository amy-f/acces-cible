import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdressService } from '../util/adress.service';

@Component({
  selector: 'app-the-page',
  templateUrl: './the-page.component.html',
  styleUrls: ['./the-page.component.css']
})
export class ThePageComponent implements OnInit {

  adress: string;

  constructor(
    private router: Router,
    private adressService : AdressService
  ) { }

  ngOnInit() {
  }

  onClickSearch() {
    this.adressService.adress = this.adress;
    this.router.navigate(['/resultats']);
  }

}
