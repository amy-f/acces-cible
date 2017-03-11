import { Component, OnInit } from '@angular/core';
import { AccesCibleService } from '../service/access-cible.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-the-page',
  templateUrl: './the-page.component.html',
  styleUrls: ['./the-page.component.css'],
  providers: [AccesCibleService]
})
export class ThePageComponent implements OnInit {

  adresse: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClickSearch() {
    this.router.navigate(['/resultats'], { queryParams: { adress: this.adresse } });
  }

}
