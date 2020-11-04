import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsTipoEnderecoComponent } from './cmns-tipo-endereco.component';


const routes: Routes = [
  { path: '', component: CmnsTipoEnderecoComponent }
];

@NgModule({
  declarations: [CmnsTipoEnderecoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsTipoEnderecoModule { }
