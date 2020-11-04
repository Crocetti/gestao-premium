import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreCorporacaoComponent } from './core-corporacao.component';


const routes: Routes = [
  { path: '', component: CoreCorporacaoComponent }
];

@NgModule({
  declarations: [CoreCorporacaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreCorporacaoModule { }
