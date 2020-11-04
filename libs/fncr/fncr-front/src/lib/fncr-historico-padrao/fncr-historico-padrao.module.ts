import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrHistoricoPadraoComponent } from './fncr-historico-padrao.component';


const routes: Routes = [
  { path: '', component: FncrHistoricoPadraoComponent }
];

@NgModule({
  declarations: [FncrHistoricoPadraoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrHistoricoPadraoModule { }
