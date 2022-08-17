import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrendasTableComponent } from './admin/prendas-table/prendas-table.component';
import { UploadPrendaComponent } from './admin/upload-prenda/upload-prenda.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'upload-prenda', component: UploadPrendaComponent},
  {path: 'prendas', component: PrendasTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
