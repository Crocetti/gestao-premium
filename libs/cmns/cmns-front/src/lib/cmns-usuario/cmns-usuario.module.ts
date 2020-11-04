import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsUsuarioComponent } from './cmns-usuario.component';


const routes: Routes = [
  { path: '', component: CmnsUsuarioComponent }
];

@NgModule({
  declarations: [CmnsUsuarioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsUsuarioModule { }
