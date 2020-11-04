import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FsclNcmsComponent } from './fscl-ncms.component';


const routes: Routes = [
  { path: '', component: FsclNcmsComponent }
];

@NgModule({
  declarations: [FsclNcmsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FsclNcmsModule { }
