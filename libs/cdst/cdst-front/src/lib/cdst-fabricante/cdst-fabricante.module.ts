import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CdstFabricanteComponent } from './cdst-fabricante.component';


const routes: Routes = [
  { path: '', component: CdstFabricanteComponent }
];

@NgModule({
  declarations: [CdstFabricanteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CdstFabricanteModule { }
