import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsTipoDocumentoComponent } from './cmns-tipo-documento.component';


const routes: Routes = [
  { path: '', component: CmnsTipoDocumentoComponent }
];

@NgModule({
  declarations: [CmnsTipoDocumentoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsTipoDocumentoModule { }
