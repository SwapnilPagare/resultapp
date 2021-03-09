import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewclasspagePage } from './viewclasspage.page';

const routes: Routes = [
  {
    path: '',
    component: ViewclasspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewclasspagePageRoutingModule {}
