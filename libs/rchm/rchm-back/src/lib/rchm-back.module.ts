import { Module } from '@nestjs/common';
import { RchmFuncionarioHistoricoService } from './rchm-funcionario-historico/rchm-funcionario-historico.service';
import { RchmFuncionarioService } from './rchm-funcionario/rchm-funcionario.service';
import { RchmFuncionarioController } from './rchm-funcionario/rchm-funcionario.controller';
import { RchmFuncionarioHistoricoController } from './rchm-funcionario-historico/rchm-funcionario-historico.controller';

@Module({
  controllers: [RchmFuncionarioController, RchmFuncionarioHistoricoController],
  providers: [RchmFuncionarioHistoricoService, RchmFuncionarioService],
  exports: [],
})
export class RchmBackModule {}
