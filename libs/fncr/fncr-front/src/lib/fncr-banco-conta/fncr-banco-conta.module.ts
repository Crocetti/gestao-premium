import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrBancoContaComponent } from './fncr-banco-conta.component';


const routes: Routes = [
  { path: '', component: FncrBancoContaComponent }
];

@NgModule({
  declarations: [FncrBancoContaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrBancoContaModule { }
