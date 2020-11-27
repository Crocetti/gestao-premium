import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VetePorteComponent } from './vete-porte.component';


const routes: Routes = [
  { path: '', component: VetePorteComponent }
];

@NgModule({
  declarations: [VetePorteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VetePorteModule { }
