import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VeteOrdemDeServicoComponent } from './vete-ordem-de-servico.component';


const routes: Routes = [
  { path: '', component: VeteOrdemDeServicoComponent }
];

@NgModule({
  declarations: [VeteOrdemDeServicoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VeteOrdemDeServicoModule { }
