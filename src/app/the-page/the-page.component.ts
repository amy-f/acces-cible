import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import

@Component({
  selector: 'app-the-page',
  templateUrl: './the-page.component.html',
  styleUrls: ['./the-page.component.css']
})
export class ThePageComponent implements OnInit {

  adress: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClickSearch() {
    this.router.navigate(['/resultats'], { queryParams: { adress: this.adress } });
  }

}
