import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FsclDocumentoComponent } from './fscl-documento.component';


const routes: Routes = [
  { path: '', component: FsclDocumentoComponent }
];

@NgModule({
  declarations: [FsclDocumentoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FsclDocumentoModule { }
