import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditclassresultPage } from './editclassresult.page';

const routes: Routes = [
  {
    path: '',
    component: EditclassresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditclassresultPageRoutingModule {}
