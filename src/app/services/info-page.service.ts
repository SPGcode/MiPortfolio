import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { InfoPageInterface } from '../interfaces/info-pagina.interface'

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPageInterface = {};
  cargada = false;

  constructor( private http: HttpClient) { 

    this.http.get('assets/data/info.json')
    .subscribe( (res: InfoPageInterface) => {
      this.cargada = true;
      this.info = res;
    });

  }
}
