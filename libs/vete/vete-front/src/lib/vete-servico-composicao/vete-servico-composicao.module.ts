import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VeteServicoComposicaoComponent } from './vete-servico-composicao.component';


const routes: Routes = [
  { path: '', component: VeteServicoComposicaoComponent }
];

@NgModule({
  declarations: [VeteServicoComposicaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VeteServicoComposicaoModule { }
