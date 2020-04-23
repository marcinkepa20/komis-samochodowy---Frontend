import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './Car/lista/lista.component';
import { AddComponent } from './Car/add/add.component';
import { EditComponent } from './Car/edit/edit.component';


const routes: Routes = [
  {path: 'lista', component:ListaComponent},
  {path: 'add',component:AddComponent},
  {path: 'edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
