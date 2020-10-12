import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {  PagesModule } from '@gpremium/pages';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        PagesModule,
        RouterModule.forRoot(
            [
                {
                    path: '',
                    redirectTo: '/home/menu',
                    pathMatch: 'full',
                },
                {
                    path: 'home',
                    loadChildren: () => import("@gpremium/home-pages").then((m) => m.HomePagesModule)
                },
                {
                    path: 'extRedi',
                    loadChildren: () =>
                        import('./external-redirect/external-redirect.module').then((m) => m.ExternalRedirectModule),
                },
            ],
            { initialNavigation: 'enabled' }
        ),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
