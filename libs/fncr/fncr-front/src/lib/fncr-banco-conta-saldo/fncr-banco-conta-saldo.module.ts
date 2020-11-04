import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrBancoContaSaldoComponent } from './fncr-banco-conta-saldo.component';


const routes: Routes = [
  { path: '', component: FncrBancoContaSaldoComponent }
];

@NgModule({
  declarations: [FncrBancoContaSaldoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrBancoContaSaldoModule { }
