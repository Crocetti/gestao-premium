import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FsclDocumentoPessoaComponent } from './fscl-documento-pessoa.component';


const routes: Routes = [
  { path: '', component: FsclDocumentoPessoaComponent }
];

@NgModule({
  declarations: [FsclDocumentoPessoaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FsclDocumentoPessoaModule { }
