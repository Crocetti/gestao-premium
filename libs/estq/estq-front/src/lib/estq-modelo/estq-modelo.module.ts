import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EstqModeloComponent } from './estq-modelo.component';


const routes: Routes = [
  { path: '', component: EstqModeloComponent }
];

@NgModule({
  declarations: [EstqModeloComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EstqModeloModule { }
