import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: 'srvc-ordem-servico', loadChildren: () => import('./srvc-ordem-servico/srvc-ordem-servico.module').then(m => m.SrvcOrdemServicoModule) },
      { path: 'srvc-ordem-servico-item', loadChildren: () => import('./srvc-ordem-servico-item/srvc-ordem-servico-item.module').then(m => m.SrvcOrdemServicoItemModule) },
      { path: 'srvc-servico', loadChildren: () => import('./srvc-servico/srvc-servico.module').then(m => m.SrvcServicoModule) },
      { path: 'srvc-servico-composicao', loadChildren: () => import('./srvc-servico-composicao/srvc-servico-composicao.module').then(m => m.SrvcServicoComposicaoModule) },
      { path: 'srvc-servico-maq-equip', loadChildren: () => import('./srvc-servico-maq-equip/srvc-servico-maq-equip.module').then(m => m.SrvcServicoMaqEquipModule) },
      { path: 'srvc-servico-pecas', loadChildren: () => import('./srvc-servico-pecas/srvc-servico-pecas.module').then(m => m.SrvcServicoPecasModule) }
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class SrvcFrontModule {}
