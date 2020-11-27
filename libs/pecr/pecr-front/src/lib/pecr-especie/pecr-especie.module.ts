import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrEspecieComponent } from './pecr-especie.component';


const routes: Routes = [
  { path: '', component: PecrEspecieComponent }
];

@NgModule({
  declarations: [PecrEspecieComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrEspecieModule { }
