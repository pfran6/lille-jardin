import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Parc } from 'src/app/models/parc.model';
import { ParcService } from 'src/app/services/parc.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  parc: Parc;
  
  constructor(private route: ActivatedRoute, private parcService: ParcService, private navCtrl: NavController) { }

  ngOnInit() {
    this.parc = this.parcService.parcs.find(item => item.id === +this.route.snapshot.paramMap.get('id'));
    if(this.parc === undefined) {
      this.navCtrl.navigateRoot('home')
    }
  }

}
