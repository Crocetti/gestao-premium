import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SrvcServicoPecasComponent } from './srvc-servico-pecas.component';


const routes: Routes = [
  { path: '', component: SrvcServicoPecasComponent }
];

@NgModule({
  declarations: [SrvcServicoPecasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SrvcServicoPecasModule { }
