import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editclasspage',
  templateUrl: './editclasspage.page.html',
  styleUrls: ['./editclasspage.page.scss'],
})
export class EditclasspagePage implements OnInit {

  classdata;

  constructor(public http: HttpClient, private route: Router,private alertController: AlertController) { }

doRefresh() {
    location.reload();
  }

  async addclass() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Insert Class',
      message:'Create New Class :',
      inputs: [
        {
          name: 'cname',
          type: 'text',
          placeholder: 'Enter Class Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (val) => {
            console.log(val.cname)

            this.http.post('http://localhost:8080/ic', val).subscribe((response) => { });
            this.http.get('http://localhost:8080/vc').subscribe((response) => {
      this.classdata = response;
      console.log(this.classdata[0]);
    });
          }
        }
      ]
    });

    await alert.present();
  }

  editinfo(info) {
    console.log(info + "yay");
    this.route.navigate(['/editclassresult'], {
      queryParams: info,
    });
  }

  delete(data) {
    this.http.post('http://localhost:8080/cdelete', data).subscribe((response) => { });
    this.http.get('http://localhost:8080/vc').subscribe((response) => {
      this.classdata = response;
      console.log(this.classdata[0]);
    });
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
