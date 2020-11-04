import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsPessoaImagemComponent } from './cmns-pessoa-imagem.component';


const routes: Routes = [
  { path: '', component: CmnsPessoaImagemComponent }
];

@NgModule({
  declarations: [CmnsPessoaImagemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsPessoaImagemModule { }
