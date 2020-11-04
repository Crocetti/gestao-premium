import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FsclCstComponent } from './fscl-cst.component';


const routes: Routes = [
  { path: '', component: FsclCstComponent }
];

@NgModule({
  declarations: [FsclCstComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FsclCstModule { }
