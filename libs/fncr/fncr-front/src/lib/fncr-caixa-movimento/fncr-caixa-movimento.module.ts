import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrCaixaMovimentoComponent } from './fncr-caixa-movimento.component';


const routes: Routes = [
  { path: '', component: FncrCaixaMovimentoComponent }
];

@NgModule({
  declarations: [FncrCaixaMovimentoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrCaixaMovimentoModule { }
