import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreUnemUsuarioComponent } from './core-unem-usuario.component';


const routes: Routes = [
  { path: '', component: CoreUnemUsuarioComponent }
];

@NgModule({
  declarations: [CoreUnemUsuarioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreUnemUsuarioModule { }
