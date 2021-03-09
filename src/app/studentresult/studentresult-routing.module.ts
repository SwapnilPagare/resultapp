import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentresultPage } from './studentresult.page';

const routes: Routes = [
  {
    path: '',
    component: StudentresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentresultPageRoutingModule {}
