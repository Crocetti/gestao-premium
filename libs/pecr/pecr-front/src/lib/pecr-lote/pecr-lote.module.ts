import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrLoteComponent } from './pecr-lote.component';


const routes: Routes = [
  { path: '', component: PecrLoteComponent }
];

@NgModule({
  declarations: [PecrLoteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrLoteModule { }
