import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SstmSistemaComponent } from './sstm-sistema.component';


const routes: Routes = [
  { path: '', component: SstmSistemaComponent }
];

@NgModule({
  declarations: [SstmSistemaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SstmSistemaModule { }
