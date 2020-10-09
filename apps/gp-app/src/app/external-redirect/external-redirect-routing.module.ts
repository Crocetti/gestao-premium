import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExternalRedirectComponent } from './external-redirect.component';

import { ActivatedRouteSnapshot } from '@angular/router';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [
    {
        path: '',
        resolve: {
            url: externalUrlProvider,
        },
        // We need a component here because we cannot define the route otherwise
        component: ExternalRedirectComponent,
    },
];

export function valueExpor(route: ActivatedRouteSnapshot): any {
    const externalUrl = route.paramMap.get('externalUrl');
    window.open(externalUrl, '_self');
}

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {
        provide: externalUrlProvider,
        useValue: valueExpor
    }
],

})
export class ExternalRedirectRoutingModule { }
