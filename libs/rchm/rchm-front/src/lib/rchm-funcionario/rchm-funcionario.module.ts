import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RchmFuncionarioComponent } from './rchm-funcionario.component';


const routes: Routes = [
  { path: '', component: RchmFuncionarioComponent }
];

@NgModule({
  declarations: [RchmFuncionarioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RchmFuncionarioModule { }
