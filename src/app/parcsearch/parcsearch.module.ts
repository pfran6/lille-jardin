import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParcsearchPageRoutingModule } from './parcsearch-routing.module';

import { ParcsearchPage } from './parcsearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParcsearchPageRoutingModule
  ],
  declarations: [ParcsearchPage]
})
export class ParcsearchPageModule {}
