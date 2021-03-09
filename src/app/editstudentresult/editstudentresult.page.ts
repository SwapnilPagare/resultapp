import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editstudentresult',
  templateUrl: './editstudentresult.page.html',
  styleUrls: ['./editstudentresult.page.scss'],
})
export class EditstudentresultPage implements OnInit {
  sinfo; info;
  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute,private route: Router) {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.sinfo = res;
    });
  }

  editeng() {
    this.info = {
      id: this.sinfo.id,
      sub:"english"
}
    this.route.navigate(['/addmarksstudent'], {
      queryParams: this.info,
    });
  }

editmaths() {
this.info = {
      id: this.sinfo.id,
      sub:"maths"
}
    this.route.navigate(['/addmarksstudent'], {
      queryParams: this.info,
    });
  }

  editphy() {
    this.info = {
      id: this.sinfo.id,
      sub:"physics"
}
    this.route.navigate(['/addmarksstudent'], {
      queryParams: this.info,
    });
  }

  editchem() {
    this.info = {
      id: this.sinfo.id,
      sub:"chemistry"
}
    this.route.navigate(['/addmarksstudent'], {
      queryParams: this.info,
    });
  }

  editbio() {
this.info = {
      id: this.sinfo.id,
      sub:"biology"
}
    this.route.navigate(['/addmarksstudent'], {
      queryParams: this.info,
    });
  }

  ngOnInit() {
  }

}
