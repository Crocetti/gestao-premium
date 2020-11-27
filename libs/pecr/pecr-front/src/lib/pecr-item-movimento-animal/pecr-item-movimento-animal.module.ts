import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrItemMovimentoAnimalComponent } from './pecr-item-movimento-animal.component';


const routes: Routes = [
  { path: '', component: PecrItemMovimentoAnimalComponent }
];

@NgModule({
  declarations: [PecrItemMovimentoAnimalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrItemMovimentoAnimalModule { }
