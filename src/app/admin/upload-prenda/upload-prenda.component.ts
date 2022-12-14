import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Img } from 'src/app/models/Img';
import { Prenda } from 'src/app/models/Prenda';
import { PrendasServiceService } from 'src/app/services/prendas-service.service';
//storage
import { Storage, ref, uploadBytes, listAll } from '@angular/fire/storage';
import { getDownloadURL, list } from 'firebase/storage';
import { dir } from 'console';
import { FormulariosService } from 'src/app/services/formularios.service';

@Component({
  selector: 'app-upload-prenda',
  templateUrl: './upload-prenda.component.html',
  styleUrls: ['./upload-prenda.component.css'],
})
export class UploadPrendaComponent implements OnInit {
  prendaForm: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl('', Validators.required),
    review: new UntypedFormControl('', Validators.required),
    colour: new UntypedFormControl('', Validators.required),
    size: new UntypedFormControl('', Validators.required),
    price: new UntypedFormControl('', Validators.required),
    categorie: new UntypedFormControl('', Validators.required),
    subCategorie: new UntypedFormControl('', Validators.required),
  });
  images: string[] = [];
  prendas: any;
  categorias: any[] = [];
  constructor(
    private prendasService: PrendasServiceService,
    private storageFirebase: Storage,
    private formService: FormulariosService
  ) {}

  ngOnInit(): void {
    this.categorias = this.formService.categorias;
  }

  insertPrenda(prendaFrom: UntypedFormGroup) {
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
    console.log(prenda.categorie);

    this.prendasService.prendaPost(prenda).subscribe((r) => {
      console.log(r);
    });
  }

  uploadMultipleImages($event: any) {
    const files = $event.target.files;
    for (let f of files) {
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
          console.log('a------------------');
          this.images.push(await getDownloadURL(res.ref));
        }
      )
      .catch((err) => console.log(err));
  }
}
