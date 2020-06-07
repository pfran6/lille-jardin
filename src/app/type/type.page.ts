import { Component, OnInit } from '@angular/core';
import { TypeService } from '../services/type.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-type',
  templateUrl: './type.page.html',
  styleUrls: ['./type.page.scss'],
})
export class TypePage implements OnInit {

  constructor(private typeService: TypeService, private navCtrl: NavController) { }

  ngOnInit() {
    this.typeService.init();
  }

  onClickType(nom: string) {
    this.navCtrl.navigateForward('parcsearch/' + nom);
  }

}
