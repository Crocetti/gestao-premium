import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: 'core-corporacao', loadChildren: () => import('./core-corporacao/core-corporacao.module').then(m => m.CoreCorporacaoModule) },
      { path: 'core-empresa', loadChildren: () => import('./core-empresa/core-empresa.module').then(m => m.CoreEmpresaModule) },
      { path: 'core-unem-usuario', loadChildren: () => import('./core-unem-usuario/core-unem-usuario.module').then(m => m.CoreUnemUsuarioModule) },
      { path: 'core-unidade-empresarial', loadChildren: () => import('./core-unidade-empresarial/core-unidade-empresarial.module').then(m => m.CoreUnidadeEmpresarialModule) }
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class CoreFrontModule {}
