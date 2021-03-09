import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentresultPageRoutingModule } from './studentresult-routing.module';

import { StudentresultPage } from './studentresult.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    StudentresultPageRoutingModule
  ],
  declarations: [StudentresultPage]
})
export class StudentresultPageModule {}
