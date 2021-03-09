import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddmarksstudentPage } from './addmarksstudent.page';

const routes: Routes = [
  {
    path: '',
    component: AddmarksstudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmarksstudentPageRoutingModule {}
