import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllParcsPageRoutingModule } from './all-parcs-routing.module';

import { AllParcsPage } from './all-parcs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllParcsPageRoutingModule
  ],
  declarations: [AllParcsPage]
})
export class AllParcsPageModule {}
