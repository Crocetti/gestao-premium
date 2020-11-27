import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrAptidaoComponent } from './pecr-aptidao.component';


const routes: Routes = [
  { path: '', component: PecrAptidaoComponent }
];

@NgModule({
  declarations: [PecrAptidaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrAptidaoModule { }
