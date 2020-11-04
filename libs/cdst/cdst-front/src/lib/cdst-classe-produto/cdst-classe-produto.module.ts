import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CdstClasseProdutoComponent } from './cdst-classe-produto.component';


const routes: Routes = [
  { path: '', component: CdstClasseProdutoComponent }
];

@NgModule({
  declarations: [CdstClasseProdutoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CdstClasseProdutoModule { }
