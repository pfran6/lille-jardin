import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllParcsPage } from './all-parcs.page';

const routes: Routes = [
  {
    path: '',
    component: AllParcsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllParcsPageRoutingModule {}
