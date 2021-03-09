import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassresultPageRoutingModule } from './classresult-routing.module';

import { ClassresultPage } from './classresult.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ClassresultPageRoutingModule
  ],
  declarations: [ClassresultPage]
})
export class ClassresultPageModule {}
