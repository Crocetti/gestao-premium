import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrCaixaComponent } from './fncr-caixa.component';


const routes: Routes = [
  { path: '', component: FncrCaixaComponent }
];

@NgModule({
  declarations: [FncrCaixaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrCaixaModule { }
