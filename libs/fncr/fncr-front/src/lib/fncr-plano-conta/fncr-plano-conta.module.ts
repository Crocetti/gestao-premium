import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrPlanoContaComponent } from './fncr-plano-conta.component';


const routes: Routes = [
  { path: '', component: FncrPlanoContaComponent }
];

@NgModule({
  declarations: [FncrPlanoContaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrPlanoContaModule { }
