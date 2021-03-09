import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmarksclassPageRoutingModule } from './addmarksclass-routing.module';

import { AddmarksclassPage } from './addmarksclass.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AddmarksclassPageRoutingModule
  ],
  declarations: [AddmarksclassPage]
})
export class AddmarksclassPageModule {}
