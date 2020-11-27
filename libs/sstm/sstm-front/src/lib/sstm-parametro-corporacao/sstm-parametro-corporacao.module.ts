import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SstmParametroCorporacaoComponent } from './sstm-parametro-corporacao.component';


const routes: Routes = [
  { path: '', component: SstmParametroCorporacaoComponent }
];

@NgModule({
  declarations: [SstmParametroCorporacaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SstmParametroCorporacaoModule { }
