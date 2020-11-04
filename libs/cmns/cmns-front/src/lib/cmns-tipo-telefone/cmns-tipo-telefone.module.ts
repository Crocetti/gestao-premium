import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsTipoTelefoneComponent } from './cmns-tipo-telefone.component';


const routes: Routes = [
  { path: '', component: CmnsTipoTelefoneComponent }
];

@NgModule({
  declarations: [CmnsTipoTelefoneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsTipoTelefoneModule { }
