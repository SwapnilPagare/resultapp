import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditstudentresultPage } from './editstudentresult.page';

const routes: Routes = [
  {
    path: '',
    component: EditstudentresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditstudentresultPageRoutingModule {}
