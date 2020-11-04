import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsPessoaDocumentoComponent } from './cmns-pessoa-documento.component';


const routes: Routes = [
  { path: '', component: CmnsPessoaDocumentoComponent }
];

@NgModule({
  declarations: [CmnsPessoaDocumentoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsPessoaDocumentoModule { }
