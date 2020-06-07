import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParcsearchPage } from './parcsearch.page';

const routes: Routes = [
  {
    path: '',
    component: ParcsearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParcsearchPageRoutingModule {}
