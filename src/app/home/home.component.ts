import { Component, OnInit } from '@angular/core';
import { Prenda } from '../models/Prenda';
import { PrendasServiceService } from '../services/prendas-service.service';

//storage
import { Storage, ref, uploadBytes, listAll } from '@angular/fire/storage';
import { getDownloadURL, list } from 'firebase/storage';
import { dir } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  prendas: any[] = [];
  res: any;
  images: string[] = [];

  constructor(
    private prendaService: PrendasServiceService,
    private storageFirebase: Storage
  ) {}

  ngOnInit(): void {
    this.getAllPrendas();
    this.getImg();
    //this.getImagesFromStorage();
  }

  getImagesFromStorage() {
    const imagesRef = ref(this.storageFirebase, 'images');

    listAll(imagesRef)
      .then(async (r) => {
        console.log(r);
        for (let i of r.items) {
          //guardo las imagenes de la lista from storage
          this.images.push(await getDownloadURL(i));
        }
      })
      .catch((err) => console.error(err));
  }

  //metodos a mi api
  getAllPrendas() {
    this.prendaService.getPrendas().subscribe(
      (r) => {
        this.prendas = r;
        r.images =this.images; 
        console.dir(r.images);
      },
      (err) => {
        console.dir(err);
      }
    );
  }

  getImg() {
    this.prendaService.getIMG().subscribe(
      (r) => {
        this.res = r;
        console.dir(r);
      },
      (err) => {
        console.dir(err);
      }
    );
  }
}
