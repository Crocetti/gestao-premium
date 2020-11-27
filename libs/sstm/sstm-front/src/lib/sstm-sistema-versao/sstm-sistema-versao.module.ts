import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SstmSistemaVersaoComponent } from './sstm-sistema-versao.component';


const routes: Routes = [
  { path: '', component: SstmSistemaVersaoComponent }
];

@NgModule({
  declarations: [SstmSistemaVersaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SstmSistemaVersaoModule { }
