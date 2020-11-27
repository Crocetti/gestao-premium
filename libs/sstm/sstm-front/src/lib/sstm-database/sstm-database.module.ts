import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SstmDatabaseComponent } from './sstm-database.component';


const routes: Routes = [
  { path: '', component: SstmDatabaseComponent }
];

@NgModule({
  declarations: [SstmDatabaseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SstmDatabaseModule { }
