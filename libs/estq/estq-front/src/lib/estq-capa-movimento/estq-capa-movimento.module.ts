import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EstqCapaMovimentoComponent } from './estq-capa-movimento.component';


const routes: Routes = [
  { path: '', component: EstqCapaMovimentoComponent }
];

@NgModule({
  declarations: [EstqCapaMovimentoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EstqCapaMovimentoModule { }
