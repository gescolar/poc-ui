import { Veiculo } from './model';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';



@Injectable()
export class VeiculoService {


  veiucloUrl: string;

  constructor(private http: Http) {
    this.veiucloUrl = `${environment.apiUrl}/veiculos`;
  }

  suivConsultaVeiculo(placa: String): Promise<Veiculo> {
    return this.http.get(`${this.veiucloUrl}/suivConsultaVeiculo/${placa}`)
      .toPromise()
      .then(response => response.json());
  }

}
