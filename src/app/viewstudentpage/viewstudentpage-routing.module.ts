import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewstudentpagePage } from './viewstudentpage.page';

const routes: Routes = [
  {
    path: '',
    component: ViewstudentpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewstudentpagePageRoutingModule {}
