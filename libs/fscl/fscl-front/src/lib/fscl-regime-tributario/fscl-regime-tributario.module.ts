import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FsclRegimeTributarioComponent } from './fscl-regime-tributario.component';


const routes: Routes = [
  { path: '', component: FsclRegimeTributarioComponent }
];

@NgModule({
  declarations: [FsclRegimeTributarioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FsclRegimeTributarioModule { }
