import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentinfoeditPageRoutingModule } from './studentinfoedit-routing.module';

import { StudentinfoeditPage } from './studentinfoedit.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    StudentinfoeditPageRoutingModule
  ],
  declarations: [StudentinfoeditPage]
})
export class StudentinfoeditPageModule {}
