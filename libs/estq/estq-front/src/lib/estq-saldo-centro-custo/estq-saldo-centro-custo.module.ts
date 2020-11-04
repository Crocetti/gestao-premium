import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EstqSaldoCentroCustoComponent } from './estq-saldo-centro-custo.component';


const routes: Routes = [
  { path: '', component: EstqSaldoCentroCustoComponent }
];

@NgModule({
  declarations: [EstqSaldoCentroCustoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EstqSaldoCentroCustoModule { }
