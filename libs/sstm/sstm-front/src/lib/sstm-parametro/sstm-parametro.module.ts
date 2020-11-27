import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SstmParametroComponent } from './sstm-parametro.component';


const routes: Routes = [
  { path: '', component: SstmParametroComponent }
];

@NgModule({
  declarations: [SstmParametroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SstmParametroModule { }
