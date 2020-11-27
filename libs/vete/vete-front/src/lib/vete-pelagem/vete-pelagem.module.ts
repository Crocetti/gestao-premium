import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VetePelagemComponent } from './vete-pelagem.component';


const routes: Routes = [
  { path: '', component: VetePelagemComponent }
];

@NgModule({
  declarations: [VetePelagemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VetePelagemModule { }
