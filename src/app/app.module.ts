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
import { PrendasTableComponent } from './admin/prendas-table/prendas-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadPrendaComponent,
    PrendasTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
