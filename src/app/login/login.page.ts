import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  fname; lname; id;

  constructor(public http: HttpClient,private route: Router) { }

  login() {
    console.log(this.fname + "," + this.lname + "," + this.id);
    const login_data = {
      fname: this.fname,
      lname: this.lname,
      id: this.id,
    };

    console.log(login_data);

    this.http.post('http://localhost:8080/li', login_data).subscribe((response) => {
      console.log(response);
      if (JSON.stringify(response) == '{"status":"Not Exists"}') {
        console.log('STUDENT ID NOT EXISTS');
      }
      else if(JSON.stringify(response) == '{"status":"Proceed"}') {
        console.log("PROCEED");
        this.route.navigate(['/studentprofile'],{
      queryParams: login_data,});
      }
    });


}

  ngOnInit() {
  }

}
