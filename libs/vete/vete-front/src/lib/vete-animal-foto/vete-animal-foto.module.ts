import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VeteAnimalFotoComponent } from './vete-animal-foto.component';


const routes: Routes = [
  { path: '', component: VeteAnimalFotoComponent }
];

@NgModule({
  declarations: [VeteAnimalFotoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VeteAnimalFotoModule { }
