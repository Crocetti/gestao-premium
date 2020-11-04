import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsRamoAtividadeComponent } from './cmns-ramo-atividade.component';


const routes: Routes = [
  { path: '', component: CmnsRamoAtividadeComponent }
];

@NgModule({
  declarations: [CmnsRamoAtividadeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsRamoAtividadeModule { }
