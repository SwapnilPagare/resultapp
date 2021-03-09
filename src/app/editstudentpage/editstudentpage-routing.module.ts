import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditstudentpagePage } from './editstudentpage.page';

const routes: Routes = [
  {
    path: '',
    component: EditstudentpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditstudentpagePageRoutingModule {}
