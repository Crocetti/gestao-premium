import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SstmSistemaTabelaComponent } from './sstm-sistema-tabela.component';


const routes: Routes = [
  { path: '', component: SstmSistemaTabelaComponent }
];

@NgModule({
  declarations: [SstmSistemaTabelaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SstmSistemaTabelaModule { }
