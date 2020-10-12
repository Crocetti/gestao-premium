import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengAllModule } from '@gpremium/primeng-all';
import { PagesComponent } from './pages.component';
import { MainPageMenuComponent } from './main-page-menu/main-page-menu.component';
import { MainPageNomenuComponent } from './main-page-nomenu/main-page-nomenu.component';
import { PageInfoComponent } from './page-info/page-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        CommonModule,
        PrimengAllModule,
        FontAwesomeModule,
    ],
    declarations: [
        PagesComponent,
        MainPageMenuComponent,
        MainPageNomenuComponent,
        PageInfoComponent,
    ],
    exports: [
        PagesComponent,
        MainPageMenuComponent,
        MainPageNomenuComponent,
        PageInfoComponent
    ],
})
export class PagesModule {}
