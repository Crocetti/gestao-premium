import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrEventoSanitarioComponent } from './pecr-evento-sanitario.component';


const routes: Routes = [
  { path: '', component: PecrEventoSanitarioComponent }
];

@NgModule({
  declarations: [PecrEventoSanitarioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrEventoSanitarioModule { }
