import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrAfixosComponent } from './pecr-afixos.component';


const routes: Routes = [
  { path: '', component: PecrAfixosComponent }
];

@NgModule({
  declarations: [PecrAfixosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrAfixosModule { }
