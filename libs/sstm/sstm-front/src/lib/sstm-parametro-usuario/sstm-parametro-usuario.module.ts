import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SstmParametroUsuarioComponent } from './sstm-parametro-usuario.component';


const routes: Routes = [
  { path: '', component: SstmParametroUsuarioComponent }
];

@NgModule({
  declarations: [SstmParametroUsuarioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SstmParametroUsuarioModule { }
