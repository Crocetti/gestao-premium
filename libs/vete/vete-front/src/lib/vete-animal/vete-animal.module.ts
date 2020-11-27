import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VeteAnimalComponent } from './vete-animal.component';


const routes: Routes = [
  { path: '', component: VeteAnimalComponent }
];

@NgModule({
  declarations: [VeteAnimalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VeteAnimalModule { }
