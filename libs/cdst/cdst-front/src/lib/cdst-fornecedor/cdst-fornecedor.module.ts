import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CdstFornecedorComponent } from './cdst-fornecedor.component';


const routes: Routes = [
  { path: '', component: CdstFornecedorComponent }
];

@NgModule({
  declarations: [CdstFornecedorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CdstFornecedorModule { }
