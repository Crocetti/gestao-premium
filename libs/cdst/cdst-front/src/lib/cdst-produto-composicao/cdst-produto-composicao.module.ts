import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CdstProdutoComposicaoComponent } from './cdst-produto-composicao.component';


const routes: Routes = [
  { path: '', component: CdstProdutoComposicaoComponent }
];

@NgModule({
  declarations: [CdstProdutoComposicaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CdstProdutoComposicaoModule { }
