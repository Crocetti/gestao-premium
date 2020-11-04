import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsPessoaEnderecoComponent } from './cmns-pessoa-endereco.component';


const routes: Routes = [
  { path: '', component: CmnsPessoaEnderecoComponent }
];

@NgModule({
  declarations: [CmnsPessoaEnderecoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsPessoaEnderecoModule { }
