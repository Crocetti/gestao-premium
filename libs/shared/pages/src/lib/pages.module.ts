import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengAllModule } from '@gpremium/primeng-all';
import { PagesComponent } from './pages.component';
import { MainPageMenuComponent } from './main-page-menu/main-page-menu.component';
import { MainPageNomenuComponent } from './main-page-nomenu/main-page-nomenu.component';


@NgModule({
  imports: [
    CommonModule,
    PrimengAllModule,
  ],
  declarations: [PagesComponent, MainPageMenuComponent, MainPageNomenuComponent ],
  exports: [PagesComponent, MainPageMenuComponent, MainPageNomenuComponent],
})
export class PagesModule {}
