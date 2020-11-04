import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsPessoaComponent } from './cmns-pessoa.component';


const routes: Routes = [
  { path: '', component: CmnsPessoaComponent }
];

@NgModule({
  declarations: [CmnsPessoaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsPessoaModule { }
