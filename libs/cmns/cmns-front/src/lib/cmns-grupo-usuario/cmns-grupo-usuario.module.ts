import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsGrupoUsuarioComponent } from './cmns-grupo-usuario.component';


const routes: Routes = [
  { path: '', component: CmnsGrupoUsuarioComponent }
];

@NgModule({
  declarations: [CmnsGrupoUsuarioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsGrupoUsuarioModule { }
