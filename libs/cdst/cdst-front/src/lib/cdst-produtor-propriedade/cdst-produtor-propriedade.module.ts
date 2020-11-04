import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CdstProdutorPropriedadeComponent } from './cdst-produtor-propriedade.component';


const routes: Routes = [
  { path: '', component: CdstProdutorPropriedadeComponent }
];

@NgModule({
  declarations: [CdstProdutorPropriedadeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CdstProdutorPropriedadeModule { }
