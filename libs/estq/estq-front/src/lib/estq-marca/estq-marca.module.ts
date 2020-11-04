import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EstqMarcaComponent } from './estq-marca.component';


const routes: Routes = [
  { path: '', component: EstqMarcaComponent }
];

@NgModule({
  declarations: [EstqMarcaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EstqMarcaModule { }
