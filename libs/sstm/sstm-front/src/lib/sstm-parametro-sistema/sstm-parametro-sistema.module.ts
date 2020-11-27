import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SstmParametroSistemaComponent } from './sstm-parametro-sistema.component';


const routes: Routes = [
  { path: '', component: SstmParametroSistemaComponent }
];

@NgModule({
  declarations: [SstmParametroSistemaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SstmParametroSistemaModule { }
