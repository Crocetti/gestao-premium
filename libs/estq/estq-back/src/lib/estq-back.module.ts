import { Module } from '@nestjs/common';
import { EstqCapaMovimentoService } from './estq-capa-movimento/estq-capa-movimento.service';
import { EstqFabricanteMotorService } from './estq-fabricante-motor/estq-fabricante-motor.service';
import { EstqGrupoService } from './estq-grupo/estq-grupo.service';
import { EstqItemMovimentoService } from './estq-item-movimento/estq-item-movimento.service';
import { EstqLoteValidadeService } from './estq-lote-validade/estq-lote-validade.service';
import { EstqMaquinaEquipamentoService } from './estq-maquina-equipamento/estq-maquina-equipamento.service';
import { EstqMarcaService } from './estq-marca/estq-marca.service';
import { EstqModeloService } from './estq-modelo/estq-modelo.service';
import { EstqNumeroDocumentoService } from './estq-numero-documento/estq-numero-documento.service';
import { EstqProdutoSaldoService } from './estq-produto-saldo/estq-produto-saldo.service';
import { EstqSaldoCentroCustoService } from './estq-saldo-centro-custo/estq-saldo-centro-custo.service';
import { EstqSubgrupoService } from './estq-subgrupo/estq-subgrupo.service';
import { EstqCapaMovimentoController } from './estq-capa-movimento/estq-capa-movimento.controller';
import { EstqFabricanteMotorController } from './estq-fabricante-motor/estq-fabricante-motor.controller';
import { EstqGrupoController } from './estq-grupo/estq-grupo.controller';
import { EstqItemMovimentoController } from './estq-item-movimento/estq-item-movimento.controller';
import { EstqLoteValidadeController } from './estq-lote-validade/estq-lote-validade.controller';
import { EstqMaquinaEquipamentoController } from './estq-maquina-equipamento/estq-maquina-equipamento.controller';
import { EstqMarcaController } from './estq-marca/estq-marca.controller';
import { EstqModeloController } from './estq-modelo/estq-modelo.controller';
import { EstqNumeroDocumentoController } from './estq-numero-documento/estq-numero-documento.controller';
import { EstqProdutoSaldoController } from './estq-produto-saldo/estq-produto-saldo.controller';
import { EstqSaldoCentroCustoController } from './estq-saldo-centro-custo/estq-saldo-centro-custo.controller';
import { EstqSubgrupoController } from './estq-subgrupo/estq-subgrupo.controller';

@Module({
  controllers: [EstqCapaMovimentoController, EstqFabricanteMotorController, EstqGrupoController, EstqItemMovimentoController, EstqLoteValidadeController, EstqMaquinaEquipamentoController, EstqMarcaController, EstqModeloController, EstqNumeroDocumentoController, EstqProdutoSaldoController, EstqSaldoCentroCustoController, EstqSubgrupoController],
  providers: [EstqCapaMovimentoService, EstqFabricanteMotorService, EstqGrupoService, EstqItemMovimentoService, EstqLoteValidadeService, EstqMaquinaEquipamentoService, EstqMarcaService, EstqModeloService, EstqNumeroDocumentoService, EstqProdutoSaldoService, EstqSaldoCentroCustoService, EstqSubgrupoService],
  exports: [],
})
export class EstqBackModule {}
