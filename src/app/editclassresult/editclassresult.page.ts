import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editclassresult',
  templateUrl: './editclassresult.page.html',
  styleUrls: ['./editclassresult.page.scss'],
})
export class EditclassresultPage implements OnInit {

  cinfo; info;
  constructor(private alertController: AlertController,public http: HttpClient, public activatedRoute: ActivatedRoute,private route: Router) {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.cinfo = res;
    });
  }

  async editcname() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Info',
      message:'Edit the class name :',
      inputs: [
        {
          name: 'cname',
          type: 'text',
          placeholder: 'Enter First Name'
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
            this.info = {
              cname: this.cinfo.cname,
              newcname:val.cname
      }
            this.http.post('http://localhost:8080/editcname', this.info).subscribe((response) => {});
          }
        }
      ]
    });

    await alert.present();
  }

  editeng() {
    this.info = {
      cname: this.cinfo.cname,
      sub:"english"
}
    this.route.navigate(['/addmarksclass'], {
      queryParams: this.info,
    });
  }

editmaths() {
this.info = {
      cname: this.cinfo.cname,
      sub:"maths"
}
    this.route.navigate(['/addmarksclass'], {
      queryParams: this.info,
    });
  }

  editphy() {
    this.info = {
      cname: this.cinfo.cname,
      sub:"physics"
}
    this.route.navigate(['/addmarksclass'], {
      queryParams: this.info,
    });
  }

  editchem() {
    this.info = {
      cname: this.cinfo.cname,
      sub:"chemistry"
}
    this.route.navigate(['/addmarksclass'], {
      queryParams: this.info,
    });
  }

  editbio() {
this.info = {
      cname: this.cinfo.cname,
      sub:"biology"
}
    this.route.navigate(['/addmarksclass'], {
      queryParams: this.info,
    });
  }

  ngOnInit() {
  }

}
