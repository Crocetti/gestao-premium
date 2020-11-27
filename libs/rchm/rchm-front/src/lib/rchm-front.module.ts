import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: 'rchm-funcionario', loadChildren: () => import('./rchm-funcionario/rchm-funcionario.module').then(m => m.RchmFuncionarioModule) },
      { path: 'rchm-funcionario-historico', loadChildren: () => import('./rchm-funcionario-historico/rchm-funcionario-historico.module').then(m => m.RchmFuncionarioHistoricoModule) }
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class RchmFrontModule {}
