import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: 'sstm-database', loadChildren: () => import('./sstm-database/sstm-database.module').then(m => m.SstmDatabaseModule) },
      { path: 'sstm-objeto', loadChildren: () => import('./sstm-objeto/sstm-objeto.module').then(m => m.SstmObjetoModule) },
      { path: 'sstm-objeto-versao', loadChildren: () => import('./sstm-objeto-versao/sstm-objeto-versao.module').then(m => m.SstmObjetoVersaoModule) },
      { path: 'sstm-parametro', loadChildren: () => import('./sstm-parametro/sstm-parametro.module').then(m => m.SstmParametroModule) },
      { path: 'sstm-parametro-corporacao', loadChildren: () => import('./sstm-parametro-corporacao/sstm-parametro-corporacao.module').then(m => m.SstmParametroCorporacaoModule) },
      { path: 'sstm-parametro-empresa', loadChildren: () => import('./sstm-parametro-empresa/sstm-parametro-empresa.module').then(m => m.SstmParametroEmpresaModule) },
      { path: 'sstm-parametro-sistema', loadChildren: () => import('./sstm-parametro-sistema/sstm-parametro-sistema.module').then(m => m.SstmParametroSistemaModule) },
      { path: 'sstm-parametro-usuario', loadChildren: () => import('./sstm-parametro-usuario/sstm-parametro-usuario.module').then(m => m.SstmParametroUsuarioModule) },
      { path: 'sstm-scripts', loadChildren: () => import('./sstm-scripts/sstm-scripts.module').then(m => m.SstmScriptsModule) },
      { path: 'sstm-sistema', loadChildren: () => import('./sstm-sistema/sstm-sistema.module').then(m => m.SstmSistemaModule) },
      { path: 'sstm-sistema-corporacao', loadChildren: () => import('./sstm-sistema-corporacao/sstm-sistema-corporacao.module').then(m => m.SstmSistemaCorporacaoModule) },
      { path: 'sstm-sistema-tabela', loadChildren: () => import('./sstm-sistema-tabela/sstm-sistema-tabela.module').then(m => m.SstmSistemaTabelaModule) },
      { path: 'sstm-sistema-versao', loadChildren: () => import('./sstm-sistema-versao/sstm-sistema-versao.module').then(m => m.SstmSistemaVersaoModule) },
      { path: 'sstm-sistemaversao-objetoversao', loadChildren: () => import('./sstm-sistemaversao-objetoversao/sstm-sistemaversao-objetoversao.module').then(m => m.SstmSistemaversaoObjetoversaoModule) }
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class SstmFrontModule {}
