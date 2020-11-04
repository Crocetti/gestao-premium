import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CdstUnidadeMedidaComponent } from './cdst-unidade-medida.component';


const routes: Routes = [
  { path: '', component: CdstUnidadeMedidaComponent }
];

@NgModule({
  declarations: [CdstUnidadeMedidaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CdstUnidadeMedidaModule { }
