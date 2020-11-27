import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrProdutoPecuariaComponent } from './pecr-produto-pecuaria.component';


const routes: Routes = [
  { path: '', component: PecrProdutoPecuariaComponent }
];

@NgModule({
  declarations: [PecrProdutoPecuariaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrProdutoPecuariaModule { }
