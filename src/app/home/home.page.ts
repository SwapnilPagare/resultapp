import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router) {}

  view() {
        this.route.navigate(['/viewpage']);

  }
  edit() {
        this.route.navigate(['/editpage']);

  }

}
