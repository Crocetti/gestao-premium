import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SstmParametroEmpresaComponent } from './sstm-parametro-empresa.component';


const routes: Routes = [
  { path: '', component: SstmParametroEmpresaComponent }
];

@NgModule({
  declarations: [SstmParametroEmpresaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SstmParametroEmpresaModule { }
