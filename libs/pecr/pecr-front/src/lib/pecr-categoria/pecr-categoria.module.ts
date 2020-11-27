import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrCategoriaComponent } from './pecr-categoria.component';


const routes: Routes = [
  { path: '', component: PecrCategoriaComponent }
];

@NgModule({
  declarations: [PecrCategoriaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrCategoriaModule { }
