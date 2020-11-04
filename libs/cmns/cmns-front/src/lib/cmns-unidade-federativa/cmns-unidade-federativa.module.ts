import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsUnidadeFederativaComponent } from './cmns-unidade-federativa.component';


const routes: Routes = [
  { path: '', component: CmnsUnidadeFederativaComponent }
];

@NgModule({
  declarations: [CmnsUnidadeFederativaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsUnidadeFederativaModule { }
