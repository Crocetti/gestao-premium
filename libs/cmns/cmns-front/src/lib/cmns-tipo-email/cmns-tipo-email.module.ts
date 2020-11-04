import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsTipoEmailComponent } from './cmns-tipo-email.component';


const routes: Routes = [
  { path: '', component: CmnsTipoEmailComponent }
];

@NgModule({
  declarations: [CmnsTipoEmailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsTipoEmailModule { }
