import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmnsPessoaEmailComponent } from './cmns-pessoa-email.component';


const routes: Routes = [
  { path: '', component: CmnsPessoaEmailComponent }
];

@NgModule({
  declarations: [CmnsPessoaEmailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmnsPessoaEmailModule { }
