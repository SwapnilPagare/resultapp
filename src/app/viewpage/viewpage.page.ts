import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.page.html',
  styleUrls: ['./viewpage.page.scss'],
})
export class ViewpagePage implements OnInit {

  constructor(private route: Router) { }
  viewstudent() {
            this.route.navigate(['/viewstudentpage']);

  }
  viewclass() {
            this.route.navigate(['/viewclasspage']);

  }

  ngOnInit() {
  }

}
