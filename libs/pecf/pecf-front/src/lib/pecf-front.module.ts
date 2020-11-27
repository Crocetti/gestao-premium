import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,

        RouterModule.forChild([
            {
                path: 'pecf-aliquota',
                loadChildren: () =>
                    import('./pecf-aliquota/pecf-aliquota.module').then(
                        (m) => m.PecfAliquotaModule
                    ),
            },
            {
                path: 'pecf-caixa',
                loadChildren: () =>
                    import('./pecf-caixa/pecf-caixa.module').then(
                        (m) => m.PecfCaixaModule
                    ),
            },
            {
                path: 'pecf-configuracao',
                loadChildren: () =>
                    import('./pecf-configuracao/pecf-configuracao.module').then(
                        (m) => m.PecfConfiguracaoModule
                    ),
            },
            {
                path: 'pecf-contador',
                loadChildren: () =>
                    import('./pecf-contador/pecf-contador.module').then(
                        (m) => m.PecfContadorModule
                    ),
            },
            /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
        ]),
    ],
})
export class PecfFrontModule {}
