import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmarksstudentPageRoutingModule } from './addmarksstudent-routing.module';

import { AddmarksstudentPage } from './addmarksstudent.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AddmarksstudentPageRoutingModule
  ],
  declarations: [AddmarksstudentPage]
})
export class AddmarksstudentPageModule {}
