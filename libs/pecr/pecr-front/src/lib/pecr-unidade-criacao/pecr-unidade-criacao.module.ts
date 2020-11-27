import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrUnidadeCriacaoComponent } from './pecr-unidade-criacao.component';


const routes: Routes = [
  { path: '', component: PecrUnidadeCriacaoComponent }
];

@NgModule({
  declarations: [PecrUnidadeCriacaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrUnidadeCriacaoModule { }
