import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VeteServicoComponent } from './vete-servico.component';


const routes: Routes = [
  { path: '', component: VeteServicoComponent }
];

@NgModule({
  declarations: [VeteServicoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VeteServicoModule { }
