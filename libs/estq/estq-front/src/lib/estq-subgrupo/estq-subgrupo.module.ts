import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EstqSubgrupoComponent } from './estq-subgrupo.component';


const routes: Routes = [
  { path: '', component: EstqSubgrupoComponent }
];

@NgModule({
  declarations: [EstqSubgrupoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EstqSubgrupoModule { }
