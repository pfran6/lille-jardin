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

  onClickViewPark(p_id: string) {
    this.navCtrl.navigateForward('parc/view/' + p_id);
  }

}
