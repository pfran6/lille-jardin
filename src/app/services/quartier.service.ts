import { Injectable } from '@angular/core';
import { TypeQuartier } from '../models/typequartier.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuartierService {

  quartiers: TypeQuartier[] = [];

  constructor(private httpClient: HttpClient) { }

  init() {
    if (this.quartiers.length === 0) {
      this.httpClient.get('http://127.0.0.1:3000/parcs/b/getquartier').subscribe(
        (data: TypeQuartier[]) => {
          this.quartiers = data;
        },
        (error) => {
          console.log("Erreur quartierService.init() => " + error);
        }
      );
    }
  }
}
