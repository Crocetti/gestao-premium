import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EstqItemMovimentoComponent } from './estq-item-movimento.component';


const routes: Routes = [
  { path: '', component: EstqItemMovimentoComponent }
];

@NgModule({
  declarations: [EstqItemMovimentoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EstqItemMovimentoModule { }
