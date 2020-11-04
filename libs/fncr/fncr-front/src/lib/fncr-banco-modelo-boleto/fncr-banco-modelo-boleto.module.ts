import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrBancoModeloBoletoComponent } from './fncr-banco-modelo-boleto.component';


const routes: Routes = [
  { path: '', component: FncrBancoModeloBoletoComponent }
];

@NgModule({
  declarations: [FncrBancoModeloBoletoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrBancoModeloBoletoModule { }
