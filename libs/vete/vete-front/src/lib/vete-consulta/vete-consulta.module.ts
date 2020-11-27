import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VeteConsultaComponent } from './vete-consulta.component';


const routes: Routes = [
  { path: '', component: VeteConsultaComponent }
];

@NgModule({
  declarations: [VeteConsultaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VeteConsultaModule { }
