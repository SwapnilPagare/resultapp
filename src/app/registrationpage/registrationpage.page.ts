import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.page.html',
  styleUrls: ['./registrationpage.page.scss'],
})
export class RegistrationpagePage implements OnInit {

  fname; lname; id; roll; batch; phone; email;

  constructor(public formBuilder: FormBuilder, public http: HttpClient,private route: Router) { }

  submit() {

    const data = {
      fname: this.fname,
      lname: this.lname,
      id: this.id,
      roll: this.roll,
      batch: this.batch,
      phone: this.phone,
      email: this.email
    };

    console.log(data);

    this.http.post('http://localhost:8080/i', data).subscribe((response) => {
      console.log(response);
      if (JSON.stringify(response) == '{"status":"Already Exists"}') {
        console.log('STUDENT ID ALREADY EXISTS');
      }
      else if(JSON.stringify(response) == '{"status":"Proceed"}') {
        console.log("PROCEED");
        this.route.navigate(['/studentprofile'],{
      queryParams: data,});
      }
    });

  }

  ngOnInit() {
  }

}
