import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { PrendasServiceService } from 'src/app/services/prendas-service.service';
import { Storage, ref, uploadBytes, listAll } from '@angular/fire/storage';
import { getDownloadURL, list } from 'firebase/storage';
import { ActivatedRoute } from '@angular/router';
import { Prenda } from 'src/app/models/Prenda';
import { FormulariosService } from 'src/app/services/formularios.service';
@Component({
  selector: 'app-put-prenda',
  templateUrl: './put-prenda.component.html',
  styleUrls: ['./put-prenda.component.css'],
})
export class PutPrendaComponent implements OnInit {
  prendaForm: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl('', Validators.required),
    review: new UntypedFormControl('', Validators.required),
    colour: new UntypedFormControl('', Validators.required),
    size: new UntypedFormControl('', Validators.required),
    price: new UntypedFormControl('', Validators.required),
    categorie: new UntypedFormControl('', Validators.required),
    subCategorie: new UntypedFormControl('', Validators.required),
  });
  id: number;
  images: string[] = [];
  prenda: any;
  categorias: any [] = [];
  constructor(
    private prendasService: PrendasServiceService,
    private route: ActivatedRoute,
    private storageFirebase: Storage,
    private formService: FormulariosService
  ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getPrenda(this.id);
    this.categorias = this.formService.categorias;
  }

  getPrenda(id: number) {
    this.prendasService.getPrendaById(id).subscribe(
      (r) => {
        this.prenda = r;
      },
      (err) => {
        console.dir(err);
      }
    );
  }

  putPrenda(prendaForm: UntypedFormGroup){
    let prendaUpdated = new Prenda(
      prendaForm.value.name,
      prendaForm.value.review,
      prendaForm.value.colour,
      prendaForm.value.size,
      prendaForm.value.price,
      prendaForm.value.categorie,
      prendaForm.value.subCategorie,
      this.images
    );

    prendaUpdated.id = this.id;

    this.prendasService.updatePrenda(prendaUpdated).subscribe(
      (r) => {
        console.log(r);
      },
      (err) => {
        console.dir(err);
      }
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
          console.log('a------------------');
          this.images.push(await getDownloadURL(res.ref));
        }
      )
      .catch((err) => console.log(err));
  }
}
