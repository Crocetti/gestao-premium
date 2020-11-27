import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecfContadorComponent } from './pecf-contador.component';


const routes: Routes = [
  { path: '', component: PecfContadorComponent }
];

@NgModule({
  declarations: [PecfContadorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecfContadorModule { }
