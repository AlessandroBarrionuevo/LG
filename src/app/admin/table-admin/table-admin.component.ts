import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormulariosService } from 'src/app/services/formularios.service';
import { PrendasServiceService } from 'src/app/services/prendas-service.service';
import * as _ from 'lodash';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-admin',
  templateUrl: './table-admin.component.html',
  styleUrls: ['./table-admin.component.css'],
})
export class TableAdminComponent implements OnInit {
  prendas: any[] = [];
  res: any;
  images: string[] = [];
  prenda: any;
  categorias: any[] = [];
  prendaForm: UntypedFormGroup = new UntypedFormGroup({
    categorie: new UntypedFormControl('', Validators.required),
  });
  filtro: any;

  constructor(
    private prendaService: PrendasServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private fomrService: FormulariosService
  ) {}

  ngOnInit(): void {
    this.getAllPrendas();
    this.categorias = this.fomrService.categorias;
  }

  filterBy(filtro: any) {
    this.filtro = filtro;
    if (filtro == "null") {
      console.log('el null');
      this.getAllPrendas();
    } else {
      this.prendaService.getPrendasByCategorie(this.filtro).subscribe(
        (r: any) => {
          this.prendas = r;
          console.log(r);
        },
        (err) => {
          console.log(err);
        }
      );
      
      console.log(this.filtro);
    }
  }

  getAllPrendas() {
    this.prendaService.getPrendas().subscribe(
      (r) => {
        this.prendas = r;
        r.images = this.images;
      },
      (err) => {
        console.dir(err);
      }
    );
  }

  getPrendaById(id: any) {
    this.prendaService.getPrendaById(id).subscribe(
      (r) => {
        this.prenda = r;
        console.dir(r);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deletePrenda(id: any) {
    this.prendaService.deletePrenda(id).subscribe(
      (r) => {
        console.dir(r.images);
      },
      (err) => {
        console.dir(err);
      }
    );

    this.ngOnInit();
  }

  updatePrenda(id: any) {
    this.router.navigate(['admin/actualizar-prenda', id]);
  }

  postPrenda() {
    this.router.navigate(['admin/upload-prenda']);
  }
}
