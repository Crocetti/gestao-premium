import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsLogradouroComponent } from './cmns-logradouro.component';


const routes: Routes = [
  { path: '', component: CmnsLogradouroComponent }
];

@NgModule({
  declarations: [CmnsLogradouroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsLogradouroModule { }
