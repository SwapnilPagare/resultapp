import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-studentinfoedit',
  templateUrl: './studentinfoedit.page.html',
  styleUrls: ['./studentinfoedit.page.scss'],
})
export class StudentinfoeditPage implements OnInit {

  student;
  info;

  constructor(private alertController: AlertController, public http: HttpClient, public activatedRoute: ActivatedRoute,private route: Router) {
    this.activatedRoute.queryParams.subscribe((res) => {
this.student=res;
    });
  }
  async editfname() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Info',
      message:'Edit the first name :',
      inputs: [
        {
          name: 'fname',
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
            console.log(val.fname)
            this.info = {
        id: this.student.id,
        newfname:val.fname
      }
            this.http.post('http://localhost:8080/editfname', this.info).subscribe((response) => {});
          }
        }
      ]
    });

    await alert.present();
  }
  async editlname() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Info',
      message:'Edit the last name :',
      inputs: [
        {
          name: 'lname',
          type: 'text',
          placeholder: 'Enter Last Name'
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
            console.log(val.lname)
            this.info = {
        id: this.student.id,
        newlname:val.lname
      }
            this.http.post('http://localhost:8080/editlname', this.info).subscribe((response) => {});
          }
        }
      ]
    });

    await alert.present();
  }

  async editid() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Info',
      message:'Edit the student id :',
      inputs: [
        {
          name: 'id',
          type: 'text',
          placeholder: 'Enter Student Id'
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
            console.log(val.id)
            this.info = {
        id: this.student.id,
        newid:val.id
            }
            this.http.post('http://localhost:8080/editid', this.info).subscribe((response) => { });
            this.student.id = val.id;
            console.log(this.student.id + "new id");
          }
        }
      ]
    });

    await alert.present();
  }

  async editroll() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Info',
      message:'Edit the roll number :',
      inputs: [
        {
          name: 'roll',
          type: 'text',
          placeholder: 'Enter Roll No.'
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
            console.log(val.roll)
            this.info = {
        id: this.student.id,
        newroll:val.roll
      }
            this.http.post('http://localhost:8080/editroll', this.info).subscribe((response) => {});
          }
        }
      ]
    });

    await alert.present();
  }

  async editbatch() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs: [
        {
          name: 'batch',
          type: 'radio',
          label: 'Batch A',
          value: 'A'
        },
        {
          name: 'batch',
          type: 'radio',
          label: 'Batch B',
          value: 'B'
        },
        {
          name: 'batch',
          type: 'radio',
          label: 'Batch C',
          value: 'C'
        },
        {
          name: 'batch',
          type: 'radio',
          label: 'Batch D',
          value: 'D'
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
            console.log(val);
            this.info = {
        id: this.student.id,
        newbatch:val
      }
            this.http.post('http://localhost:8080/editbatch', this.info).subscribe((response) => {});
          }
        }
      ]
    });

    await alert.present();
  }

  async editphone() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Info',
      message:'Edit the phone number :',
      inputs: [
        {
          name: 'phone',
          type: 'text',
          placeholder: 'Enter Phone No.'
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
            console.log(val.phone)
            this.info = {
        id: this.student.id,
        newphone:val.phone
      }
            this.http.post('http://localhost:8080/editphone', this.info).subscribe((response) => {});
          }
        }
      ]
    });

    await alert.present();
  }
  async editemail() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Info',
      message:'Edit the email address :',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Enter Email Address'
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
            console.log(val.email)
            this.info = {
        id: this.student.id,
        newemail:val.email
      }
            this.http.post('http://localhost:8080/editemail', this.info).subscribe((response) => {});
          }
        }
      ]
    });

    await alert.present();
  }
  addmarksheet() {
    this.route.navigate(['/editstudentresult'], {
      queryParams: this.student,
    });
  }


  ngOnInit() {
  }

}
