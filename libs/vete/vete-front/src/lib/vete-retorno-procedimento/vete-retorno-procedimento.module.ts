import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VeteRetornoProcedimentoComponent } from './vete-retorno-procedimento.component';


const routes: Routes = [
  { path: '', component: VeteRetornoProcedimentoComponent }
];

@NgModule({
  declarations: [VeteRetornoProcedimentoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VeteRetornoProcedimentoModule { }
