import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EstqMaquinaEquipamentoComponent } from './estq-maquina-equipamento.component';


const routes: Routes = [
  { path: '', component: EstqMaquinaEquipamentoComponent }
];

@NgModule({
  declarations: [EstqMaquinaEquipamentoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EstqMaquinaEquipamentoModule { }
