import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-page-resultat',
  templateUrl: './page-resultat.component.html',
  styleUrls: ['./page-resultat.component.css']
})
export class PageResultatComponent implements OnInit {

  constructor(
    private route: Route
  ) { }

  ngOnInit() {
    let sub = this.route.queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.page = +params['page'] || 0;
      });
  }

}
