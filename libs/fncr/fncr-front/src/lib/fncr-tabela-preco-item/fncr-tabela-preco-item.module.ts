import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrTabelaPrecoItemComponent } from './fncr-tabela-preco-item.component';


const routes: Routes = [
  { path: '', component: FncrTabelaPrecoItemComponent }
];

@NgModule({
  declarations: [FncrTabelaPrecoItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrTabelaPrecoItemModule { }
