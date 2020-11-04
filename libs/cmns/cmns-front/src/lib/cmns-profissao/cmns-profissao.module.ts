import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsProfissaoComponent } from './cmns-profissao.component';


const routes: Routes = [
  { path: '', component: CmnsProfissaoComponent }
];

@NgModule({
  declarations: [CmnsProfissaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsProfissaoModule { }
