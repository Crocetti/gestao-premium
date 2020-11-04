import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsPessoaFisicaComponent } from './cmns-pessoa-fisica.component';


const routes: Routes = [
  { path: '', component: CmnsPessoaFisicaComponent }
];

@NgModule({
  declarations: [CmnsPessoaFisicaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsPessoaFisicaModule { }
