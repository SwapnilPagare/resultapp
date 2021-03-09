import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewstudentpagePageRoutingModule } from './viewstudentpage-routing.module';

import { ViewstudentpagePage } from './viewstudentpage.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    ViewstudentpagePageRoutingModule
  ],
  declarations: [ViewstudentpagePage]
})
export class ViewstudentpagePageModule {}
