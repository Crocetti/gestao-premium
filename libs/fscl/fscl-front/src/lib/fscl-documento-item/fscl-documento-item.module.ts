import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FsclDocumentoItemComponent } from './fscl-documento-item.component';


const routes: Routes = [
  { path: '', component: FsclDocumentoItemComponent }
];

@NgModule({
  declarations: [FsclDocumentoItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FsclDocumentoItemModule { }
