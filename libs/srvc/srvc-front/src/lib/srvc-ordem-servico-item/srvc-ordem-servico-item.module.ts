import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SrvcOrdemServicoItemComponent } from './srvc-ordem-servico-item.component';


const routes: Routes = [
  { path: '', component: SrvcOrdemServicoItemComponent }
];

@NgModule({
  declarations: [SrvcOrdemServicoItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SrvcOrdemServicoItemModule { }
