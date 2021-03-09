import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddmarksclassPage } from './addmarksclass.page';

const routes: Routes = [
  {
    path: '',
    component: AddmarksclassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmarksclassPageRoutingModule {}
