import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FsclItemFatoFiscalComponent } from './fscl-item-fato-fiscal.component';


const routes: Routes = [
  { path: '', component: FsclItemFatoFiscalComponent }
];

@NgModule({
  declarations: [FsclItemFatoFiscalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FsclItemFatoFiscalModule { }
