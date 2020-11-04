import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrTituloCentroCustoComponent } from './fncr-titulo-centro-custo.component';


const routes: Routes = [
  { path: '', component: FncrTituloCentroCustoComponent }
];

@NgModule({
  declarations: [FncrTituloCentroCustoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrTituloCentroCustoModule { }
