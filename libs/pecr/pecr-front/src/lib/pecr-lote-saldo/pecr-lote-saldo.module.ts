import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrLoteSaldoComponent } from './pecr-lote-saldo.component';


const routes: Routes = [
  { path: '', component: PecrLoteSaldoComponent }
];

@NgModule({
  declarations: [PecrLoteSaldoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrLoteSaldoModule { }
