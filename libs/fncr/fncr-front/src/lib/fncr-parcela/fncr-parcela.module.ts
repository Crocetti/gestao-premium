import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrParcelaComponent } from './fncr-parcela.component';


const routes: Routes = [
  { path: '', component: FncrParcelaComponent }
];

@NgModule({
  declarations: [FncrParcelaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrParcelaModule { }
