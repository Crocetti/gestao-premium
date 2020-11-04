import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsPessoaJuridicaComponent } from './cmns-pessoa-juridica.component';


const routes: Routes = [
  { path: '', component: CmnsPessoaJuridicaComponent }
];

@NgModule({
  declarations: [CmnsPessoaJuridicaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsPessoaJuridicaModule { }
