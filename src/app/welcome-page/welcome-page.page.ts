import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit {

  constructor(private route: Router) { }

  teacherspage() {
    this.route.navigate(['/home']);
  }
  studentspage() {
    this.route.navigate(['/student-registration']);
  }

  ngOnInit() {
  }

}
