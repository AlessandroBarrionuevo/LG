import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prenda } from '../models/Prenda';

@Injectable({
  providedIn: 'root'
})
export class PrendasServiceService {

  private url = 'http://localhost:8080/prendas';
  private url2= 'http://localhost:8080/img/flow token.png';
  constructor(private httpClient: HttpClient) { }

  getPrendas():Observable<any>{
    return this.httpClient.get<any>(this.url);
  }

  getPrendaById(id: number):Observable<any>{
    return this.httpClient.get<any>(this.url + '/' + id)
  }

  getIMG():Observable<any>{
    return this.httpClient.get<any>(this.url);
  }

  prendaPost(prenda: any): Observable<any> {
    return this.httpClient.post(this.url, prenda);
  }
}
