import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrHistoricoCoberturaComponent } from './pecr-historico-cobertura.component';


const routes: Routes = [
  { path: '', component: PecrHistoricoCoberturaComponent }
];

@NgModule({
  declarations: [PecrHistoricoCoberturaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrHistoricoCoberturaModule { }
