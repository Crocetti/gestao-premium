import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecfAliquotaComponent } from './pecf-aliquota.component';


const routes: Routes = [
  { path: '', component: PecfAliquotaComponent }
];

@NgModule({
  declarations: [PecfAliquotaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecfAliquotaModule { }
