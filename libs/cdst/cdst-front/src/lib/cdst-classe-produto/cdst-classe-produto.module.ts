import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CdstClasseProdutoComponent } from './cdst-classe-produto.component';
import { CdstClasseProdutoEditComponent } from './cdst-classe-produto-edit/cdst-classe-produto-edit.component';


const routes: Routes = [
  { path: '', component: CdstClasseProdutoComponent }
];

@NgModule({
  declarations: [CdstClasseProdutoComponent, CdstClasseProdutoEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [CdstClasseProdutoEditComponent]
})
export class CdstClasseProdutoModule { }
