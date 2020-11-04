import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsCargoComponent } from './cmns-cargo.component';


const routes: Routes = [
  { path: '', component: CmnsCargoComponent }
];

@NgModule({
  declarations: [CmnsCargoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsCargoModule { }
