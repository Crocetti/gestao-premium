import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VeteRetornoComponent } from './vete-retorno.component';


const routes: Routes = [
  { path: '', component: VeteRetornoComponent }
];

@NgModule({
  declarations: [VeteRetornoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VeteRetornoModule { }
