import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UploadPrendaComponent } from './admin/upload-prenda/upload-prenda.component';
import { provideStorage, Storage } from '@angular/fire/storage';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getStorage } from 'firebase/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrendasTableComponent } from './prendas-table/prendas-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableAdminComponent } from './admin/table-admin/table-admin.component';
import { PutPrendaComponent } from './admin/put-prenda/put-prenda.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadPrendaComponent,
    PrendasTableComponent,
    TableAdminComponent,
    PutPrendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideStorage(() => getStorage()),
    NgbModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
