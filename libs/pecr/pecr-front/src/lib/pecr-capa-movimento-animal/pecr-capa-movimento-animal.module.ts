import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrCapaMovimentoAnimalComponent } from './pecr-capa-movimento-animal.component';


const routes: Routes = [
  { path: '', component: PecrCapaMovimentoAnimalComponent }
];

@NgModule({
  declarations: [PecrCapaMovimentoAnimalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrCapaMovimentoAnimalModule { }
