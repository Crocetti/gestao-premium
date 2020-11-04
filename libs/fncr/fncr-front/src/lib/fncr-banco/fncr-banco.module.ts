import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrBancoComponent } from './fncr-banco.component';


const routes: Routes = [
  { path: '', component: FncrBancoComponent }
];

@NgModule({
  declarations: [FncrBancoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrBancoModule { }
