import { Component, OnInit } from '@angular/core';
import { ParcService } from '../services/parc.service';
import { ActivatedRoute } from '@angular/router';
import { Parc } from '../models/parc.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-parcsearch',
  templateUrl: './parcsearch.page.html',
  styleUrls: ['./parcsearch.page.scss'],
})
export class ParcsearchPage implements OnInit {

  parcs: Parc[] = [];

  constructor(private parcService: ParcService, private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.parcService.getSearch(this.route.snapshot.paramMap.get('param')).subscribe(
      (data: Parc[]) => {
        this.parcs = data;
      },
      (error) => {
        console.log("Erreur parcSearch.init() => " + error);
      }
    );
  }

  onClickViewPark(p_id: string) {
    this.navCtrl.navigateForward('parc/view/' + p_id);
  }

}
