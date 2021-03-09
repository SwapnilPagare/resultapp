import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentinfoviewPageRoutingModule } from './studentinfoview-routing.module';

import { StudentinfoviewPage } from './studentinfoview.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    StudentinfoviewPageRoutingModule
  ],
  declarations: [StudentinfoviewPage]
})
export class StudentinfoviewPageModule {}
