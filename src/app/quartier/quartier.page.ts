import { Component, OnInit } from '@angular/core';
import { QuartierService } from '../services/quartier.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-quartier',
  templateUrl: './quartier.page.html',
  styleUrls: ['./quartier.page.scss'],
})
export class QuartierPage implements OnInit {

  constructor(private quartierService: QuartierService, private navController: NavController) { }

  ngOnInit() {
    this.quartierService.init();
  }

  onClickQuartier(nom: string) {
    this.navController.navigateForward('parcsearch/' + nom);
  }

}
