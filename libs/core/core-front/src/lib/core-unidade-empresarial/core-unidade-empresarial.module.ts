import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreUnidadeEmpresarialComponent } from './core-unidade-empresarial.component';


const routes: Routes = [
  { path: '', component: CoreUnidadeEmpresarialComponent }
];

@NgModule({
  declarations: [CoreUnidadeEmpresarialComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreUnidadeEmpresarialModule { }
