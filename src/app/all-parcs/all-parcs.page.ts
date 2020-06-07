import { Component, OnInit } from '@angular/core';
import { ParcService } from '../services/parc.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-parcs',
  templateUrl: './all-parcs.page.html',
  styleUrls: ['./all-parcs.page.scss'],
})
export class AllParcsPage {
  constructor(private parcService: ParcService, private navCtrl: NavController) { }

  onClickViewPark(p_id: string) {
    this.navCtrl.navigateForward('parc/view/' + p_id);
  }
}
