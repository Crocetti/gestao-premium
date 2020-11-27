import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SrvcServicoComponent } from './srvc-servico.component';


const routes: Routes = [
  { path: '', component: SrvcServicoComponent }
];

@NgModule({
  declarations: [SrvcServicoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SrvcServicoModule { }
