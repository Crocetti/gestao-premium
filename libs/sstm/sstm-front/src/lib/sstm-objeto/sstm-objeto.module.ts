import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SstmObjetoComponent } from './sstm-objeto.component';


const routes: Routes = [
  { path: '', component: SstmObjetoComponent }
];

@NgModule({
  declarations: [SstmObjetoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SstmObjetoModule { }
