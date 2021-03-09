import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-studentresult',
  templateUrl: './studentresult.page.html',
  styleUrls: ['./studentresult.page.scss'],
})
export class StudentresultPage implements OnInit {
  info; result;
  constructor(public activatedRoute: ActivatedRoute,public http: HttpClient,private route: Router) {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.info = res;
      console.log(this.info);
    });

  }

  print() {
    var dis = document.getElementById("btn").style.display;
    document.getElementById("btn").style.display = "none";
    window.print();
    document.getElementById("btn").style.display = dis;
}


  ngOnInit() {
this.http.post('http://localhost:8080/sresult', this.info).subscribe((response) => {
  this.result = response[0];
  console.log(this.result +" result")
    });
  }

}
