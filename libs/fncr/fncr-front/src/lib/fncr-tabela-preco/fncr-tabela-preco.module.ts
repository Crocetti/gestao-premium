import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrTabelaPrecoComponent } from './fncr-tabela-preco.component';


const routes: Routes = [
  { path: '', component: FncrTabelaPrecoComponent }
];

@NgModule({
  declarations: [FncrTabelaPrecoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrTabelaPrecoModule { }
