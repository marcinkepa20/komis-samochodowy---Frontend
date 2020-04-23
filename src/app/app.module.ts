import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './Car/lista/lista.component';
import { AddComponent } from './Car/add/add.component';
import { EditComponent } from './Car/edit/edit.component';
import{FormsModule}from '@angular/forms';
import { ServisService }from '../app/Servis/servis.service';
import {HttpClientModule}from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
