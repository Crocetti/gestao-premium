import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FsclCfopComponent } from './fscl-cfop.component';


const routes: Routes = [
  { path: '', component: FsclCfopComponent }
];

@NgModule({
  declarations: [FsclCfopComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FsclCfopModule { }
