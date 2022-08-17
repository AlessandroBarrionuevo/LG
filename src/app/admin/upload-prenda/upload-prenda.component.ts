import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Img } from 'src/app/models/Img';
import { Prenda } from 'src/app/models/Prenda';
import { PrendasServiceService } from 'src/app/services/prendas-service.service';
//storage
import { Storage, ref, uploadBytes, listAll } from '@angular/fire/storage';
import { getDownloadURL, list } from 'firebase/storage';
import { dir } from 'console';

@Component({
  selector: 'app-upload-prenda',
  templateUrl: './upload-prenda.component.html',
  styleUrls: ['./upload-prenda.component.css'],
})
export class UploadPrendaComponent implements OnInit {
  prendaForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    review: new FormControl('', Validators.required),
    colour: new FormControl('', Validators.required),
    size: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    categorie: new FormControl('', Validators.required),
    subCategorie: new FormControl('', Validators.required),
  });
  images: string[] = [];
  prendas: any;

  constructor(private prendasService: PrendasServiceService
    , private storageFirebase: Storage) {}

  ngOnInit(): void {}

  insertPrenda(prendaFrom: FormGroup){

    let prenda = new Prenda(
      prendaFrom.value.name,
      prendaFrom.value.review,
      prendaFrom.value.colour,
      prendaFrom.value.size,
      prendaFrom.value.price,
      prendaFrom.value.categorie,
      prendaFrom.value.subCategorie,
      this.images
    );

    console.log(prenda);

    this.prendasService.prendaPost(prenda).subscribe(
      (r) => {console.log(r)}
    );

  }

  uploadMultipleImages($event: any){
    const files = $event.target.files;
    for(let f of files){
      this.uploadImage(f);
    }
  }

  //metodos al storage
  uploadImage(file: any) {
    //esto va a tener la ubicacion de donde se va a guardar la img
    let imgRef = ref(this.storageFirebase, `images/${file.name}`);
    
    //con esto subimos la imagen al storage
    uploadBytes(imgRef, file)
      .then(
        //con esto logro obtener la url publica del archivo que subo para guardarla en mi bdd
        async (res) => {
          console.log("a------------------")
          this.images.push(await getDownloadURL(res.ref));
        }
      )
      .catch((err) => console.log(err));
  }

}
