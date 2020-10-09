import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageMainNomenuComponent } from './page-main-nomenu.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [PageMainNomenuComponent],
  exports: [PageMainNomenuComponent],
})
export class PageMainNomenuModule {}
