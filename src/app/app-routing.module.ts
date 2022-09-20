import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrendasTableComponent } from './prendas-table/prendas-table.component';
import { UploadPrendaComponent } from './admin/upload-prenda/upload-prenda.component';
import { HomeComponent } from './home/home.component';
import { TableAdminComponent } from './admin/table-admin/table-admin.component';
import { PutPrendaComponent } from './admin/put-prenda/put-prenda.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  //admin
  {path: 'admin/upload-prenda', component: UploadPrendaComponent},
  {path: 'admin/actualizar-prenda/:id', component: PutPrendaComponent},
  {path: 'admin/prendas', component: TableAdminComponent},
  //no admin
  {path: 'prendas', component: PrendasTableComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
