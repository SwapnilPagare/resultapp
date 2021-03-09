import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewstudentpage',
  templateUrl: './viewstudentpage.page.html',
  styleUrls: ['./viewstudentpage.page.scss'],
})
export class ViewstudentpagePage implements OnInit {

studentdata;

  constructor(public http: HttpClient,private route: Router) { }

  showinfo(info) {
    console.log(info +"yay");
    this.route.navigate(['/studentinfoview'], {
      queryParams: info,
    });
  }

  doRefresh() {
    location.reload();
  }

  ngOnInit() {

  }

ionViewWillEnter(){
    this.http.get('http://localhost:8080/vs').subscribe((response) => {
      this.studentdata = response;
});
}

}
