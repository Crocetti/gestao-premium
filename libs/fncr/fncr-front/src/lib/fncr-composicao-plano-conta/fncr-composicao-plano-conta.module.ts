import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrComposicaoPlanoContaComponent } from './fncr-composicao-plano-conta.component';


const routes: Routes = [
  { path: '', component: FncrComposicaoPlanoContaComponent }
];

@NgModule({
  declarations: [FncrComposicaoPlanoContaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrComposicaoPlanoContaModule { }
