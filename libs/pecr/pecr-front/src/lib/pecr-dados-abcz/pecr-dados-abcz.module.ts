import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrDadosAbczComponent } from './pecr-dados-abcz.component';


const routes: Routes = [
  { path: '', component: PecrDadosAbczComponent }
];

@NgModule({
  declarations: [PecrDadosAbczComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrDadosAbczModule { }
