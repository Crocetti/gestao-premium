import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SstmObjetoVersaoComponent } from './sstm-objeto-versao.component';


const routes: Routes = [
  { path: '', component: SstmObjetoVersaoComponent }
];

@NgModule({
  declarations: [SstmObjetoVersaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SstmObjetoVersaoModule { }
