import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengAllModule } from '@gpremium/primeng-all';
/**
 * components
 */
import { MainPageMenuComponent } from './main-page-menu/main-page-menu.component';
import { MainPageNomenuComponent } from './main-page-nomenu/main-page-nomenu.component';

@NgModule({
    imports: [
        CommonModule,
        PrimengAllModule
    ],
    declarations: [
        MainPageMenuComponent,
        MainPageNomenuComponent
    ],
    exports: [
        MainPageMenuComponent,
        MainPageNomenuComponent
    ],
})
export class MainsModule {}
