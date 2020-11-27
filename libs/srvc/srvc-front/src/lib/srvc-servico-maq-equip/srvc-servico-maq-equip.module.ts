import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SrvcServicoMaqEquipComponent } from './srvc-servico-maq-equip.component';


const routes: Routes = [
  { path: '', component: SrvcServicoMaqEquipComponent }
];

@NgModule({
  declarations: [SrvcServicoMaqEquipComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SrvcServicoMaqEquipModule { }
