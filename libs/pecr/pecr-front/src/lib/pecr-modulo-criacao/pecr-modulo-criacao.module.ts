import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrModuloCriacaoComponent } from './pecr-modulo-criacao.component';


const routes: Routes = [
  { path: '', component: PecrModuloCriacaoComponent }
];

@NgModule({
  declarations: [PecrModuloCriacaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrModuloCriacaoModule { }
