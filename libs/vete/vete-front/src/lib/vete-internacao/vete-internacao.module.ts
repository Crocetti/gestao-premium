import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VeteInternacaoComponent } from './vete-internacao.component';


const routes: Routes = [
  { path: '', component: VeteInternacaoComponent }
];

@NgModule({
  declarations: [VeteInternacaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VeteInternacaoModule { }
