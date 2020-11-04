import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrPlanoOrcamentarioComponent } from './fncr-plano-orcamentario.component';


const routes: Routes = [
  { path: '', component: FncrPlanoOrcamentarioComponent }
];

@NgModule({
  declarations: [FncrPlanoOrcamentarioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrPlanoOrcamentarioModule { }
