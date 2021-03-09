import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addmarksclass',
  templateUrl: './addmarksclass.page.html',
  styleUrls: ['./addmarksclass.page.scss'],
})
export class AddmarksclassPage implements OnInit {

  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.sinfo = res;
    });
  }
  info; sinfo; obtain; outof;
  addmarks() {
switch (this.sinfo.sub) {
  case 'english':
    console.log(this.sinfo.sub)
    this.editeng()
    location.reload();
    break;
  case 'maths':
    console.log(this.sinfo.sub)
    this.editmaths()
    location.reload();
    break;
  case 'physics':
    console.log(this.sinfo.sub)
    this.editphy();
    location.reload();
    break;
  case 'chemistry':
    console.log(this.sinfo.sub)
    this.editchem();
    location.reload();
    break;
  case 'biology':
    console.log(this.sinfo.sub)
    this.editbio();
    location.reload();
    break;
}
  }

  editeng() {
            this.info = {
        cname:this.sinfo.cname,
              emarks: this.obtain,
              eoutof:this.outof
      }
            this.http.post('http://localhost:8080/ceng', this.info).subscribe((response) => {});
  }

  editmaths(){
            this.info = {
        cname:this.sinfo.cname,
              mmarks: this.obtain,
              moutof:this.outof
      }
            this.http.post('http://localhost:8080/cmaths', this.info).subscribe((response) => {});
  }

  editphy(){
            this.info = {
        cname:this.sinfo.cname,
              pmarks: this.obtain,
              poutof:this.outof
      }
            this.http.post('http://localhost:8080/cphy', this.info).subscribe((response) => {});
  }

  editchem(){
            this.info = {
        cname:this.sinfo.cname,
              cmarks: this.obtain,
              coutof:this.outof
      }
            this.http.post('http://localhost:8080/cchem', this.info).subscribe((response) => {});
  }

  editbio(){
            this.info = {
        cname:this.sinfo.cname,
              bmarks: this.obtain,
              boutof:this.outof
      }
            this.http.post('http://localhost:8080/cbio', this.info).subscribe((response) => {});
  }


  ngOnInit() {
  }

}
