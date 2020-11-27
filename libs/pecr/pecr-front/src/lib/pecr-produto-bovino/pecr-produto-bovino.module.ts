import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrProdutoBovinoComponent } from './pecr-produto-bovino.component';


const routes: Routes = [
  { path: '', component: PecrProdutoBovinoComponent }
];

@NgModule({
  declarations: [PecrProdutoBovinoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrProdutoBovinoModule { }
