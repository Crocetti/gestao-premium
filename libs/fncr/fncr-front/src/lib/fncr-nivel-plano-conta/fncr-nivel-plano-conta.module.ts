import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrNivelPlanoContaComponent } from './fncr-nivel-plano-conta.component';


const routes: Routes = [
  { path: '', component: FncrNivelPlanoContaComponent }
];

@NgModule({
  declarations: [FncrNivelPlanoContaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrNivelPlanoContaModule { }
