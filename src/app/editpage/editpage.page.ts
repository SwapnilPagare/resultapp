import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.page.html',
  styleUrls: ['./editpage.page.scss'],
})
export class EditpagePage implements OnInit {

  constructor(private route: Router) { }
  editstudent() {
            this.route.navigate(['/editstudentpage']);

  }
  editclass() {
            this.route.navigate(['/editclasspage']);

  }

  ngOnInit() {
  }

}
