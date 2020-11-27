import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SstmScriptsComponent } from './sstm-scripts.component';


const routes: Routes = [
  { path: '', component: SstmScriptsComponent }
];

@NgModule({
  declarations: [SstmScriptsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SstmScriptsModule { }
