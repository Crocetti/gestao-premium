import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EstqLoteValidadeComponent } from './estq-lote-validade.component';


const routes: Routes = [
  { path: '', component: EstqLoteValidadeComponent }
];

@NgModule({
  declarations: [EstqLoteValidadeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EstqLoteValidadeModule { }
