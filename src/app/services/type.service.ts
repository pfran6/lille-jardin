import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { typeParc } from '../models/typeparc.model';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  types: typeParc[] = [];

  constructor(private httpClient: HttpClient) { }

  init() {
    if (this.types.length === 0) {
      this.httpClient.get('http://127.0.0.1:3000/parcs/b/gettype').subscribe(
        (data: typeParc[]) => {
          this.types = data;
        },
        (error) => {
          console.log("Erreur typeService.init() => " + error);
        }
      );
    }
  }
}
