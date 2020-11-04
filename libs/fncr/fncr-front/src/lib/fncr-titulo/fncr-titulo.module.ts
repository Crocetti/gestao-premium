import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrTituloComponent } from './fncr-titulo.component';


const routes: Routes = [
  { path: '', component: FncrTituloComponent }
];

@NgModule({
  declarations: [FncrTituloComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrTituloModule { }
