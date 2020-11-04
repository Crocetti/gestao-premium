import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrParcelaBaixaComponent } from './fncr-parcela-baixa.component';


const routes: Routes = [
  { path: '', component: FncrParcelaBaixaComponent }
];

@NgModule({
  declarations: [FncrParcelaBaixaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrParcelaBaixaModule { }
