import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsBairroComponent } from './cmns-bairro.component';


const routes: Routes = [
  { path: '', component: CmnsBairroComponent }
];

@NgModule({
  declarations: [CmnsBairroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsBairroModule { }
