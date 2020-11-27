import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecfConfiguracaoComponent } from './pecf-configuracao.component';


const routes: Routes = [
  { path: '', component: PecfConfiguracaoComponent }
];

@NgModule({
  declarations: [PecfConfiguracaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecfConfiguracaoModule { }
