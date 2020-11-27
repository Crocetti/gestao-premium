import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SrvcOrdemServicoComponent } from './srvc-ordem-servico.component';


const routes: Routes = [
  { path: '', component: SrvcOrdemServicoComponent }
];

@NgModule({
  declarations: [SrvcOrdemServicoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SrvcOrdemServicoModule { }
