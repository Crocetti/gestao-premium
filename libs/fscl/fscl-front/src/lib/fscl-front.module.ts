import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
        { path: 'fscl-cfop', loadChildren: () => import('./fscl-cfop/fscl-cfop.module').then(m => m.FsclCfopModule) },
        { path: 'fscl-cst', loadChildren: () => import('./fscl-cst/fscl-cst.module').then(m => m.FsclCstModule) },
        { path: 'fscl-documento', loadChildren: () => import('./fscl-documento/fscl-documento.module').then(m => m.FsclDocumentoModule) },
        { path: 'fscl-documento-item', loadChildren: () => import('./fscl-documento-item/fscl-documento-item.module').then(m => m.FsclDocumentoItemModule) },
        { path: 'fscl-documento-pessoa', loadChildren: () => import('./fscl-documento-pessoa/fscl-documento-pessoa.module').then(m => m.FsclDocumentoPessoaModule) },
        { path: 'fscl-item-fato-fiscal', loadChildren: () => import('./fscl-item-fato-fiscal/fscl-item-fato-fiscal.module').then(m => m.FsclItemFatoFiscalModule) },
        { path: 'fscl-ncms', loadChildren: () => import('./fscl-ncms/fscl-ncms.module').then(m => m.FsclNcmsModule) },
        { path: 'fscl-regime-tributario', loadChildren: () => import('./fscl-regime-tributario/fscl-regime-tributario.module').then(m => m.FsclRegimeTributarioModule) }
        /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class FsclFrontModule {}
