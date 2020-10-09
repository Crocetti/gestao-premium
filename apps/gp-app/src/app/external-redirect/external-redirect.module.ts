import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalRedirectRoutingModule } from './external-redirect-routing.module';
import { ExternalRedirectComponent } from './external-redirect.component';

@NgModule({
    imports: [CommonModule, ExternalRedirectRoutingModule],
    declarations: [ExternalRedirectComponent],
    exports: [
        ExternalRedirectComponent
    ]
})
export class ExternalRedirectModule {}
