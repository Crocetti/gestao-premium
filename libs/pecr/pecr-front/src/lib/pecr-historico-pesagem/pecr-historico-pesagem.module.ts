import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrHistoricoPesagemComponent } from './pecr-historico-pesagem.component';


const routes: Routes = [
  { path: '', component: PecrHistoricoPesagemComponent }
];

@NgModule({
  declarations: [PecrHistoricoPesagemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrHistoricoPesagemModule { }
