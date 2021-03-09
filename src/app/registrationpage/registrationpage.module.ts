import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationpagePageRoutingModule } from './registrationpage-routing.module';

import { RegistrationpagePage } from './registrationpage.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RegistrationpagePageRoutingModule
  ],
  declarations: [RegistrationpagePage]
})
export class RegistrationpagePageModule { }
