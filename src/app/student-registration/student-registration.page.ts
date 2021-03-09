import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.page.html',
  styleUrls: ['./student-registration.page.scss'],
})
export class StudentRegistrationPage implements OnInit {

  constructor(private route: Router) { }

  registerpage() {
    this.route.navigate(['/registrationpage']);
  }
  loginpage() {
    this.route.navigate(['/login']);
  }

  ngOnInit() {
  }

}
