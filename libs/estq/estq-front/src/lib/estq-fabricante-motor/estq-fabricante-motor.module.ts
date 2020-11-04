import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EstqFabricanteMotorComponent } from './estq-fabricante-motor.component';


const routes: Routes = [
  { path: '', component: EstqFabricanteMotorComponent }
];

@NgModule({
  declarations: [EstqFabricanteMotorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EstqFabricanteMotorModule { }
