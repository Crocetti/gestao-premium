import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CdstProdutorRuralComponent } from './cdst-produtor-rural.component';


const routes: Routes = [
  { path: '', component: CdstProdutorRuralComponent }
];

@NgModule({
  declarations: [CdstProdutorRuralComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CdstProdutorRuralModule { }
