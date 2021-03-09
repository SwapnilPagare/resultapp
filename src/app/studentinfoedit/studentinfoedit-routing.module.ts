import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentinfoeditPage } from './studentinfoedit.page';

const routes: Routes = [
  {
    path: '',
    component: StudentinfoeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentinfoeditPageRoutingModule {}
