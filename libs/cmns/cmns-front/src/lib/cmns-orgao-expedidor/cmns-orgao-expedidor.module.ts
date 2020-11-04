import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsOrgaoExpedidorComponent } from './cmns-orgao-expedidor.component';


const routes: Routes = [
  { path: '', component: CmnsOrgaoExpedidorComponent }
];

@NgModule({
  declarations: [CmnsOrgaoExpedidorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsOrgaoExpedidorModule { }
