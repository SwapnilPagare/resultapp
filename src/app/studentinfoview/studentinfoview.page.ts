import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-studentinfoview',
  templateUrl: './studentinfoview.page.html',
  styleUrls: ['./studentinfoview.page.scss'],
})
export class StudentinfoviewPage implements OnInit {
  info;
  constructor(public activatedRoute: ActivatedRoute,private route: Router) {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.info = res;
  });
  }

  showresult() {
    this.route.navigate(['/studentresult'], {
      queryParams: this.info,
    });
  }


  ngOnInit() {

  }

}
