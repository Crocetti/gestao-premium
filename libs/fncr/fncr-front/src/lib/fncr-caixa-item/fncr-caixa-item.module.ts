import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FncrCaixaItemComponent } from './fncr-caixa-item.component';


const routes: Routes = [
  { path: '', component: FncrCaixaItemComponent }
];

@NgModule({
  declarations: [FncrCaixaItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FncrCaixaItemModule { }
