import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrHistoricoCategoriaComponent } from './pecr-historico-categoria.component';


const routes: Routes = [
  { path: '', component: PecrHistoricoCategoriaComponent }
];

@NgModule({
  declarations: [PecrHistoricoCategoriaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrHistoricoCategoriaModule { }
