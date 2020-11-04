import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrNotaFiscalTituloComponent } from './fncr-nota-fiscal-titulo.component';


const routes: Routes = [
  { path: '', component: FncrNotaFiscalTituloComponent }
];

@NgModule({
  declarations: [FncrNotaFiscalTituloComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrNotaFiscalTituloModule { }
