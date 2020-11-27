import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PecrTipoEventoSanitarioComponent } from './pecr-tipo-evento-sanitario.component';


const routes: Routes = [
  { path: '', component: PecrTipoEventoSanitarioComponent }
];

@NgModule({
  declarations: [PecrTipoEventoSanitarioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PecrTipoEventoSanitarioModule { }
