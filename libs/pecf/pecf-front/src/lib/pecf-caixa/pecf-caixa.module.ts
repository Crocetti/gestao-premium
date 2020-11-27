import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecfCaixaComponent } from './pecf-caixa.component';


const routes: Routes = [
  { path: '', component: PecfCaixaComponent }
];

@NgModule({
  declarations: [PecfCaixaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecfCaixaModule { }
