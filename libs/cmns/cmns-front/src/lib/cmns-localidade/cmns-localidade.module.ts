import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsLocalidadeComponent } from './cmns-localidade.component';


const routes: Routes = [
  { path: '', component: CmnsLocalidadeComponent }
];

@NgModule({
  declarations: [CmnsLocalidadeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsLocalidadeModule { }
