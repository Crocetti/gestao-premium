import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SstmSistemaCorporacaoComponent } from './sstm-sistema-corporacao.component';


const routes: Routes = [
  { path: '', component: SstmSistemaCorporacaoComponent }
];

@NgModule({
  declarations: [SstmSistemaCorporacaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SstmSistemaCorporacaoModule { }
