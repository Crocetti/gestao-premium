import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SrvcServicoComposicaoComponent } from './srvc-servico-composicao.component';


const routes: Routes = [
  { path: '', component: SrvcServicoComposicaoComponent }
];

@NgModule({
  declarations: [SrvcServicoComposicaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SrvcServicoComposicaoModule { }
