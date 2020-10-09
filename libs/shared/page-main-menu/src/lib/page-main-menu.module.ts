import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageMainMenuComponent } from './page-main-menu.component';
import { PrimengAllModule } from '@gpremium/primeng-all';


@NgModule({
  imports: [
    CommonModule,
    PrimengAllModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [PageMainMenuComponent],
  exports: [PageMainMenuComponent],
})
export class PageMainMenuModule {}
