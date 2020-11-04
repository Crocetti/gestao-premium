import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreEmpresaComponent } from './core-empresa.component';


const routes: Routes = [
  { path: '', component: CoreEmpresaComponent }
];

@NgModule({
  declarations: [CoreEmpresaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreEmpresaModule { }
