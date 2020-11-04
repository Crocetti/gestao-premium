import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsPaisComponent } from './cmns-pais.component';


const routes: Routes = [
  { path: '', component: CmnsPaisComponent }
];

@NgModule({
  declarations: [CmnsPaisComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsPaisModule { }
