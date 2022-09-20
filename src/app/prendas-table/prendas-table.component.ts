import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrendasServiceService } from 'src/app/services/prendas-service.service';
import { FormulariosService } from '../services/formularios.service';

@Component({
  selector: 'app-prendas-table',
  templateUrl: './prendas-table.component.html',
  styleUrls: ['./prendas-table.component.css'],
})
export class PrendasTableComponent implements OnInit {
  filtro: any;
  prendas!: any[];
  categorias: any[] = [];
  constructor(
    private prendasService: PrendasServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private fomrService: FormulariosService
  ) {
    
  }

  ngOnInit(): void {
    this.getAllPrendas();
    this.categorias = this.fomrService.categorias;
  }

  getAllPrendas() {
    this.prendasService.getPrendas().subscribe(
      (r) => {
        console.log(r);
        this.prendas = r;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  filtroToNull(){
    this.filtro = 'null';
    this.filterBy(this.filtro);
  }

  filterBy(filtro: any) {
    this.filtro = filtro;
    if (filtro == "null") {
      console.log('el null');
      this.getAllPrendas();
    } else {
      this.prendasService.getPrendasByCategorie(this.filtro).subscribe(
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


}
