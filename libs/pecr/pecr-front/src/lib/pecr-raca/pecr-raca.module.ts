import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrRacaComponent } from './pecr-raca.component';


const routes: Routes = [
  { path: '', component: PecrRacaComponent }
];

@NgModule({
  declarations: [PecrRacaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrRacaModule { }
