import { Component, OnInit } from '@angular/core';
import { ParcService } from '../services/parc.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private parcService: ParcService, private navCtrl: NavController) {}

  ngOnInit() {
    this.parcService.init();
  }

  onClickAllParcs() {
    this.navCtrl.navigateForward('all-parcs');
  }

  onClickQuartier() {
    this.navCtrl.navigateForward('quartier');
  }

  onClickType() {
    this.navCtrl.navigateForward('type');
  }
}
