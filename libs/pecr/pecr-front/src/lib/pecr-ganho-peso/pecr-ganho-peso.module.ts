import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrGanhoPesoComponent } from './pecr-ganho-peso.component';


const routes: Routes = [
  { path: '', component: PecrGanhoPesoComponent }
];

@NgModule({
  declarations: [PecrGanhoPesoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrGanhoPesoModule { }
