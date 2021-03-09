import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.page.html',
  styleUrls: ['./studentprofile.page.scss'],
})
export class StudentprofilePage implements OnInit {

  fname; lname; id; roll; batch; info;

  constructor(public activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(JSON.stringify(res) + "bois");
      this.fname = JSON.stringify(res.fname);
      this.lname = JSON.stringify(res.lname);
      this.id = JSON.stringify(res.id);
      this.info = res;
    });
  }
  studentresult() {
    this.route.navigate(['/studentresult'], {
      queryParams: this.info,
    });
  }
  classresult() {
    this.route.navigate(['/viewclasspage']);
  }
  ngOnInit() {
  }

}
