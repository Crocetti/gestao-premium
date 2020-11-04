import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CdstProdutoComponent } from './cdst-produto.component';


const routes: Routes = [
  { path: '', component: CdstProdutoComponent }
];

@NgModule({
  declarations: [CdstProdutoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CdstProdutoModule { }
