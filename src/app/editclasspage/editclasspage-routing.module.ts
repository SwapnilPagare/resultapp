import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditclasspagePage } from './editclasspage.page';

const routes: Routes = [
  {
    path: '',
    component: EditclasspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditclasspagePageRoutingModule {}
