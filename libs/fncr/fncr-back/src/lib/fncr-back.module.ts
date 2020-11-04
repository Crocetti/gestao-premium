import { Module } from '@nestjs/common';
import { FncrBancoService } from './fncr-banco/fncr-banco.service';
import { FncrBancoContaService } from './fncr-banco-conta/fncr-banco-conta.service';
import { FncrBancoContaSaldoService } from './fncr-banco-conta-saldo/fncr-banco-conta-saldo.service';
import { FncrBancoModeloBoletoService } from './fncr-banco-modelo-boleto/fncr-banco-modelo-boleto.service';
import { FncrCaixaService } from './fncr-caixa/fncr-caixa.service';
import { FncrCaixaMovimentoService } from './fncr-caixa-movimento/fncr-caixa-movimento.service';
import { FncrCaixaItemService } from './fncr-caixa-item/fncr-caixa-item.service';
import { FncrPlanoContaService } from './fncr-plano-conta/fncr-plano-conta.service';
import { FncrComposicaoPlanoContaService } from './fncr-composicao-plano-conta/fncr-composicao-plano-conta.service';
import { FncrFormaVencimentoService } from './fncr-forma-vencimento/fncr-forma-vencimento.service';
import { FncrHistoricoPadraoService } from './fncr-historico-padrao/fncr-historico-padrao.service';
import { FncrNivelPlanoContaService } from './fncr-nivel-plano-conta/fncr-nivel-plano-conta.service';
import { FncrTituloService } from './fncr-titulo/fncr-titulo.service';
import { FncrTituloCentroCustoService } from './fncr-titulo-centro-custo/fncr-titulo-centro-custo.service';
import { FncrNotaFiscalTituloService } from './fncr-nota-fiscal-titulo/fncr-nota-fiscal-titulo.service';
import { FncrParcelaService } from './fncr-parcela/fncr-parcela.service';
import { FncrParcelaBaixaService } from './fncr-parcela-baixa/fncr-parcela-baixa.service';
import { FncrPlanoOrcamentarioService } from './fncr-plano-orcamentario/fncr-plano-orcamentario.service';
import { FncrTabelaPrecoService } from './fncr-tabela-preco/fncr-tabela-preco.service';
import { FncrTabelaPrecoItemService } from './fncr-tabela-preco-item/fncr-tabela-preco-item.service';
import { FncrBancoController } from './fncr-banco/fncr-banco.controller';
import { FncrBancoContaController } from './fncr-banco-conta/fncr-banco-conta.controller';
import { FncrBancoContaSaldoController } from './fncr-banco-conta-saldo/fncr-banco-conta-saldo.controller';
import { FncrBancoModeloBoletoController } from './fncr-banco-modelo-boleto/fncr-banco-modelo-boleto.controller';
import { FncrCaixaController } from './fncr-caixa/fncr-caixa.controller';
import { FncrCaixaItemController } from './fncr-caixa-item/fncr-caixa-item.controller';
import { FncrCaixaMovimentoController } from './fncr-caixa-movimento/fncr-caixa-movimento.controller';
import { FncrComposicaoPlanoContaController } from './fncr-composicao-plano-conta/fncr-composicao-plano-conta.controller';
import { FncrFormaVencimentoController } from './fncr-forma-vencimento/fncr-forma-vencimento.controller';
import { FncrHistoricoPadraoController } from './fncr-historico-padrao/fncr-historico-padrao.controller';
import { FncrNivelPlanoContaController } from './fncr-nivel-plano-conta/fncr-nivel-plano-conta.controller';
import { FncrNotaFiscalTituloController } from './fncr-nota-fiscal-titulo/fncr-nota-fiscal-titulo.controller';
import { FncrParcelaController } from './fncr-parcela/fncr-parcela.controller';
import { FncrParcelaBaixaController } from './fncr-parcela-baixa/fncr-parcela-baixa.controller';
import { FncrPlanoContaController } from './fncr-plano-conta/fncr-plano-conta.controller';
import { FncrPlanoOrcamentarioController } from './fncr-plano-orcamentario/fncr-plano-orcamentario.controller';
import { FncrTabelaPrecoController } from './fncr-tabela-preco/fncr-tabela-preco.controller';
import { FncrTabelaPrecoItemController } from './fncr-tabela-preco-item/fncr-tabela-preco-item.controller';
import { FncrTituloController } from './fncr-titulo/fncr-titulo.controller';
import { FncrTituloCentroCustoController } from './fncr-titulo-centro-custo/fncr-titulo-centro-custo.controller';

@Module({
  controllers: [FncrBancoController, FncrBancoContaController, FncrBancoContaSaldoController, FncrBancoModeloBoletoController, FncrCaixaController, FncrCaixaItemController, FncrCaixaMovimentoController, FncrComposicaoPlanoContaController, FncrFormaVencimentoController, FncrHistoricoPadraoController, FncrNivelPlanoContaController, FncrNotaFiscalTituloController, FncrParcelaController, FncrParcelaBaixaController, FncrPlanoContaController, FncrPlanoOrcamentarioController, FncrTabelaPrecoController, FncrTabelaPrecoItemController, FncrTituloController, FncrTituloCentroCustoController],
  providers: [FncrBancoService, FncrBancoContaService, FncrBancoContaSaldoService, FncrBancoModeloBoletoService, FncrCaixaService, FncrCaixaMovimentoService, FncrCaixaItemService, FncrPlanoContaService, FncrComposicaoPlanoContaService, FncrFormaVencimentoService, FncrHistoricoPadraoService, FncrNivelPlanoContaService, FncrTituloService, FncrTituloCentroCustoService, FncrNotaFiscalTituloService, FncrParcelaService, FncrParcelaBaixaService, FncrPlanoOrcamentarioService, FncrTabelaPrecoService, FncrTabelaPrecoItemService],
  exports: [],
})
export class FncrBackModule {}
