import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  categorias: any[] = [
   "SUPERIOR", "INFERIOR", "BIJOUTERIE", "ACCESORIOS"
  ];

  subCategoriaSuperior: any[] = [
    "REMERA", "POLERA", "BUZO", "CAMPERA", "SUETER", "MUSCULOSA", "SACO", "CAMISA", "TOP"
  ];

  subCategoriaInferior: any[] = [
    "JEAN", "PANTALON", "JOGGIN", "BERMUDA", "SHORT", "POLLERA"
  ];

  subCategoriaAccesorios: any [] = [
    "GORROS", "BUFANDAS", "CINTURONES", "PANUELOS"
  ];


  constructor() { }


}
