import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengAllModule } from '@gpremium/primeng-all';
import { RouterModule } from '@angular/router';
import { HomePagesComponent } from './home-pages.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';

@NgModule({
    imports: [
        CommonModule,
        PrimengAllModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePagesComponent,
                children: [
                    { path: '**', redirectTo: '/home/menu'}
                ]
            },
            { path: 'menu', component: HomeMenuComponent},
        ]),
    ],
    declarations:[ HomePagesComponent, HomeMenuComponent ],
    exports:[ HomePagesComponent, HomeMenuComponent ]
})
export class HomePagesModule {}
