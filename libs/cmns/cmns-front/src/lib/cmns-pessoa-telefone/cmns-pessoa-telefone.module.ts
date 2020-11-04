import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsPessoaTelefoneComponent } from './cmns-pessoa-telefone.component';


const routes: Routes = [
  { path: '', component: CmnsPessoaTelefoneComponent }
];

@NgModule({
  declarations: [CmnsPessoaTelefoneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsPessoaTelefoneModule { }
