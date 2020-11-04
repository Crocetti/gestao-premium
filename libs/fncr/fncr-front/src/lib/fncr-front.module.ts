import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: 'fncr-banco', loadChildren: () => import('./fncr-banco/fncr-banco.module').then(m => m.FncrBancoModule) },
      { path: 'fncr-banco-conta', loadChildren: () => import('./fncr-banco-conta/fncr-banco-conta.module').then(m => m.FncrBancoContaModule) },
      { path: 'fncr-banco-conta-saldo', loadChildren: () => import('./fncr-banco-conta-saldo/fncr-banco-conta-saldo.module').then(m => m.FncrBancoContaSaldoModule) },
      { path: 'fncr-banco-modelo-boleto', loadChildren: () => import('./fncr-banco-modelo-boleto/fncr-banco-modelo-boleto.module').then(m => m.FncrBancoModeloBoletoModule) },
      { path: 'fncr-caixa', loadChildren: () => import('./fncr-caixa/fncr-caixa.module').then(m => m.FncrCaixaModule) },
      { path: 'fncr-caixa-item', loadChildren: () => import('./fncr-caixa-item/fncr-caixa-item.module').then(m => m.FncrCaixaItemModule) },
      { path: 'fncr-caixa-movimento', loadChildren: () => import('./fncr-caixa-movimento/fncr-caixa-movimento.module').then(m => m.FncrCaixaMovimentoModule) },
      { path: 'fncr-composicao-plano-conta', loadChildren: () => import('./fncr-composicao-plano-conta/fncr-composicao-plano-conta.module').then(m => m.FncrComposicaoPlanoContaModule) },
      { path: 'fncr-forma-vencimento', loadChildren: () => import('./fncr-forma-vencimento/fncr-forma-vencimento.module').then(m => m.FncrFormaVencimentoModule) },
      { path: 'fncr-historico-padrao', loadChildren: () => import('./fncr-historico-padrao/fncr-historico-padrao.module').then(m => m.FncrHistoricoPadraoModule) },
      { path: 'fncr-nivel-plano-conta', loadChildren: () => import('./fncr-nivel-plano-conta/fncr-nivel-plano-conta.module').then(m => m.FncrNivelPlanoContaModule) },
      { path: 'fncr-nota-fiscal-titulo', loadChildren: () => import('./fncr-nota-fiscal-titulo/fncr-nota-fiscal-titulo.module').then(m => m.FncrNotaFiscalTituloModule) },
      { path: 'fncr-parcela', loadChildren: () => import('./fncr-parcela/fncr-parcela.module').then(m => m.FncrParcelaModule) },
      { path: 'fncr-parcela-baixa', loadChildren: () => import('./fncr-parcela-baixa/fncr-parcela-baixa.module').then(m => m.FncrParcelaBaixaModule) },
      { path: 'fncr-plano-conta', loadChildren: () => import('./fncr-plano-conta/fncr-plano-conta.module').then(m => m.FncrPlanoContaModule) },
      { path: 'fncr-plano-orcamentario', loadChildren: () => import('./fncr-plano-orcamentario/fncr-plano-orcamentario.module').then(m => m.FncrPlanoOrcamentarioModule) },
      { path: 'fncr-tabela-preco', loadChildren: () => import('./fncr-tabela-preco/fncr-tabela-preco.module').then(m => m.FncrTabelaPrecoModule) },
      { path: 'fncr-tabela-preco-item', loadChildren: () => import('./fncr-tabela-preco-item/fncr-tabela-preco-item.module').then(m => m.FncrTabelaPrecoItemModule) },
      { path: 'fncr-titulo', loadChildren: () => import('./fncr-titulo/fncr-titulo.module').then(m => m.FncrTituloModule) },
      { path: 'fncr-titulo-centro-custo', loadChildren: () => import('./fncr-titulo-centro-custo/fncr-titulo-centro-custo.module').then(m => m.FncrTituloCentroCustoModule) },
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class FncrFrontModule {}
