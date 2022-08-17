import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prenda } from 'src/app/models/Prenda';
import { PrendasServiceService } from 'src/app/services/prendas-service.service';

@Component({
  selector: 'app-prendas-table',
  templateUrl: './prendas-table.component.html',
  styleUrls: ['./prendas-table.component.css']
})
export class PrendasTableComponent implements OnInit {

  prendas!: any[];
  constructor(private prendasService: PrendasServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAllPrendas();
  }

  getAllPrendas(){
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



}
