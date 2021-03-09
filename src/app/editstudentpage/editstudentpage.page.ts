import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editstudentpage',
  templateUrl: './editstudentpage.page.html',
  styleUrls: ['./editstudentpage.page.scss'],
})
export class EditstudentpagePage implements OnInit {

  studentdata;

  constructor(public http: HttpClient, private route: Router) { }

  editinfo(info) {
    console.log(info + "yay");
    this.route.navigate(['/studentinfoedit'], {
      queryParams: info,
    });
  }

  delete(sinfo) {
    this.http.post('http://localhost:8080/delete', sinfo).subscribe((response) => { });
    this.http.get('http://localhost:8080/vs').subscribe((response) => {
      this.studentdata = response;
      console.log(this.studentdata[0]);
    });
  }

  doRefresh() {
  location.reload();
}


  ngOnInit() {
    this.http.get('http://localhost:8080/vs').subscribe((response) => {
      this.studentdata = response;
      console.log(this.studentdata[0]);
    });
  }

  ionViewWillEnter() {
    this.http.get('http://localhost:8080/vs').subscribe((response) => {
      this.studentdata = response;
      console.log(this.studentdata[0]);
    });
  }

}
