import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EstqProdutoSaldoComponent } from './estq-produto-saldo.component';


const routes: Routes = [
  { path: '', component: EstqProdutoSaldoComponent }
];

@NgModule({
  declarations: [EstqProdutoSaldoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EstqProdutoSaldoModule { }
