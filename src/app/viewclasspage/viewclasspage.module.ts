import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewclasspagePageRoutingModule } from './viewclasspage-routing.module';

import { ViewclasspagePage } from './viewclasspage.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ViewclasspagePageRoutingModule
  ],
  declarations: [ViewclasspagePage]
})
export class ViewclasspagePageModule {}
