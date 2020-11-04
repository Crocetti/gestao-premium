import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsNacionalidadeComponent } from './cmns-nacionalidade.component';


const routes: Routes = [
  { path: '', component: CmnsNacionalidadeComponent }
];

@NgModule({
  declarations: [CmnsNacionalidadeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsNacionalidadeModule { }
