import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CdstClienteComponent } from './cdst-cliente.component';


const routes: Routes = [
  { path: '', component: CdstClienteComponent }
];

@NgModule({
  declarations: [CdstClienteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CdstClienteModule { }
