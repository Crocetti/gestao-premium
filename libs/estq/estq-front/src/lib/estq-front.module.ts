import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: 'estq-capa-movimento', loadChildren: () => import('./estq-capa-movimento/estq-capa-movimento.module').then(m => m.EstqCapaMovimentoModule) },
      { path: 'estq-fabricante-motor', loadChildren: () => import('./estq-fabricante-motor/estq-fabricante-motor.module').then(m => m.EstqFabricanteMotorModule) },
      { path: 'estq-grupo', loadChildren: () => import('./estq-grupo/estq-grupo.module').then(m => m.EstqGrupoModule) },
      { path: 'estq-item-movimento', loadChildren: () => import('./estq-item-movimento/estq-item-movimento.module').then(m => m.EstqItemMovimentoModule) },
      { path: 'estq-lote-validade', loadChildren: () => import('./estq-lote-validade/estq-lote-validade.module').then(m => m.EstqLoteValidadeModule) },
      { path: 'estq-maquina-equipamento', loadChildren: () => import('./estq-maquina-equipamento/estq-maquina-equipamento.module').then(m => m.EstqMaquinaEquipamentoModule) },
      { path: 'estq-marca', loadChildren: () => import('./estq-marca/estq-marca.module').then(m => m.EstqMarcaModule) },
      { path: 'estq-modelo', loadChildren: () => import('./estq-modelo/estq-modelo.module').then(m => m.EstqModeloModule) },
      { path: 'estq-numero-documento', loadChildren: () => import('./estq-numero-documento/estq-numero-documento.module').then(m => m.EstqNumeroDocumentoModule) },
      { path: 'estq-produto-saldo', loadChildren: () => import('./estq-produto-saldo/estq-produto-saldo.module').then(m => m.EstqProdutoSaldoModule) },
      { path: 'estq-saldo-centro-custo', loadChildren: () => import('./estq-saldo-centro-custo/estq-saldo-centro-custo.module').then(m => m.EstqSaldoCentroCustoModule) },
      { path: 'estq-subgrupo', loadChildren: () => import('./estq-subgrupo/estq-subgrupo.module').then(m => m.EstqSubgrupoModule) }
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class EstqFrontModule {}
