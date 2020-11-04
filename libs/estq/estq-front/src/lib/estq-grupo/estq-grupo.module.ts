import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EstqGrupoComponent } from './estq-grupo.component';


const routes: Routes = [
  { path: '', component: EstqGrupoComponent }
];

@NgModule({
  declarations: [EstqGrupoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EstqGrupoModule { }
