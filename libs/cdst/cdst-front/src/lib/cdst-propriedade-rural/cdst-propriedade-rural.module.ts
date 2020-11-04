import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CdstPropriedadeRuralComponent } from './cdst-propriedade-rural.component';


const routes: Routes = [
  { path: '', component: CdstPropriedadeRuralComponent }
];

@NgModule({
  declarations: [CdstPropriedadeRuralComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CdstPropriedadeRuralModule { }
