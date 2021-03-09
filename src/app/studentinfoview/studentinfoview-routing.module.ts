import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentinfoviewPage } from './studentinfoview.page';

const routes: Routes = [
  {
    path: '',
    component: StudentinfoviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentinfoviewPageRoutingModule {}
