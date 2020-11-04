import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CdstTransportadoraComponent } from './cdst-transportadora.component';


const routes: Routes = [
  { path: '', component: CdstTransportadoraComponent }
];

@NgModule({
  declarations: [CdstTransportadoraComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CdstTransportadoraModule { }
