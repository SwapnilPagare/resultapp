import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditclasspagePageRoutingModule } from './editclasspage-routing.module';

import { EditclasspagePage } from './editclasspage.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    EditclasspagePageRoutingModule
  ],
  declarations: [EditclasspagePage]
})
export class EditclasspagePageModule {}
