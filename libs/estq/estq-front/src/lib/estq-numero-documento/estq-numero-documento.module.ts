import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EstqNumeroDocumentoComponent } from './estq-numero-documento.component';


const routes: Routes = [
  { path: '', component: EstqNumeroDocumentoComponent }
];

@NgModule({
  declarations: [EstqNumeroDocumentoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EstqNumeroDocumentoModule { }
