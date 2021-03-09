import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewclasspage',
  templateUrl: './viewclasspage.page.html',
  styleUrls: ['./viewclasspage.page.scss'],
})
export class ViewclasspagePage implements OnInit {
classdata;

  constructor(public http: HttpClient, private route: Router){ }

  showinfo(info) {
    console.log(info +"yay");
    this.route.navigate(['/classresult'], {
      queryParams: info,
    });
  }

  doRefresh() {
    location.reload();
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.http.get('http://localhost:8080/vc').subscribe((response) => {
      this.classdata = response;
      console.log(this.classdata[0]);
    });
}

}
