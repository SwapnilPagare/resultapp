import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addmarksstudent',
  templateUrl: './addmarksstudent.page.html',
  styleUrls: ['./addmarksstudent.page.scss'],
})
export class AddmarksstudentPage implements OnInit {

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
        id: this.sinfo.id,
              emarks: this.obtain,
              eoutof:this.outof
      }
            this.http.post('http://localhost:8080/eng', this.info).subscribe((response) => {});
  }

  editmaths(){
            this.info = {
        id: this.sinfo.id,
              mmarks: this.obtain,
              moutof:this.outof
      }
            this.http.post('http://localhost:8080/maths', this.info).subscribe((response) => {});
  }

  editphy(){
            this.info = {
        id: this.sinfo.id,
              pmarks: this.obtain,
              poutof:this.outof
      }
            this.http.post('http://localhost:8080/phy', this.info).subscribe((response) => {});
  }

  editchem(){
            this.info = {
        id: this.sinfo.id,
              cmarks: this.obtain,
              coutof:this.outof
      }
            this.http.post('http://localhost:8080/chem', this.info).subscribe((response) => {});
  }

  editbio(){
            this.info = {
        id: this.sinfo.id,
              bmarks: this.obtain,
              boutof:this.outof
      }
            this.http.post('http://localhost:8080/bio', this.info).subscribe((response) => {});
  }


  ngOnInit() {
  }

}
