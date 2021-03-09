import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditstudentresultPageRoutingModule } from './editstudentresult-routing.module';

import { EditstudentresultPage } from './editstudentresult.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    EditstudentresultPageRoutingModule
  ],
  declarations: [EditstudentresultPage]
})
export class EditstudentresultPageModule { }
