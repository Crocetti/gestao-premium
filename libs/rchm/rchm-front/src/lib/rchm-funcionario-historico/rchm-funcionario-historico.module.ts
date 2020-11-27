import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RchmFuncionarioHistoricoComponent } from './rchm-funcionario-historico.component';


const routes: Routes = [
  { path: '', component: RchmFuncionarioHistoricoComponent }
];

@NgModule({
  declarations: [RchmFuncionarioHistoricoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RchmFuncionarioHistoricoModule { }
