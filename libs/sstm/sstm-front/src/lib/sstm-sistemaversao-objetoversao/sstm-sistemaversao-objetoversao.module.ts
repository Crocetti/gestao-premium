import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SstmSistemaversaoObjetoversaoComponent } from './sstm-sistemaversao-objetoversao.component';


const routes: Routes = [
  { path: '', component: SstmSistemaversaoObjetoversaoComponent }
];

@NgModule({
  declarations: [SstmSistemaversaoObjetoversaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SstmSistemaversaoObjetoversaoModule { }
