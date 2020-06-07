import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parc } from '../models/parc.model';

@Injectable({
  providedIn: 'root'
})
export class ParcService {

  parcs: Parc[] = [];

  constructor(private httpClient: HttpClient) { }

  init() {
    this.httpClient.get('http://127.0.0.1:3000/parcs').subscribe(
      (data: Parc[]) => {
        this.parcs = data;
        console.log(data);
      },
      (error) => {
        console.log("Erreur: ParcService => " + error);
      }
    );
  }

  get() {
    return this.httpClient.get('http://127.0.0.1:3000/parcs');
  }

  getSearch(param: string) {
    return this.httpClient.get('http://127.0.0.1:3000/parcs/c/' + param);
  }
}
