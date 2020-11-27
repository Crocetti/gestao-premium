import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrLoteAnimalComponent } from './pecr-lote-animal.component';


const routes: Routes = [
  { path: '', component: PecrLoteAnimalComponent }
];

@NgModule({
  declarations: [PecrLoteAnimalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrLoteAnimalModule { }
