import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditstudentpagePageRoutingModule } from './editstudentpage-routing.module';

import { EditstudentpagePage } from './editstudentpage.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    EditstudentpagePageRoutingModule
  ],
  declarations: [EditstudentpagePage]
})
export class EditstudentpagePageModule {}
