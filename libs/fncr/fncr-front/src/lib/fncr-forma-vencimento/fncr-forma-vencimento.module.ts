import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrFormaVencimentoComponent } from './fncr-forma-vencimento.component';


const routes: Routes = [
  { path: '', component: FncrFormaVencimentoComponent }
];

@NgModule({
  declarations: [FncrFormaVencimentoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrFormaVencimentoModule { }
