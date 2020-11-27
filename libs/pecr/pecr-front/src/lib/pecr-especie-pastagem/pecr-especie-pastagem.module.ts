import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrEspeciePastagemComponent } from './pecr-especie-pastagem.component';


const routes: Routes = [
  { path: '', component: PecrEspeciePastagemComponent }
];

@NgModule({
  declarations: [PecrEspeciePastagemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrEspeciePastagemModule { }
